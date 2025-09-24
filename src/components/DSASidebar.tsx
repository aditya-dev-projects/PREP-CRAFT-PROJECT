import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { dsaCourse } from '../data/dsaCourse';
import { ThemeToggle } from './ThemeToggle';

const DSASidebar: React.FC = () => {
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleChapter = useCallback((chapterId: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  }, []);

  const handleSelect = useCallback(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 bg-muted border-b border-border">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-background/90 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-muted text-muted-foreground border-r border-border md:h-screen
          transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h2 className="text-lg font-bold text-primary">{dsaCourse.title}</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-background/90 md:hidden"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              {dsaCourse.chapters.map((chapter) => (
                <div key={chapter.id} className="mb-2">
                  {/* Chapter Toggle */}
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left px-3 py-2 rounded-md bg-background hover:bg-background/90 focus:outline-none transition-colors duration-200 font-semibold flex justify-between items-center"
                  >
                    <span className="text-sm">{chapter.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openChapters[chapter.id] ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Sub-chapters (expand/collapse) */}
                  <ul
                    className={`mt-2 ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      openChapters[chapter.id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {chapter.subChapters.map((subChapter) => (
                      <li key={subChapter.id} className="mb-1">
                        <Link
                          to={subChapter.type === 'note' ? `/dsa/notes/${chapter.folder}/${subChapter.file}` : `/dsa/quiz/${subChapter.file}`}
                          onClick={handleSelect}
                          className="block w-full text-left px-3 py-2 rounded-md 
                            text-foreground hover:bg-accent hover:text-accent-foreground 
                            focus:outline-none focus:bg-accent focus:text-accent-foreground 
                            transition-colors duration-200 text-xs"
                        >
                          {subChapter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Quizzes Section */}
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="text-lg font-bold text-primary mb-2">Quizzes</h3>
                <ul>
                  {dsaCourse.quizzes.map((quiz) => (
                    <li key={quiz.id} className="mb-1">
                      <Link
                        to={`/dsa/quiz/${quiz.file}`}
                        onClick={handleSelect}
                        className="block w-full text-left px-3 py-2 rounded-md 
                          bg-yellow-200 hover:bg-yellow-300 
                          dark:bg-yellow-700 dark:hover:bg-yellow-800 
                          transition-colors duration-200 text-xs font-bold text-foreground"
                      >
                        {quiz.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay to close sidebar when clicking outside on mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default React.memo(DSASidebar);