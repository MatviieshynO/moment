import { NavLink } from 'react-router-dom'

export default function Bunner() {
  return (
    <div className="w-full flex items-center gap-x-4  overflow-hidden bg-gray-50 p-6 py-[4px] sm:px-3.5 sm:before:flex-1">
      <p className=" whitespace-nowrap font-serif italic">
        Перейти, щоб побачити
      </p>
      <svg
        viewBox="0 0 2 2"
        className="mx-2 inline h-0.5 w-0.5 fill-current"
        aria-hidden="true"
      >
        <circle cx={1} cy={1} r={1} />
      </svg>

      <NavLink
        to="/menu"
        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Меню <span aria-hidden="true">&rarr;</span>
      </NavLink>
    </div>
  )
}
