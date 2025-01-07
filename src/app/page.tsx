import { Information } from '@/components/layout/information';
import { Footer } from '@/components/layout/footer';
import { Body } from '@/components/layout/body';
import { Header } from '@/components/layout/header';

export default function Home() {
  return (
    <div>
      <Header />
      <Information />
      <Body />
      <Footer />
    </div>
  );
}
