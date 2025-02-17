export const getTrack = (index: number) => {
  switch (index) {
    case 0:
      return '';
    case 1:
      return 'FRONT_END';
    case 2:
      return 'BACK_END';
    case 3:
      return 'ANDROID';
    case 4:
      return 'AI';
    case 5:
      return 'DESIGNER';
    default:
      return '';
  }
};

export const getBlogTrack = (index: number) => {
  switch (index) {
    case 0:
      return '';
    case 1:
      return 'FRONTEND';
    case 2:
      return 'BACKEND';
    case 3:
      return 'ANDROID';
    case 4:
      return 'AI';
    case 5:
      return 'DESIGN';
    case 6:
      return 'ETC';
    default:
      return '';
  }
};
