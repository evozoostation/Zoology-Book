import { cn } from "@/lib/utils";
import { chapters } from "@/lib/book-data";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Search,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface BookSidebarProps {
  currentChapter: string;
  currentSection: string;
  onNavigate: (chapterId: string, sectionId?: string) => void;
  progress: Record<string, boolean>;
}

function SidebarContent({
  currentChapter,
  currentSection,
  onNavigate,
  progress,
  onClose,
}: BookSidebarProps & { onClose?: () => void }) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([currentChapter]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const completedSections = Object.values(progress).filter(Boolean).length;
  const totalSections = chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  const progressPercent = totalSections > 0
    ? Math.round((completedSections / totalSections) * 100)
    : 0;

  const filteredChapters = searchQuery
    ? chapters.filter(
        (ch) =>
          ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ch.sections.some((s) =>
            s.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : chapters;

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Header */}
      <div className="border-b border-sidebar-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">
                ZooStudy<span className="text-primary">+</span>
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/60">
                Zoología Interactiva
              </p>
            </div>
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-sidebar-foreground"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-sidebar-foreground/70">Tu progreso</span>
          <span className="font-bold text-primary">{progressPercent}%</span>
        </div>
        <Progress value={progressPercent} className="mt-2 h-2" />
        <p className="mt-2 text-[10px] text-sidebar-foreground/50">
          {completedSections} de {totalSections} secciones completadas
        </p>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-foreground/40" />
          <input
            type="text"
            placeholder="Buscar en el libro..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-sidebar-border bg-sidebar-accent py-2 pl-10 pr-4 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sidebar-foreground/40 hover:text-sidebar-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="space-y-1 px-2 pb-4">
            <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/40">
              Contenido
            </p>
            {filteredChapters.map((chapter) => {
              const isExpanded = expandedChapters.includes(chapter.id);
              const isActive = currentChapter === chapter.id;
              const chapterProgress = chapter.sections.filter(
                (s) => progress[`${chapter.id}-${s.id}`]
              ).length;

              return (
                <div key={chapter.id}>
                  <button
                    onClick={() => {
                      toggleChapter(chapter.id);
                      onNavigate(chapter.id);
                      onClose?.();
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-sidebar-accent text-sidebar-foreground/60"
                      )}
                    >
                      {chapter.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-semibold">{chapter.title}</p>
                      <p className="text-[10px] text-sidebar-foreground/50">
                        {chapterProgress}/{chapter.sections.length} secciones
                      </p>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 shrink-0 text-sidebar-foreground/40" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0 text-sidebar-foreground/40" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="ml-6 mt-1 space-y-1 border-l-2 border-sidebar-border pl-4">
                      {chapter.sections.map((section) => {
                        const sectionKey = `${chapter.id}-${section.id}`;
                        const isCompleted = progress[sectionKey];
                        const isSectionActive =
                          currentChapter === chapter.id &&
                          currentSection === section.id;

                        return (
                          <button
                            key={section.id}
                            onClick={() => {
                              onNavigate(chapter.id, section.id);
                              onClose?.();
                            }}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-all",
                              isSectionActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-sidebar-foreground/60 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                            )}
                          >
                            <div
                              className={cn(
                                "h-2 w-2 rounded-full shrink-0",
                                isCompleted
                                  ? "bg-green-500"
                                  : isSectionActive
                                  ? "bg-primary"
                                  : "bg-sidebar-foreground/20"
                              )}
                            />
                            <span className="truncate">{section.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs font-semibold">Zoología General</p>
            <p className="text-[10px] text-sidebar-foreground/50">
              {chapters.length} capítulos •{" "}
              {chapters.reduce((acc, ch) => acc + ch.sections.length, 0)} secciones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookSidebar(props: BookSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-50 lg:hidden bg-card shadow-lg"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SidebarContent {...props} onClose={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 lg:block">
        <SidebarContent {...props} />
      </aside>
    </>
  );
}
