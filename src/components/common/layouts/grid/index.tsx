import styled from '@emotion/styled';
import { breakpoints } from '@gdg/styles/variants';

type ResponseGridStyle = {
  [key in keyof typeof breakpoints]?: number;
};

type Props = {
  columns: number | ResponseGridStyle;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Grid: React.FC<Props> = ({
  children,
  columns,
  gap,
  ...props
}: Props) => {
  return (
    <Wrapper columns={columns} gap={gap} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<Props, 'columns' | 'gap'>>(
  {
    width: '100%',
    display: 'grid',
  },
  ({ gap }) => ({
    gap: gap ? `${gap}px` : '0',
  }),
  ({ columns }) => {
    if (typeof columns === 'number') {
      return {
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      };
    }

    const breakpointsKeys = Object.keys(
      columns
    ) as (keyof typeof breakpoints)[];
    return breakpointsKeys
      .map((breakpoint) => {
        return `@media screen and (min-width: ${breakpoints[breakpoint]}) { 
          grid-template-columns: repeat(${columns[breakpoint]}, minmax(0, 1fr)); 
        }`;
      })
      .join(' ');
  }
);
