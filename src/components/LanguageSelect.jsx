import { useEffect, useState } from 'react'

const LanguageSelect = () => {
  const [activeBtn, setActiveBtn] = useState(false)
  const [unActiveBtn, setUnActiveBtn] = useState(true)

  function onButtonChangeLanguage() {
    setActiveBtn(!activeBtn)
    setUnActiveBtn(!unActiveBtn)
  }
  return (
    <div className="flex bg-inherit p-[2px] rounded m-[2px]">
      <button
        className={
          activeBtn
            ? 'w-9 h-8 p-[2px] ml-[2px] bg-[#2d2d2d] rounded'
            : 'w-9 h-8 ml-[2px]'
        }
        onClick={onButtonChangeLanguage}
      >
        <img src="/images/usa-flag.png" alt="" className="w-full h-full" />
      </button>
      <button
        className={
          unActiveBtn
            ? 'w-9 h-8 p-[2px] ml-[2px] bg-[#2d2d2d] rounded'
            : 'w-9 h-8 ml-[2px]'
        }
        onClick={onButtonChangeLanguage}
      >
        <img src="/images/ua-flag.png" alt="" className="w-full h-full" />
      </button>
    </div>
  )
}

export default LanguageSelect
//w-8 h-8 p-[2px] bg-black

{
  /* <select className="text-[12px] bg-inherit">
        <option
          value="1"
          className="w-6 h-6 bg-[url('../public/images/usa-flag.png')]"
        ></option>
        <option
          value="2"
          className="w-6 h-6 bg-[url('../public/images/ua-flag.png')]"
        ></option>
      </select> */
}
