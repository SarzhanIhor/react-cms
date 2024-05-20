import React, {useState, useEffect} from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: "fk2xsr56p2ki",
  environment: "master",
  accessToken: "9ToTQIreSJyXfh0tT5iEMrcI42oHSUbY88DwHnscGSk",
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async() => {
    try {
      const response = await client.getEntries({content_type: "projects"})
      
      const projects = response.items.map(item => {
        const {title, url, image} = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return {title, url, id, img}
      })
      console.log(response);

      setProjects(projects)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    useEffect(() =>{
      getData()
    }, [])
  }
  return {loading, projects}
}

