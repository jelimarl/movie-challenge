import Card from "@/components/card";
import Header from "@/components/header";
import Pagination from "@/components/pagination";
import { fetcher } from "@/utils/petitions";
import { useState } from "react";
import useSWR from 'swr';

export default function Movies() {
  const [option, setOption] = useState('love')
  console.log(option)

  const [page, setPage] = useState(1)
  console.log(page)

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&type=movie&s=${option}&page=${page}`, fetcher)
  console.log(data)

  function handleChangeSelector(event) {
    const movieType = event.target.value
    setOption(movieType)
    setPage(1)
  }

  function handleClickBack() {
    if (page >= 2) {
      const newPage = page - 1
      setPage(newPage)
    }
  }

  function handleClickNext() {
    const newPage = page + 1
    setPage(newPage)
  }

  return (
    <>
      <Header></Header>
      <main className="w-full h-auto bg-blue-900 px-5 pt-20 flex flex-col space-y-6 items-center">
        <select className="rounded-md p-1" onChange={handleChangeSelector}>
          <option>Choose</option>
          <option value="love">Love</option>
          <option value="halloween">Halloween</option>
        </select>

        {
          data !== undefined ?
            <div className="flex flex-col space-y-4">
              {
                data.map((element, index) => (
                  <Card
                    element={element}
                    key={index}
                  />
                ))
              }
            </div>
            : <div>Loading...</div>
        }

        <Pagination
          handleClickBack={handleClickBack}
          handleClickNext={handleClickNext}
          page={page}
        />
      </main>
    </>
  )
}
