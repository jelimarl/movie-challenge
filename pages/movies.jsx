import Header from "@/components/header";
import { fetcher } from "@/utils/petition";
import { useState } from "react";
import useSWR from 'swr'

export default function Movies() {
  const [option, setOption] = useState('')

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&type=movie&s=${option}`, fetcher)

  function handleChangeSelector(event) {
    const movieType = event.target.value
    setOption(movieType)
  }

  console.log(data)

  return (
    <div>
      <Header></Header>
      <h1>Movies</h1>
      <select onChange={handleChangeSelector}>
        <option>Choose</option>
        <option value="love">Love</option>
        <option value="halloween">Halloween</option>
      </select>
    </div>
  )
}
