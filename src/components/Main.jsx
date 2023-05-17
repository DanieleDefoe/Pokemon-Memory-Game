import Scores from './Scores'
import Cards from './Cards'

import Loading from '../assets/loading.gif'

import { useState, useEffect } from 'react'

export default function Main() {
  const [pokemonsData, setPokemonsData] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true)
      const promises = []
      for (let i = 1; i < 13; i += 1) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await response.json()
        promises.push(data)
      }
      Promise.all(promises).then((results) => {
        const pokemons = results.map(({ name, id, sprites }) => ({
          name,
          image: sprites['front_default'],
          id,
        }))
        setPokemonsData(pokemons)
        setLoading(false)
      })
    }

    fetchPokemons()
  }, [])

  function shuffleData(data) {
    const { length } = data
    const result = Array(length).fill(null)
    for (let i = 0; i < length; i += 1) {
      let randIndex = parseInt(Math.random() * length, 10)
      while (result[randIndex] !== null) {
        randIndex = parseInt(Math.random() * length, 10)
      }
      result[randIndex] = data[i]
    }
    return result
  }

  function checkForMatch(name) {
    if (clickedPokemons.indexOf(name) === -1) {
      setClickedPokemons((prevClickedPokemons) => [
        ...prevClickedPokemons,
        name,
      ])
      setScore((prevScore) => prevScore + 1)
    } else {
      setBestScore((prevBestScore) =>
        score > prevBestScore ? score : prevBestScore,
      )
      setClickedPokemons([])
      setScore(0)
    }
  }

  function handleCardClick(name) {
    checkForMatch(name)
    const shuffledPokemons = shuffleData(pokemonsData)
    setPokemonsData(shuffledPokemons)
  }

  return (
    <main className="w-full gap-8 bg-slate-200 max-w-[1024px] mt-14 mx-auto flex flex-col items-center px-4">
      {loading ? (
        <img src={Loading} className="w-full max-w-[300px] rounded-[30px]" />
      ) : (
        <>
          <Scores score={score} bestScore={bestScore} />
          <Cards
            pokemonsData={pokemonsData}
            handleCardClick={handleCardClick}
          />
        </>
      )}
    </main>
  )
}
