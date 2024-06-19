import { ServerResponse } from 'http';

const Index = () => null;

export default Index;

export const getServerSideProps = ({ res }: { res: ServerResponse }) => {
  res.statusCode = 301;
  res.setHeader('Location', '/en/US');
  return { props: {} };
};
