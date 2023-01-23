import { useEffect } from "react"

const Filter=({setFilterd,popular,activeGenre,setActiveGenre})=>{
    
    useEffect(()=>{
        if(activeGenre===0){
            setFilterd(popular)
            return
        }
        const filtered=popular.filter((el)=>
        el.genre_ids.includes(activeGenre))
        setFilterd(filtered)
    },[activeGenre])
    
    return(
        <div className="filter-container">
            <button className={activeGenre===0 ? "active": ""}   onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre===35 ? "active": ""}  onClick={()=>setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre===28 ? "active": ""}  onClick={()=>setActiveGenre(28)}>Action</button>
        </div>
    )
}

export default Filter