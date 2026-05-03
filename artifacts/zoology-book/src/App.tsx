import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { BookSidebar } from "@/components/book-sidebar";
import { ChapterContent } from "@/components/chapter-content";
import { Gallery } from "@/components/gallery";
import { chapters } from "@/lib/book-data";

type View = { type: "chapter"; chapterId: string; sectionId: string } | { type: "gallery" };

function ZooStudyPage() {
  const [view, setView] = useState<View>({ type: "chapter", chapterId: "arquitectura-1", sectionId: "biodiversidad" });
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  const currentChapter = view.type === "chapter" ? view.chapterId : "";
  const currentSection = view.type === "chapter" ? view.sectionId : "";

  useEffect(() => {
    const savedProgress = localStorage.getItem("zoostudy-progress");
    if (savedProgress) {
      try { setProgress(JSON.parse(savedProgress)); } catch { /* ignore */ }
    }
    const savedPosition = localStorage.getItem("zoostudy-position");
    if (savedPosition) {
      try {
        const { chapter, section } = JSON.parse(savedPosition);
        if (chapter) setView({ type: "chapter", chapterId: chapter, sectionId: section || "biodiversidad" });
      } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("zoostudy-progress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (view.type === "chapter") {
      localStorage.setItem("zoostudy-position", JSON.stringify({ chapter: view.chapterId, section: view.sectionId }));
    }
  }, [view]);

  const handleNavigate = (chapterId: string, sectionId?: string) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    setView({
      type: "chapter",
      chapterId,
      sectionId: sectionId ?? chapter?.sections[0]?.id ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenGallery = () => {
    setView({ type: "gallery" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMarkComplete = (chapterId: string, sectionId: string) => {
    const key = `${chapterId}-${sectionId}`;
    const wasCompleted = progress[key];
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));

    if (!wasCompleted) {
      const chapter = chapters.find((c) => c.id === chapterId);
      if (chapter) {
        const sectionIndex = chapter.sections.findIndex((s) => s.id === sectionId);
        const nextSection = chapter.sections[sectionIndex + 1];
        if (nextSection) {
          setTimeout(() => handleNavigate(chapterId, nextSection.id), 500);
        } else {
          const chapterIndex = chapters.findIndex((c) => c.id === chapterId);
          const nextChapter = chapters[chapterIndex + 1];
          if (nextChapter) {
            setTimeout(() => handleNavigate(nextChapter.id, nextChapter.sections[0].id), 500);
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BookSidebar
        currentChapter={currentChapter}
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenGallery={handleOpenGallery}
        isGalleryActive={view.type === "gallery"}
        progress={progress}
      />
      {view.type === "gallery" ? (
        <Gallery onNavigateBack={() => handleNavigate(currentChapter || "arquitectura-1")} />
      ) : (
        <ChapterContent
          chapterId={view.chapterId}
          sectionId={view.sectionId}
          onNavigate={handleNavigate}
          onMarkComplete={handleMarkComplete}
          progress={progress}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <ZooStudyPage />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
