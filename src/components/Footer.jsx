export default function Footer() {
  return (
    <footer className="w-full flex flex-wrap px-5 py-3 text-slate-200 items-center gap-3 text-center justify-center text-xl bg-slate-800 mt-14">
      <h3>Copyright &copy; {new Date().getFullYear()} DanieleDefoe</h3>
      <a
        href="https://github.com/DanieleDefoe"
        rel="noreferrer noopener nofollow"
        className="github"
      ></a>
    </footer>
  )
}
