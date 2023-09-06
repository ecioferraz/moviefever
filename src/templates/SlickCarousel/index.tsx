'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { movies } from '@/assets/movies';

import './style.css';

export default function SlickCarousel() {
  const settings: Settings = {
    accessibility: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    centerMode: true,
    dots: true,
    draggable: true,
    // fade: true,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-screen max-w-full">
      {movies.map(({ landscapeImg, synopsis, title }) => {
        return (
          <div key={title} className={`px-4 lg:px-0`}>
            <div
              className="flex aspect-square h-full items-end rounded-3xl bg-cover bg-center sm:aspect-auto sm:h-[475px]"
              style={{ backgroundImage: `url(/${landscapeImg})` }}
            >
              <div
                className="w-full rounded-b-3xl p-6"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85.42%)',
                }}
              >
                <div className="text-[rgb(var(--background-rgb))]">
                  <h1 className="truncate text-base font-bold">{title}</h1>
                  <span className="line-clamp-2 text-xs">{synopsis}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
