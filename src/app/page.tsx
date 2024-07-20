"use client"

import React from "react";

type Movies = {
  director: string,
  movie: string
}[]

export default function Home() {
  const [item, setItem] = React.useState<Movies>([])
  const [movie, setMovie] = React.useState("")
  const [director, setDirector] = React.useState("")

  function handleRemoveMovie(index: number) {
    setItem((previousItem) => previousItem.filter((_, i) => i !== index))
  }

  function handleAddItem() {
    if (director && movie) {
      setItem([...item, { director, movie }])
      setDirector("")
      setMovie("")
    } else (
      alert("Enter director and movie names")
    )
  }

  return (
    <React.Fragment>
      <div className="p-10">
        <p className="text-3xl text-center font-bold">Director and Movies</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-7 md:gap-5 mt-10">
          <input type="text" className="bg-gray-200 h-[3rem] col-span-3 p-3 mt-5 md:mt-0" placeholder="Director name" onChange={(e: any) => setDirector(e.target.value)} value={director} />
          <input type="text" className="bg-gray-200 h-[3rem] col-span-3 p-3 mt-5 md:mt-0" placeholder="Movie name" onChange={(e: any) => setMovie(e.target.value)} value={movie} />
          <button className="bg-green-500 text-white min-h-[3rem] mt-5 md:mt-0" onClick={handleAddItem}>Add</button>
        </div>

        {
          item.length > 0 ? (
            item.map((movie, index) => (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-7 md:gap-5 mt-10" key={index}>
                <div className="h-[3rem] col-span-3 p-3 border-2 mt-5 md:mt-0">{movie.director}</div>
                <div className="h-[3rem] col-span-3 p-3 border-2 mt-5 md:mt-0">{movie.movie}</div>
                <button className="bg-red-500 text-white mt-5 md:mt-0 min-h-[3rem]" onClick={() => handleRemoveMovie(index)}>Remove</button>
              </div>
            ))
          )
          :
          <p className="text-gray-400 text-center m-10">The list is empty</p>
        }
      </div>
    </React.Fragment>
  );
}
