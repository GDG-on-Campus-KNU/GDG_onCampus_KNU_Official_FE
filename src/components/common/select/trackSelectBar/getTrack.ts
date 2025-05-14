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

export const trackKoreanMapping = (track: string) => {
  if (track === '') return '전체';
  if (track === 'FRONTEND') return '프론트엔드';
  if (track === 'BACKEND') return '백엔드';
  if (track === 'ANDROID') return '안드로이드';
  if (track === 'AI') return 'AI';
  if (track === 'DESIGN') return '디자이너';
  if (track === 'ETC') return '기타';
};
