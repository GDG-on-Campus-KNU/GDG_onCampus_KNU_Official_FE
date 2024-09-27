import CompanyLogo from '@gdg/assets/CompanyLogo.svg';
import GithubLogo from '@gdg/assets/GithubLogo.svg';
import InstagramLogo from '@gdg/assets/InstagramLogo.svg';
import Phone from '@gdg/assets/Phone.svg';
import Text from '@gdg/components/common/typography/Text';
import {
  Footer,
  DisplayFooter,
  Display,
  TextBorder,
  Table,
  TableData,
} from '@gdg/styles/FooterLayoutStyle';

const MainFooter = () => {
  return (
    <Footer>
      <DisplayFooter>
        <Display>
          <TextBorder>
            <Text color='white' size='md'>
              GDG on Campus KNU
            </Text>
          </TextBorder>
          <Table>
            <tbody>
              <tr>
                <TableData>
                  <img src={Phone} alt='Logo' />
                </TableData>
                <TableData>
                  <img src={GithubLogo} alt='Logo' />
                </TableData>
                <TableData>
                  <img src={InstagramLogo} alt='Logo' />
                </TableData>
                <TableData>
                  <img src={CompanyLogo} alt='Logo' />
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <Text color='white' size='md'>
                    대표 연락처
                  </Text>
                </TableData>
                <TableData>
                  <Text color='white' size='md'>
                    GDSC 팀 깃허브
                  </Text>
                </TableData>
                <TableData>
                  <Text color='white' size='md'>
                    인스타그램
                  </Text>
                </TableData>
                <TableData>
                  <Text color='white' size='md'>
                    협력사
                  </Text>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <Text color='white' size='xs'>
                    010-4922-7687
                  </Text>
                </TableData>
                <TableData>
                  <a
                    href='https://github.com/GDSC-KNU'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Text color='white' size='xs' whiteSpace='normal'>
                      https://github.com/GDSC-KNU
                    </Text>
                  </a>
                </TableData>
                <TableData>
                  <a
                    href='https://www.instagram.com/gdsc.knu/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Text color='white' size='xs' whiteSpace='normal'>
                      https://www.instagram.com/gdsc.knu/
                    </Text>
                  </a>
                </TableData>
                <TableData>
                  <a
                    href='https://datainstitute.knu.ac.kr/contents/main.do'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Text color='white' size='xs'>
                      데이터융복합연구원 바로가기
                    </Text>
                  </a>
                </TableData>
              </tr>
            </tbody>
          </Table>
        </Display>
      </DisplayFooter>
    </Footer>
  );
};

export default MainFooter;
