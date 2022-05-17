import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  const [repositoriesPage2, setRepositoriesPage2] = useState([])


  useEffect(() => {
    fetch('https://api.github.com/users/vargastm/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/vargastm/repos?page=2')
      .then(response => response.json())
      .then(data => setRepositoriesPage2(data))
  }, [])

  return (
    <section className="repository-list">
      <div className="title">
        <h1>Lista de repositórios</h1>
      </div>
      <div className="repositories">
        <ul>
          {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository}/>
          })}
        </ul>
        <ul>
          {repositoriesPage2.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository}/>
          })}
        </ul>
      </div>
    </section>
  )
}