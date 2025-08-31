import React, { Suspense, lazy } from 'react';

// Lazy load all the note components
const lectureNotes: { [key: string]: React.LazyExoticComponent<React.FC<{}>> } = {
  'lec-1-1': lazy(() => import('./notes/chapter-1/Chapter1Subchapter1')),
  'lec-1-2': lazy(() => import('./notes/chapter-1/Chapter1Subchapter2')),
  'lec-1-3': lazy(() => import('./notes/chapter-1/Chapter1Subchapter3')),
  'lec-1-4': lazy(() => import('./notes/chapter-1/Chapter1Subchapter4')),
  'lec-1-5': lazy(() => import('./notes/chapter-1/Chapter1Subchapter5')),
  'lec-1-6': lazy(() => import('./notes/chapter-1/Chapter1Subchapter6')),
  'lec-2-1': lazy(() => import('./notes/chapter-2/Chapter2Subchapter1')),
  'lec-2-2': lazy(() => import('./notes/chapter-2/Chapter2Subchapter2')),
  'lec-3-1': lazy(() => import('./notes/chapter-3/Chapter3Subchapter1')),
  'lec-3-2': lazy(() => import('./notes/chapter-3/Chapter3Subchapter2')),
  'lec-3-3': lazy(() => import('./notes/chapter-3/Chapter3Subchapter3')),
  'lec-4-1': lazy(() => import('./notes/chapter-4/Chapter4Subchapter1')),
  'lec-4-2': lazy(() => import('./notes/chapter-4/Chapter4Subchapter2')),
  'lec-4-3': lazy(() => import('./notes/chapter-4/Chapter4Subchapter3')),
  'lec-5-1': lazy(() => import('./notes/chapter-5/Chapter5Subchapter1')),
  'lec-5-2': lazy(() => import('./notes/chapter-5/Chapter5Subchapter2')),
  'lec-6-1': lazy(() => import('./notes/chapter-6/Chapter6Subchapter1')),
  'lec-6-2': lazy(() => import('./notes/chapter-6/Chapter6Subchapter2')),
  'lec-6-3': lazy(() => import('./notes/chapter-6/Chapter6Subchapter3')),
  'lec-6-4': lazy(() => import('./notes/chapter-6/Chapter6Subchapter4')),
  'lec-7-1': lazy(() => import('./notes/chapter-7/Chapter7Subchapter1')),
  'lec-7-2': lazy(() => import('./notes/chapter-7/Chapter7Subchapter2')),
  'lec-7-3': lazy(() => import('./notes/chapter-7/Chapter7Subchapter3')),
  'lec-8-1': lazy(() => import('./notes/chapter-8/Chapter8Subchapter1')),
  'lec-8-2': lazy(() => import('./notes/chapter-8/Chapter8Subchapter2')),
  'lec-8-3': lazy(() => import('./notes/chapter-8/Chapter8Subchapter3')),
  'lec-9-1': lazy(() => import('./notes/chapter-9/Chapter9Subchapter1')),
  'lec-9-2': lazy(() => import('./notes/chapter-9/Chapter9Subchapter2')),
  'lec-9-3': lazy(() => import('./notes/chapter-9/Chapter9Subchapter3')),
  'lec-9-4': lazy(() => import('./notes/chapter-9/Chapter9Subchapter4')),
  'lec-10-1': lazy(() => import('./notes/chapter-10/Chapter10Subchapter1')),
  'lec-11-1': lazy(() => import('./notes/chapter-11/Chapter11Subchapter1')),
  'lec-11-2': lazy(() => import('./notes/chapter-11/Chapter11Subchapter2')),
  'lec-11-3': lazy(() => import('./notes/chapter-11/Chapter11Subchapter3')),
  'lec-12-1': lazy(() => import('./notes/chapter-12/Chapter12Subchapter1')),
  'lec-12-2': lazy(() => import('./notes/chapter-12/Chapter12Subchapter2')),
  'lec-13-1': lazy(() => import('./notes/chapter-13/Chapter13Subchapter1')),
  'lec-13-2': lazy(() => import('./notes/chapter-13/Chapter13Subchapter2')),
  'lec-13-3': lazy(() => import('./notes/chapter-13/Chapter13Subchapter3')),
  'lec-14-1': lazy(() => import('./notes/chapter-14/Chapter14Subchapter1')),
  'lec-14-2': lazy(() => import('./notes/chapter-14/Chapter14Subchapter2')),
  'lec-15-1': lazy(() => import('./notes/chapter-15/Chapter15Subchapter1')),
  'lec-15-2': lazy(() => import('./notes/chapter-15/Chapter15Subchapter2')),
  'lec-15-3': lazy(() => import('./notes/chapter-15/Chapter15Subchapter3')),
  'lec-15-4': lazy(() => import('./notes/chapter-15/Chapter15Subchapter4')),
  'lec-15-5': lazy(() => import('./notes/chapter-15/Chapter15Subchapter5')),
  'lec-15-6': lazy(() => import('./notes/chapter-15/Chapter15Subchapter6')),
  'lec-16-1': lazy(() => import('./notes/chapter-16/Chapter16Subchapter1')),
  'lec-17-1': lazy(() => import('./notes/chapter-17/Chapter17Subchapter1')),
  'lec-18-1': lazy(() => import('./notes/chapter-18/Chapter18Subchapter1')),
};

interface LectureNotesProps {
  lectureId: string;
}

const LectureNotes: React.FC<LectureNotesProps> = ({ lectureId }) => {
  const NoteComponent = lectureNotes[lectureId];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {NoteComponent ? <NoteComponent /> : <div>Notes not found</div>}
    </Suspense>
  );
};

export default LectureNotes;