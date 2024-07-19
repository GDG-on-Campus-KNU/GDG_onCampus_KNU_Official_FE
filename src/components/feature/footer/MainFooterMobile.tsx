import { Link } from 'react-router-dom';

import Text from '@gdsc/components/common/typography/Text';

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

import styled from '@emotion/styled';

const MobileImg = styled.img`
  margin-right: 10px;
`;

const MobileFooterMobile = () => {
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
                  <MobileImg src={Phone} alt='Logo' />
                  <Text color='white' size='xs'>
                    010-4922-7687
                  </Text>
                </TableData>
                <TableData>
                  <MobileImg src={GithubLogo} alt='Logo' />
                  <Link to='https://github.com/GDSC-KNU'>
                    <Text color='white' size='xs'>
                      Github 바로가기
                    </Text>
                  </Link>
                </TableData>
              </tr>
              <tr>
                <TableData>
                  <MobileImg src={InstagramLogo} alt='Logo' />
                  <Link to='https://www.instagram.com/gdsc.knu/'>
                    <Text color='white' size='xs'>
                      Instagram 바로가기
                    </Text>
                  </Link>
                </TableData>
                <TableData>
                  <MobileImg src={CompanyLogo} alt='Logo' />
                  <Link to='https://datainstitute.knu.ac.kr/contents/main.do'>
                    <Text color='white' size='xs'>
                      데이터융복합연구원
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

export default MobileFooterMobile;
