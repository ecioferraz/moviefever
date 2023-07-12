import Location from '@/components/Location';
import Carousel from '@/templates/Caroussel';
import SearchBar from '@/templates/SearchBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-24 px-5">
      <SearchBar />
      <Location />
      <Carousel />
    </main>
  );
}
