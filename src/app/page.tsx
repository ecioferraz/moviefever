import Location from '@/components/Location';
import SearchBar from '@/templates/SearchBar';
import SlickCarousel from '@/templates/SlickCarousel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <SearchBar />
      <Location />
      <SlickCarousel />
    </main>
  );
}
