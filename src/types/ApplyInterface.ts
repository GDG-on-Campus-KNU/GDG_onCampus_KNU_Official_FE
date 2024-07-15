export interface ApplyExInterface {
  korean: string;
  english: string;
  explain: string;
  duedate: string;
  link: string;
  recruit: string[];
  prefer: string[];
  event: string[];
}

export interface ApplyFormInterface {
  techStack?: string;
  links?: string;
  applicationStatus?: string;
  track?: string;
  answers?: Array<{ questionNumber: number; answer?: string }>;
}

export interface ApplyFormAPIInterface extends ApplyFormInterface {
  id: number;
}

export interface ApplyFormQuestionInterface {
  korean: string;
  english: string;
  Question1: {
    main: string;
  };
  Question2: {
    main: string;
    sub: string;
  };
  Question3: {
    main: string;
    sub: string;
  };
  Question4: {
    main: string;
    sub: string;
  };
}
