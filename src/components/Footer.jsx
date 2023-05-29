export default function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-r from-[#0f0f0f] via-[#333333] to-[#141414] text-white">
      <ul className="text-center">
        <li className="pt-2">Безпека даних</li>
        <li className="pt-2">Правила та умови</li>
        <li className="pt-2">Політика конфіденційності</li>
      </ul>
      <div className="p-6 text-center">
        <span className="text-xs">
          Всі права захищені © 2023 авторське право :{' '}
        </span>
        <a
          className="text-xs font-semibold text-neutral-300"
          href="https://matviieshyn.vercel.app/"
          target="blank"
        >
          Oleh Matviieshyn
        </a>
      </div>
    </footer>
  )
}
