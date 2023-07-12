/* eslint-disable react/jsx-key */
'use client';

import { Button } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
  <div
    className="item"
    style={{
      backgroundImage: "url('/little-mermaid.jpg')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no repeat',
      backgroundSize: 'cover',
      border: '1px solid black',
      borderRadius: 20,
      height: 475,
      marginInline: 20,
      padding: 20,
    }}
    data-value={num}
  >
    <h1>A Pequena Sereia</h1>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sit iste
      itaque sint enim iure!
    </span>
  </div>
));

export default function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={5000}
      infinite
      paddingLeft={55}
      paddingRight={55}
    />
  );
}
