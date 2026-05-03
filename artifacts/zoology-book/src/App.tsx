import { GaleriaAutomatica } from './GaleriaAutomatica';
import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { BookSidebar } from "@/components/book-sidebar";
import { ChapterContent } from "@/components/chapter-content";
import { chapters } from "@/lib/book-data";

function ZooStudyPage() {
  const [currentChapter, setCurrentChapter] = useState("arquitectura-1");
  const [currentSection, setCurrentSection] = useState("biodiversidad");
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("zoostudy-progress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch {
        /* ignore */
      }
    }

    const savedPosition = localStorage.getItem("zoostudy-position");
    if (savedPosition) {
      try {
        const { chapter, section } = JSON.parse(savedPosition);
        if (chapter) setCurrentChapter(chapter);
        if (section) setCurrentSection(section);
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("zoostudy-progress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(
      "zoostudy-position",
      JSON.stringify({ chapter: currentChapter, section: currentSection })
    );
  }, [currentChapter, currentSection]);

  const handleNavigate = (chapterId: string, sectionId?: string) => {
    setCurrentChapter(chapterId);
    const chapter = chapters.find((c) => c.id === chapterId);
    if (sectionId) {
      setCurrentSection(sectionId);
    } else if (chapter) {
      setCurrentSection(chapter.sections[0].id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMarkComplete = (chapterId: string, sectionId: string) => {
    const key = `${chapterId}-${sectionId}`;
    const wasCompleted = progress[key];
    setProgress((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    if (!wasCompleted) {
      const chapter = chapters.find((c) => c.id === chapterId);
      if (chapter) {
        const sectionIndex = chapter.sections.findIndex((s) => s.id === sectionId);
        const nextSection = chapter.sections[sectionIndex + 1];
        if (nextSection) {
          setTimeout(() => {
            handleNavigate(chapterId, nextSection.id);
          }, 500);
        } else {
          const chapterIndex = chapters.findIndex((c) => c.id === chapterId);
          const nextChapter = chapters[chapterIndex + 1];
          if (nextChapter) {
            setTimeout(() => {
              handleNavigate(nextChapter.id, nextChapter.sections[0].id);
            }, 500);
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
        progress={progress}
      />
      <ChapterContent
        chapterId={currentChapter}
        sectionId={currentSection}
        onNavigate={handleNavigate}
        onMarkComplete={handleMarkComplete}
        progress={progress}
      />
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
