import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MovieData';
import { VscHeartFilled } from "react-icons/vsc";
import FlexMovieitem from './FlexMovieitem';

function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ0YTg5MWZhYTU5N2JmZjRjMGEyOTk5NjlkYWVkNyIsInN1YiI6IjY1NDcyY2JkNmJlYWVhMDEyYzhlOWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vg9PPpNkGZ9WJNJ2ay0ND4FbZNqO8zaCRhogD9w_Ly4'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then((data) => {
        setBanner(data.results)
        console.log(data.results)
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {banner.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.title}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieitem movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.id}`}
                  className="bg-subMain hover:text-main transitions bg-submain px-6 py-3 hover:bg-white text-white  rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-submain hover:bg-white transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <VscHeartFilled />
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
