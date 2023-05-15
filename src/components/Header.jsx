import pokemonLogo from '../assets/pokemon-logo.svg'

export default function Header() {
  return (
    <header className="w-full min-h-[250px] bg-red-500 border-b-slate-800 border-b-[25px] flex items-center justify-center px-4">
      <img src={pokemonLogo} className="w-full max-w-[500px]" />
    </header>
  )
}
