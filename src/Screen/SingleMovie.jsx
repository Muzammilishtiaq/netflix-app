import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { Movies } from '../Data/MovieData';
import Movieinfo from '../Compnents/Single/Movieinfo';
import Moviecast from '../Compnents/Single/Moviecast';
import MovieRates from '../Compnents/Single/MovieRates';
import Titles from '../Compnents/HomeComponents/Titles';
import Movie from "../Compnents/Movie";
import { BsCollectionFill } from 'react-icons/bs';
function SingleMovie() {
const [moviedatail,setMoviedetail]= useState()
const {id}= useParams();
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ0YTg5MWZhYTU5N2JmZjRjMGEyOTk5NjlkYWVkNyIsInN1YiI6IjY1NDcyY2JkNmJlYWVhMDEyYzhlOWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vg9PPpNkGZ9WJNJ2ay0ND4FbZNqO8zaCRhogD9w_Ly4'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMoviedetail(data)
        console.log(data)
      })
      .catch(err => console.error(err));
  },[])


  return (
<Layout>
<Movieinfo movie={moviedatail}/>
{/*<div className="container mx-uto min-hscreen px-2 my-6">
   <Moviecast/>
  <MovieRates movie={moviedatail} /> */}
  {/* related */}
  {/* <div className="my-16">
    <Titles title="Related Movies" Icon={BsCollectionFill}/>
    <div className="grid sm:mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {moviedatail.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
  </div> 
</div>*/}
</Layout>
  )
}

export default SingleMovie;
