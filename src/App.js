import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todolist';
import { useEffect, useState } from 'react';
import Movie from './animation/Movie';
import Filter from './animation/Filter';
import { motion } from 'framer-motion';
function App() {
const [popular,setPopular]=useState([])
const [filterd,setFiltered]=useState([])
const [activeGener,setActiveGener]=useState(0)

  useEffect(()=>{
    fetchPopular()
  },[])
const fetchPopular=async()=>{
const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9fbd97239f0486e7b4e0740a72d2b2df&language=en-US&page=1")
const movies=await data.json()
//console.log(movies)
setPopular(movies.results)
setFiltered(movies.results)
}


  return (
    <div className="App">
      <Filter popular={popular} setFilterd={setFiltered} activeGenre={activeGener}setActiveGenre={setActiveGener} /> 
    <motion.div layout exit={{opacity:0}} initial={{opacity:0}} animate={{opacity: 1}} className='popular-movies'>
     {filterd.map((el)=>{
      return <Movie key={el.id} movie={el}/>
     })}
     </motion.div>
    </div>
  );
}

export default App;
