import EmblaCarousel from '../../components/EmplaCaroussel';

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
  return (
    <section>
      <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
    </section>
  );
}
