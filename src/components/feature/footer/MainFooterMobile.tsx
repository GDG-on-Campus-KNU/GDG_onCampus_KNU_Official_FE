import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Text from '@gdg/components/common/typography/Text';
import {
  Footer,
  DisplayFooter,
  Display,
  TextBorder,
  Table,
  TableData,
} from '@gdg/styles/FooterLayoutStyle';

import { footerLinks } from './FooterLink';

const MobileImg = styled.img`
  margin-right: 10px;
`;

const FooterCell = ({
  icon,
  content,
  href,
}: {
  icon: string;
  content: string;
  href?: string;
}) => (
  <TableData>
    <MobileImg src={icon} alt='Logo' />
    {href ? (
      <Link to={href}>
        <Text color='white' size='xs'>
          {content}
        </Text>
      </Link>
    ) : (
      <Text color='white' size='xs'>
        {content}
      </Text>
    )}
  </TableData>
);

const MainFooterMobile = () => {
  const rows = [footerLinks.slice(0, 2), footerLinks.slice(2, 4)];

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
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, cellIndex) => (
                    <FooterCell
                      key={cellIndex}
                      icon={item.icon}
                      content={item.content}
                      href={item.href}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Display>
      </DisplayFooter>
    </Footer>
  );
};

export default MainFooterMobile;
