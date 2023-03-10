import { fetcherPlot } from "@/utils/petitions";
import { useState } from "react";
import useSWR from 'swr';
import Swal from 'sweetalert2';

export default function Card(props) {
  const [id, setID] = useState('')
  console.log(id)

  const urlAPI = "https://www.omdbapi.com/"
  const apiKey = "dec040b6"

  const { data, error, isLoading } = useSWR(`${urlAPI}?apikey=${apiKey}&i=${id}&plot=short`, fetcherPlot)
  console.log(data)

  function description() {
    Swal.fire({
      title: `${data.Title}<br>${data.Year}`,
      text: `${data.Plot === 'N/A' ? '' : data.Plot}`,
      confirmButtonText: 'Close',
    })
  }

  return (
    <div>
      <div onClick={() => setID(props.element.imdbID)}>
        {
          props.element.Poster === 'N/A' ?
            <img className="min-h-80 rounded-md" src='/images/no-image-icon.png' />
            : <img className="rounded-md " src={props.element.Poster} alt="" />
        }
      </div>
      <>
        {
          data !== undefined && data.imdbID === props.element.imdbID ?
            description()
            : <div></div>
        }
      </>
    </div>
  )
}
