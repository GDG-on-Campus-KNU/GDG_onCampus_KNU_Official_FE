import styled from '@emotion/styled';
import { breakpoints } from '@gdg/styles/variants';

type ResponseGridStyle = {
  [key in keyof typeof breakpoints]?: number | string;
};

type Props = {
  columns: number | ResponseGridStyle;
  gap: number | ResponseGridStyle;
  padding: number | ResponseGridStyle;
} & React.HTMLAttributes<HTMLDivElement>;

const Grid: React.FC<Props> = ({
  children,
  columns,
  padding,
  gap,
  ...props
}: Props) => {
  return (
    <Wrapper columns={columns} gap={gap} padding={padding} {...props}>
      {children}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div<Pick<Props, 'columns' | 'gap' | 'padding'>>(
  {
    display: 'grid',
  },
  ({ padding }) => {
    if (typeof padding === 'number') {
      return {
        padding: `0 ${padding}px`,
        width: `calc(100% - (2 * ${padding}))`,
      };
    }

    const defaultPadding = padding?.lg;

    const responsive = Object.keys(padding) as (keyof typeof breakpoints)[];
    return [
      `padding: 0 ${defaultPadding}px; width: calc(100% - (2 * ${defaultPadding}));`,
      responsive
        .map((breakpoint) => {
          return `@media screen and (max-width: ${breakpoints[breakpoint]}) { padding: 0 ${padding[breakpoint]}px; width: calc(100% - (2 * ${padding[breakpoint]})); }`;
        })
        .join(' '),
    ];
  },
  ({ gap }) => {
    if (typeof gap === 'number') {
      return {
        gap: `${gap}px`,
      };
    }

    const defaultGap = gap?.lg;

    const responsive = Object.keys(gap) as (keyof typeof breakpoints)[];
    return [
      `gap: ${defaultGap}px;`,
      responsive
        .map((breakpoint) => {
          return `@media screen and (max-width: ${breakpoints[breakpoint]}) { gap: ${gap[breakpoint]}px; }`;
        })
        .join(' '),
    ];
  },
  ({ columns }) => {
    if (typeof columns === 'number') {
      return {
        gridTemplateColumns: `repeat(${columns}, calc(100% / ${columns}))`,
      };
    }

    const defaultColumns = columns?.lg;

    const responsive = Object.keys(columns) as (keyof typeof breakpoints)[];
    return [
      `grid-template-columns: repeat(${defaultColumns}, calc(100% / ${defaultColumns}));`,
      responsive
        .map((breakpoint) => {
          return `@media screen and (max-width: ${breakpoints[breakpoint]}) { grid-template-columns: repeat(${columns[breakpoint]}, calc(100% / ${columns[breakpoint]})); }`;
        })
        .join(' '),
    ];
  }
);
