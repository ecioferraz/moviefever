import Location from '@/components/Location';
import Carousel from '@/templates/Carousel';
import SearchBar from '@/templates/SearchBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <SearchBar />
      <Location />
      <Carousel />
    </main>
  );
}
