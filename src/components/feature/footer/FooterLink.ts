import CompanyLogo from '@gdg/assets/CompanyLogo.svg';
import GithubLogo from '@gdg/assets/GithubLogo.svg';
import InstagramLogo from '@gdg/assets/InstagramLogo.svg';
import Phone from '@gdg/assets/Phone.svg';

type FooterLink = {
  icon: string;
  title: string;
  content: string;
  href?: string;
};

export const footerLinks: FooterLink[] = [
  {
    icon: Phone,
    title: '대표 연락처',
    content: '010-4922-7687',
  },
  {
    icon: GithubLogo,
    title: 'GDG KNU 팀 깃허브',
    content: 'Github 바로가기',
    href: 'https://github.com/GDG-on-Campus-KNU',
  },
  {
    icon: InstagramLogo,
    title: '인스타그램',
    content: '@gdgoc.knu 바로가기',
    href: 'https://www.instagram.com/gdgoc.knu/',
  },
  {
    icon: CompanyLogo,
    title: '협력사',
    content: '데이터융복합연구원 바로가기',
    href: 'https://datainstitute.knu.ac.kr/contents/main.do',
  },
];
