import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'

function Banner({fetchUrl}) {
    const [movie,setMovie]=useState()
   const  base_url = "https://image.tmdb.org/t/p/original/";

    // console.log(fetchUrl)
    const fetchData = async()=>{
     const {data} =   await instance.get(fetchUrl)
     setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    } 

    useEffect(()=>{
       fetchData()  
    },[])
    console.log(movie)
  return (
    <div style={{height:"600px",background:`url(${base_url}${movie?.backdrop_path})`,
    backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className='banner-content'>
         <h1>{movie?.name}</h1>
         <button className='btn btn-danger'>Play<i class="fa-solid fa-play ms-1"></i></button>
         <button className='btn border-white ms-3'>More info<i class="fa-solid fa-caret-down ms-1"></i></button>

         <h2>{movie?.overview?.slice(0,200)}..</h2>
        </div>
    </div>
  )
}

export default Banner