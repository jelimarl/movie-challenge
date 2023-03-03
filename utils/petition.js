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