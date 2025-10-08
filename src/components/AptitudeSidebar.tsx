import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const sidebarData = [
  {
    section: 'Quantitative Aptitude',
    chapters: [
      { id: 'number-system', title: 'Number System' },
      { id: 'lcm-hcf', title: 'LCM & HCF' },
      { id: 'percentages', title: 'Percentages' },
      { id: 'profit-loss', title: 'Profit & Loss' },
      { id: 'simple-compound-interest', title: 'Simple & Compound Interest' },
      { id: 'ratio-proportion', title: 'Ratio & Proportion' },
      { id: 'pipes-cisterns', title: 'Pipes & Cisterns' },
      { id: 'time-work', title: 'Time & Work' },
      { id: 'average', title: 'Average' },
      { id: 'permutations-combinations', title: 'Permutations & Combinations' },
      { id: 'probability', title: 'Probability' },
      { id: 'age-problems', title: 'Age Problems' },
      { id: 'partnerships', title: 'Partnerships' },
      { id: 'allegations-mixtures', title: 'Allegations & Mixtures' },
      { id: 'chain-rule', title: 'Chain Rule' },
      { id: 'train-problems', title: 'Train Problems' },
      { id: 'boats-streams', title: 'Boats & Streams' },
      { id: 'data-interpretation', title: 'Data Interpretation' },
    ],
  },
  {
    section: 'Logical Reasoning',
    chapters: [
      { id: 'number-series', title: 'Number Series' },
      { id: 'seating-arrangement', title: 'Seating Arrangements' },
      { id: 'clock-problems', title: 'Clock Problems' },
      { id: 'calendar', title: 'Calendar' },
      { id: 'blood-relations', title: 'Blood Relations' },
      { id: 'directions', title: 'Directions' },
      { id: 'word-pattern', title: 'Word Pattern' },
      { id: 'coding-decoding', title: 'Coding & Decoding' },
      { id: 'maths-ops', title: 'Mathematical Operations' },
      { id: 'venn-diagram', title: 'Venn Diagrams' },
      { id: 'visual-reasoning', title: 'Visual Reasoning' },
      { id: 'paper-cutting-adding', title: 'Paper Cutting & Adding' },
      { id: 'cubes-dices', title: 'Cubes & Dices' },
      { id: 'data-sufficency', title: 'Data Sufficency' },
    ],
  },
  {
    section: 'Verbal Ability',
    chapters: [
      { id: 'ReadingComp', title: 'Reading Comprehension' },
      { id: 'SpottingErrors', title: 'Spotting Errors' },
      { id: 'SentenceFormation', title: 'Sentence Formation' },
      { id: 'SynnonymAndAntonym', title: 'Synonyms & Antonyms' },
      { id: 'IdiomsAndPhrases', title: 'Idioms & Phrases' },
    ],
  },
];

const AptitudeSidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSection = useCallback((section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-muted text-muted-foreground border-r border-border md:h-screen
          transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h2 className="text-xl font-bold text-primary">Topics</h2>
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
              {sidebarData.map((section) => (
                <div key={section.section} className="mb-4">
                  {/* Section Toggle */}
                  <button
                    onClick={() => toggleSection(section.section)}
                    className="w-full text-left px-3 py-2 rounded-md bg-background hover:bg-background/90 focus:outline-none transition-colors duration-200 font-semibold flex justify-between items-center"
                  >
                    <span>{section.section}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openSections[section.section] ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Chapters (expand/collapse) */}
                  <ul
                    className={`mt-2 ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      openSections[section.section] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {section.chapters.map((chapter) => (
                      <li key={chapter.id} className="mb-1">
                        <Link
                          to={`/aptitude/${chapter.id}`}
                          onClick={handleCloseMobileMenu}
                          className="w-full text-left px-3 py-2 rounded-md 
                            text-foreground hover:bg-accent hover:text-accent-foreground 
                            focus:outline-none focus:bg-accent focus:text-accent-foreground 
                            transition-colors duration-200 text-sm block"
                        >
                          {chapter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default React.memo(AptitudeSidebar);
