import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

export default function Pagination({ handleClickBack, handleClickNext, page }) {
  return (
    <div className="flex pb-8 text-white">
      <div className="pt-1" onClick={handleClickBack}><FaAngleDoubleLeft /></div>
      <p className="px-2">{page}</p>
      <div className="pt-1" onClick={handleClickNext}><FaAngleDoubleRight /></div>
    </div>
  )
}
