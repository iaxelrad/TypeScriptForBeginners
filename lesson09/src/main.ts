// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: 'conpsci123',
  title: 'Final Project',
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required & readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database etc...
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record
const hexColorMap: Record<string, string> = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};

type Students = 'Sarah' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
  Sarah: 'B',
  Kelly: 'U',
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sarah: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};
