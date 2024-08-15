export type MemberData = {
  id: number;
  name: string;
  submittedAt: string;
  studentNumber: string;
  major: string;
  track: string;
  open: boolean;
  marked: boolean;
};

export type Track = 'FRONT_END' | 'BACK_END' | 'ANDROID' | 'AI' | 'DESIGNER';
