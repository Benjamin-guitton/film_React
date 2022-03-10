import React, {useEffect, useState} from "react";
import axios from "axios";
import Movie from './Movie'

function ListMovie() {

    const [data, setData] = useState([]);

    const getData = ()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54b27ec0ad0a84340ba641c3b2a61d6')
            .then((res)=>setData(res.data.results))
            .catch((err)=>setData(err))
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(() => {
        getData()
    })

    return (
        <div className="d-flex flex-wrap col-sm-10 m-auto border justify-content-around">
            {data.map((movie,index)=>{
                    return(
                        <Movie key={index} {...movie} />
                    )
                  })}
        </div>
    );
}

export default ListMovie;