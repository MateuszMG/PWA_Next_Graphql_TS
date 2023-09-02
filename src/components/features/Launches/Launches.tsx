import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ErrorBox } from '../../globals/ErrorBox/ErrorBox';
import { Loader, LoaderSize } from '../../globals/Loader/Loader';
import styles from './Launches.module.css';
import { useLaunches } from './useLaunches';

const settings: Settings = {
  speed: 500,
  infinite: false,
  initialSlide: 0,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 6.2,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5.2,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4.2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1.2,
      },
    },
  ],
};

export const Launches = () => {
  const { scrollRef, launches, hasMore, loading, error } = useLaunches();

  if (error) return <ErrorBox />;

  return (
    <main>
      <h1>Recent</h1>

      <article className={styles.sliderWrapper}>
        <Slider {...settings}>
          {launches.map((launch) => (
            <>
              <section key={launch.id} className={styles.section}>
                <h2>{launch.mission_name}</h2>
              </section>
            </>
          ))}

          {hasMore && (
            <div ref={scrollRef}>
              {loading && (
                <Loader.Wrapper>
                  <Loader size={LoaderSize.big} />
                </Loader.Wrapper>
              )}
            </div>
          )}
        </Slider>
      </article>
    </main>
  );
};
