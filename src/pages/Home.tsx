import Header from '../components/Header';
import BreakingNews from '../components/BreakingNews';
import HeroSlider from '../components/HeroSlider';
import LiveSection from '../components/LiveSection';
import ArticleGrid from '../components/ArticleGrid';
import MultimediaSection from '../components/MultimediaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreakingNews />
      <Header />
      
      <main className="flex-1">
        <HeroSlider />
        <ArticleGrid />
        <LiveSection />
        <MultimediaSection />
      </main>

      <Footer />
    </div>
  );
}
