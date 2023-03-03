import Header from "@/components/header";
import { fetcher } from "@/utils/petition";
import { useState } from "react";
import useSWR from 'swr'

export default function Movies() {
  const [option, setOption] = useState('love')
  console.log(option)

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "f674b814"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&type=movie&s=${option}`, fetcher)
  console.log(data)

  function handleChangeSelector(event) {
    const movieType = event.target.value
    setOption(movieType)
  }

  return (
    <>
      <Header></Header>
      <main className="w-full h-screen bg-blue-900 px-5 pt-5 flex flex-col space-y-5 items-center">
        <select className="rounded-md p-1" onChange={handleChangeSelector}>
          <option>Choose</option>
          <option value="love">Love</option>
          <option value="halloween">Halloween</option>
        </select>

        {
          data !== undefined ?
            <div>
              {
                data.map((movie) => (
                  <div key={movie.imdbID}>
                    <img src={movie.Poster} alt="" />
                  </div>
                ))
              }
            </div>
            : <div>Loading...</div>
        }
      </main>
    </>
  )
}
