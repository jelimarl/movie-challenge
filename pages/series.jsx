import Header from "@/components/header";
import { fetcher } from "@/utils/petition";
import { useState } from "react";
import useSWR from "swr";

export default function Series() {
  const [option, setOption] = useState('')

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&type=series&s=${option}`, fetcher)

  function handleChangeSelector(event) {
    const seriesType = event.target.value
    setOption(seriesType)
  }

  console.log(option)
  console.log(data)

  return (
    <div>
      <Header></Header>
      <h1>Series</h1>
      <select onChange={handleChangeSelector}>
        <option>Choose</option>
        <option value="love">Love</option>
        <option value="christmas">Christmas</option>
      </select>
    </div>
  )
}
