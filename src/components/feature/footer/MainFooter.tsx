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

const FooterRow = ({
  items,
  renderItem,
}: {
  items: typeof footerLinks;
  renderItem: (item: (typeof footerLinks)[0]) => React.ReactNode;
}) => (
  <tr>
    {items.map((item, i) => (
      <TableData key={i}>{renderItem(item)}</TableData>
    ))}
  </tr>
);

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
              <FooterRow
                items={footerLinks}
                renderItem={({ icon }) => <img src={icon} alt='Logo' />}
              />
              <FooterRow
                items={footerLinks}
                renderItem={({ title }) => (
                  <Text color='white' size='md'>
                    {title}
                  </Text>
                )}
              />
              <FooterRow
                items={footerLinks}
                renderItem={({ content, href }) =>
                  href ? (
                    <a href={href} target='_blank' rel='noopener noreferrer'>
                      <Text color='white' size='xs' whiteSpace='normal'>
                        {content}
                      </Text>
                    </a>
                  ) : (
                    <Text color='white' size='xs'>
                      {content}
                    </Text>
                  )
                }
              />
            </tbody>
          </Table>
        </Display>
      </DisplayFooter>
    </Footer>
  );
};

export default MainFooter;
