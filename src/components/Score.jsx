export default function Score({ type, color, score }) {
  return (
    <div
      className={`${color} font-bold w-full min-h-[55px] flex items-center justify-center min-w-[250px] max-w-[350px] rounded-[30px] text-2xl py-2 px-4 shadow-2xl`}
    >
      {type} score: {score}
    </div>
  )
}
