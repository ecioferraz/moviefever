import Location from '@/components/Location';
import SearchBar from '@/templates/SearchBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-24">
      <SearchBar />
      <Location />
    </main>
  );
}
