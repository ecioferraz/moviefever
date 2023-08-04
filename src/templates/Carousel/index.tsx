'use client';

import BRC from 'better-react-carousel';
import './styles.css';
import { movies } from '../../assets/movies/movies';
import Image from 'next/image';

const myDot = ({ isActive }: { isActive: boolean }) => (
  <span
    style={{
      background: isActive ? '#fff' : 'transparent',
      border: '1px solid #fff',
      borderRadius: '100%',
      height: '1.6rem',
      marginTop: '5rem',
      width: '1.6rem',
    }}
  ></span>
);

export default function Carousel() {
  return (
    <BRC
      autoplay={3000}
      cols={1}
      dot={myDot}
      draggable
      gap={10}
      hideArrow
      loop
      rows={1}
      showDots
      scrollSnap
    >
      {movies.map(({ landscapeImg, synopsis, title }) => (
        <BRC.Item key={title}>
          <div>
            <Image alt={title} src={landscapeImg} width={0} height={0} />
            <div className="content">
              <h1>{title}</h1>
              <span>{synopsis}</span>
            </div>
          </div>
        </BRC.Item>
      ))}
    </BRC>
  );
}
