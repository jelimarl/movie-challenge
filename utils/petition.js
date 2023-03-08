export async function fetcher(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data.Search
  }
  catch (error) {
    console.log(error)
  }
}

export async function fetcherPlot(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  catch (error) {
    console.log(error)
  }
}