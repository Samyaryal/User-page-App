import { useState, useEffect } from 'react'
const BASEURL = "https://jsonplaceholder.typicode.com/"

export default function FetchApi(url) {
  const [data, setUsers] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(BASEURL + url)
        const changetoJson = await response.json()
        setUsers(changetoJson)

      } catch (e) {
        setError(e)

      } finally {
        setloading(false)
      }


    } init()
  },
    [url]);

  return { data, error, loading }

}
