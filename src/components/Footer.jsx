import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-black py-24 sm:py-8 opacity-70">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
        <div className="mx-auto mt-5 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Link
            to="/privacy"
            className="col-span-2 max-h-7 w-full object-contain lg:col-span-1  text-white text-center"
          >
            Політика приватності
          </Link>
          <Link
            to="/terms"
            className="col-span-2 max-h-7 w-full object-contain lg:col-span-1  text-white text-center"
          >
            Умови використання
          </Link>
          <Link
            to="/legal"
            className="col-span-2 max-h-7 w-full object-contain lg:col-span-1 text-white text-center"
          >
            Правова інформація
          </Link>
        </div>
        <h2 className="text-center text-xs font-semibold leading-8  text-white mt-10">
          Copyright © 2023 Oleh Matviieshyn. All rights reserved.
        </h2>
      </div>
    </div>
  )
}
