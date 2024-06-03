import React from 'react'
import {useFetchProjects} from "./fetchProjects"

const Projects = () => {
    const {loading, projects} = useFetchProjects()
    // console.log(projects);

    if (loading) {
      return (
        <section className="projects">
          <h2>Loading...</h2>
        </section>
      )
    }

  return (
    <section className='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map(item => {
            const {id, url, title, img} = item
            return (
              <a className='project' href={url}
                key={id}
                target='_blank'
                rel='noreferrer'
              >
                <img className='img' src={img} alt={title} />
                <h5>{title}</h5>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects