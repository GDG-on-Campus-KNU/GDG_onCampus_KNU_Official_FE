import Text from './Text';

interface ITitle {
  color: string;
  children: React.ReactNode;
}

const Title: React.FC<ITitle> = ({ color, children }) => {
  return (
    <Text color={color} size='2.75rem' weight='bold'>
      {children}
    </Text>
  );
};

export default Title;
