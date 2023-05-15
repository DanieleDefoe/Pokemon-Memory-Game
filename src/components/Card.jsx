export default function Card({ name, image, handleCardClick }) {
  return (
    <article
      className="border border-slate-800 border-solid w-full hover:cursor-pointer hover:scale-105 transition-all duration-200 flex flex-col items-center pb-6 rounded-2xl shadow-2xl"
      onClick={() => handleCardClick(name)}
    >
      <img src={image} className="w-full object-cover" />
      <h2 className="capitalize text-2xl">{name}</h2>
    </article>
  )
}
