import { StaticImageData } from 'next/image';
import { movies } from '@/assets/movies';

export const images: StaticImageData[] = movies.map(
  ({ landscapeImg }) => landscapeImg,
);

const imageByIndex = (index: number): StaticImageData =>
  images[index % images.length];

export default imageByIndex;
