import { Information } from '@/components/layout/information';
import { Footer } from '@/components/layout/footer';
import { Body } from '@/components/layout/body';
import { Header } from '@/components/layout/header';
import { Box } from '@/components/box';

export default function Home() {
  return (
    <Box>
      <Header />
      <Information />
      <Body />
      <Footer />
    </Box>
  );
}
