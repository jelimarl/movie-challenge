import Header from "@/components/header";
import { fetcher } from "@/utils/petition";
import { useState } from "react";
import useSWR from "swr";

export default function Series() {
  const [option, setOption] = useState('love')
  console.log(option)

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&type=series&s=${option}`, fetcher)
  console.log(data)

  function handleChangeSelector(event) {
    const seriesType = event.target.value
    setOption(seriesType)
  }

  return (
    <>
      <Header></Header>
      <main className="w-full h-auto bg-blue-900 px-5 pt-20 flex flex-col space-y-6 items-center">
        <select className="rounded-md p-1" onChange={handleChangeSelector}>
          <option>Choose</option>
          <option value="love">Love</option>
          <option value="christmas">Christmas</option>
        </select>

        {
          data !== undefined ?
            <div className="flex flex-col space-y-6 pb-6">
              {
                data.map((element) => (
                  <div key={element.imdbID}>
                    <img className="rounded-t-md" src={element.Poster} alt="" />

                    <h3 className="pl-2 bg-neutral-100 rounded-b-md font-semibold">Year {element.Year}</h3>
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
