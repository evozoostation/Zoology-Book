import { cn } from "@/lib/utils";
import {
  getChapterById,
  getSectionById,
  getNextSection,
  getPreviousSection,
  type ContentBlock,
} from "@/lib/book-data";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkPlus,
  Check,
  ChevronRight,
  Info,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

interface ChapterContentProps {
  chapterId: string;
  sectionId: string;
  onNavigate: (chapterId: string, sectionId?: string) => void;
  onMarkComplete: (chapterId: string, sectionId: string) => void;
  progress: Record<string, boolean>;
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      if (block.level === 1) {
        return (
          <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
            {block.text}
          </h1>
        );
      }
      if (block.level === 2) {
        return (
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-foreground first:mt-0">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 className="mt-6 text-xl font-semibold text-foreground first:mt-0">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground first:mt-0">
          {renderInline(block.text)}
        </p>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={cn(
            "mt-4 space-y-2 pl-6",
            block.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {block.items.map((item, idx) => (
            <li key={idx} className="text-muted-foreground">
              {renderInline(item)}
            </li>
          ))}
        </ListTag>
      );
    }

    case "definition":
      return (
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
          <dt className="font-bold text-foreground">{renderInline(block.term)}</dt>
          <dd className="mt-1 text-sm text-muted-foreground">{renderInline(block.definition)}</dd>
        </div>
      );

    case "table":
      return (
        <div className="mt-6 overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {block.headers.map((header, idx) => (
                  <th key={idx} className="p-4 text-left font-bold text-foreground">
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-muted/50">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="p-4 text-muted-foreground">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout": {
      const variants = {
        info: {
          bg: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950",
          title: "text-blue-800 dark:text-blue-200",
          icon: Info,
        },
        warning: {
          bg: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950",
          title: "text-amber-800 dark:text-amber-200",
          icon: AlertTriangle,
        },
        tip: {
          bg: "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950",
          title: "text-green-800 dark:text-green-200",
          icon: Lightbulb,
        },
        example: {
          bg: "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950",
          title: "text-purple-800 dark:text-purple-200",
          icon: BookOpen,
        },
      } as const;
      const v = variants[block.variant];
      const Icon = v.icon;
      return (
        <div className={cn("mt-6 rounded-xl border-2 p-5", v.bg)}>
          <div className="mb-3 flex items-center gap-2">
            <Icon className={cn("h-4 w-4", v.title)} />
            <h4 className={cn("font-bold", v.title)}>{block.title || block.variant}</h4>
          </div>
          <div className="text-sm text-muted-foreground">{renderInline(block.content)}</div>
        </div>
      );
    }

    case "keypoint":
      return (
        <div className="mt-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h4 className="font-bold text-primary">Puntos Clave</h4>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
            {block.points.map((point, idx) => (
              <li key={idx}>{renderInline(point)}</li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

export function ChapterContent({
  chapterId,
  sectionId,
  onNavigate,
  onMarkComplete,
  progress,
}: ChapterContentProps) {
  const chapter = getChapterById(chapterId);
  const section = getSectionById(chapterId, sectionId) || chapter?.sections[0];

  if (!chapter || !section) return null;

  const sectionKey = `${chapterId}-${section.id}`;
  const isCompleted = progress[sectionKey];

  const nextNav = getNextSection(chapterId, section.id);
  const prevNav = getPreviousSection(chapterId, section.id);

  return (
    <div className="min-h-screen pb-24 lg:ml-72">
      {/* Hero Section */}
      <header className="relative flex h-[280px] items-end rounded-b-[40px] bg-gradient-to-br from-primary/90 to-primary/60 p-8 lg:p-12">
        <div className="max-w-4xl">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">
            Capítulo {chapter.number}
          </Badge>
          <h1 className="text-balance text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
            {chapter.title}
          </h1>
          <p className="mt-3 text-lg text-white/80">{chapter.subtitle}</p>
        </div>

        <div className="absolute right-8 top-8 flex items-center gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="gap-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <BookmarkPlus className="h-4 w-4" />
            Guardar
          </Button>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{chapter.title}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">{section.title}</span>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {chapter.sections.map((s) => {
              const isActive = s.id === section.id;
              const sKey = `${chapterId}-${s.id}`;
              const isDone = progress[sKey];

              return (
                <button
                  key={s.id}
                  onClick={() => onNavigate(chapterId, s.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {isDone && <Check className="h-3 w-3" />}
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          {section.content.map((block, idx) => (
            <ContentBlockRenderer key={idx} block={block} />
          ))}
        </article>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            onClick={() => onMarkComplete(chapterId, section.id)}
            className={cn(
              "gap-2 px-8",
              isCompleted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-primary hover:bg-primary/90"
            )}
          >
            {isCompleted ? (
              <>
                <Check className="h-5 w-5" />
                Completado
              </>
            ) : (
              <>
                <Check className="h-5 w-5" />
                Marcar como completado
              </>
            )}
          </Button>
        </div>

        <nav className="mt-12 flex items-center justify-between border-t border-border pt-8">
          {prevNav ? (
            <Button
              variant="outline"
              onClick={() => onNavigate(prevNav.chapterId, prevNav.sectionId)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Button>
          ) : (
            <div />
          )}

          {nextNav ? (
            <Button
              onClick={() => onNavigate(nextNav.chapterId, nextNav.sectionId)}
              className="gap-2"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </div>
  );
}
