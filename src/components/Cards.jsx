import Card from './Card'

export default function Cards({ pokemonsData, handleCardClick }) {
  const pokemons = pokemonsData.map(({ name, image, id }) => (
    <Card
      name={name}
      image={image}
      key={id}
      handleCardClick={handleCardClick}
    />
  ))

  return <section className="w-full grid">{pokemons}</section>
}
