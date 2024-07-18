import Text from '@gdsc/components/typography/Text';

interface ITitle {
  color: string;
  children: React.ReactNode;
}

const Title: React.FC<ITitle> = ({ color, children }) => {
  return (
    <Text color={color} size='xxl' weight='bold'>
      {children}
    </Text>
  );
};

export default Title;
