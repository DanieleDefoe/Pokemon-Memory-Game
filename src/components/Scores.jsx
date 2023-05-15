import Score from './Score'

export default function Scores({ score, bestScore }) {
  return (
    <section className="w-full flex justify-around gap-[20px] flex-wrap items-center">
      <Score type="Current" color="bg-red-300" score={score} />
      <Score type="Best" color="bg-green-300" score={bestScore} />
    </section>
  )
}
