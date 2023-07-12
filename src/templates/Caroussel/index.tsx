/* eslint-disable react/jsx-key */
'use client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';
import Image from 'next/image';

const responsive = {
  0: {
    items: 1,
    itemsFit: 'contain',
  },
  1024: {
    items: 1,
  },
};

const items = [1, 2, 3, 4, 5].map((num) => (
  <div className="item slide" data-value={num}>
    <Image
      src="/little-mermaid-caroussel.png"
      alt=""
      fill
      objectFit="cover"
      style={{ zIndex: -1 }}
    />
    <div className="content">
      <h1>A Pequena Sereia</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sit
        iste itaque sint enim iure!
      </span>
    </div>
  </div>
));

export default function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      // autoPlay
      autoPlayInterval={5000}
      infinite
      paddingLeft={55}
      paddingRight={55}
    />
  );
}
