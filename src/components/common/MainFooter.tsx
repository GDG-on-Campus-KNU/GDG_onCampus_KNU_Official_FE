import { Link } from 'react-router-dom';

import Text from '@gdsc/components/typography/Text';

import CompanyLogo from '@gdsc/assets/CompanyLogo.svg';
import GithubLogo from '@gdsc/assets/GithubLogo.svg';
import InstagramLogo from '@gdsc/assets/InstagramLogo.svg';
import Phone from '@gdsc/assets/Phone.svg';

import {
  Footer,
  DisplayFooter,
  Display,
  TextBorder,
  Table,
  TableData,
} from '@gdsc/styles/FooterLayoutStyle';

const MainFooter = () => {
  return (
    <Footer>
      <DisplayFooter>
        <Display>
          <TextBorder>
            <Text color='white' size='md'>
              GDSC KNU
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
                  <Link to='https://github.com/GDSC-KNU'>
                    <Text color='white' size='xs' whiteSpace='normal'>
                      https://github.com/GDSC-KNU
                    </Text>
                  </Link>
                </TableData>
                <TableData>
                  <Link to='https://www.instagram.com/gdsc.knu/'>
                    <Text color='white' size='xs' whiteSpace='normal'>
                      https://www.instagram.com/gdsc.knu/
                    </Text>
                  </Link>
                </TableData>
                <TableData>
                  <Link to='https://datainstitute.knu.ac.kr/contents/main.do'>
                    <Text color='white' size='xs'>
                      데이터융복합연구원 바로가기
                    </Text>
                  </Link>
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
