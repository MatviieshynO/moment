import { NavLink } from 'react-router-dom'
export default function ArrowSection() {
  return (
    <div className="bg-white">
      {/* arrowSection */}
      <div className="flex justify-center"></div>
      {/* /arrowSection */}
      <div className=" pt-2 bg-[#D6EDF1] border-t-2 border-teal-100">
        <NavLink to="/menu" className="flex justify-center items-center">
          <div className="w-[70%] text-center border-2 border-black rounded-sm hover:bg-teal-100">
            Перейти до меню
          </div>
        </NavLink>
        <div className="flex-column ">
          <div className="flex justify-center ">
            <div className="bg-[url('../public/images/Menu.gif')] h-[220px] w-full bg-no-repeat bg-contain bg-center top-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
