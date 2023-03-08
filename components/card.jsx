import { fetcherPlot } from "@/utils/petition";
import { useState } from "react";
import useSWR from 'swr';

export default function Card(props) {
  const [id, setID] = useState('')
  console.log(id)

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&i=${id}&plot=short`, fetcherPlot)
  console.log(data)

  return (
    <section>
      <div onClick={() => setID(props.movie.imdbID)}>
        <img className="rounded-t-md" src={props.movie.Poster} alt="" />

        <h3 className="pl-2 bg-neutral-100 rounded-b-md font-semibold">Year {props.movie.Year}</h3>
      </div>
      <>
        {
          data !== undefined && data.imdbID === props.movie.imdbID ?
            <div>
              <h3>{data.Plot}</h3>
            </div>
            : <div></div>
        }
      </>
    </section>
  )
}
