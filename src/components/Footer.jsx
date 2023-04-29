import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <div className=" py-2 mb-7 sm:py-8 bg-zinc-200 ">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
        <div className="mx-auto mt-5 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-2 sm:max-w-xl sm:grid-cols-2 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <Link
            to="/privacy"
            className="col-span-2 max-h-7 w-full object-contain lg:col-span-1  text-black text-center border-b-[1px] border-black text-xs leading-8"
          >
            Політика приватності
          </Link>

          <Link
            to="/legal"
            className="col-span-2 max-h-7 w-full object-contain lg:col-span-1 text-black text-center border-b-[1px] border-black text-xs leading-8"
          >
            Правова інформація
          </Link>
        </div>
        <div className="flex items-center justify-center mt-5">
          <SocialMedia />
        </div>
        <div>
          <h2 className="text-center text-xs font-semibold leading-8  text-black">
            Авторське право © 2023{' '}
            <a href="https://matviieshyn.vercel.app/" target="blank">
              Oleh Matviieshyn
            </a>
            .
          </h2>
          <p className="text-center text-xs font-semibold leading-8  text-black">
            Всі права захищені
          </p>
        </div>
      </div>
    </div>
  )
}
