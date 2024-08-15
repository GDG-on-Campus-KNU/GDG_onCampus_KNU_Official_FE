import styled from '@emotion/styled';

interface StarProps {
  color: 'white' | 'yellow';
  width?: string;
  height?: string;
  onClick?: (id: number) => void;
}

const StarIcon = styled.svg<StarProps>`
  width: ${({ width }) => width || '21px'}; /* width가 없을 경우 기본값 21px */
  height: ${({ height }) => height || '21px'};
  fill: ${({ color }) =>
    color === 'yellow' ? 'var(--color-selective)' : 'var(--color-white)'};
  stroke: ${({ color }) =>
    color === 'yellow' ? 'var(--color-selective)' : 'var(--color-white)'};

  &:hover {
    cursor: pointer;
  }
`;

const Stars = ({ color, width, height }: StarProps) => {
  return (
    <StarIcon
      color={color}
      width={width}
      height={height}
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7.89513 7.00651L10.0601 2.64651C10.1231 2.52033 10.2201 2.41421 10.34 2.34003C10.46 2.26585 10.5983 2.22656 10.7393 2.22656C10.8803 2.22656 11.0186 2.26585 11.1386 2.34003C11.2585 2.41421 11.3554 2.52033 11.4185 2.64651L13.5835 7.00651L18.4235 7.70985C18.5631 7.72921 18.6944 7.78742 18.8025 7.87786C18.9106 7.96829 18.9911 8.08729 19.0348 8.22129C19.0785 8.35528 19.0837 8.49886 19.0497 8.63564C19.0157 8.77242 18.944 8.89689 18.8426 8.99485L15.341 12.3865L16.1676 17.1782C16.2735 17.7932 15.6235 18.2615 15.0676 17.9715L10.7393 15.7082L6.41013 17.9715C5.85513 18.2623 5.20513 17.7932 5.31096 17.1773L6.13763 12.3857L2.63596 8.99401C2.53512 8.89599 2.46379 8.77165 2.4301 8.63511C2.3964 8.49857 2.40169 8.35532 2.44535 8.22163C2.48902 8.08795 2.56931 7.9692 2.6771 7.87887C2.78489 7.78855 2.91587 7.73028 3.05513 7.71068L7.89513 7.00651Z' />
    </StarIcon>
  );
};

export default Stars;
