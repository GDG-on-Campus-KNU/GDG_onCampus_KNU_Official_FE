import styled from '@emotion/styled';
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
import { Link } from 'react-router-dom';

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
              GDG on Campus KNU
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
