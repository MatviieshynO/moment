import { useState } from 'react'

const Menu = () => {
  //States
  const [openToggleMenu, setOpenToggleMenu] = useState(false)

  //Functions
  const openToToggleMenuHandlerDrinks = () => {
    setOpenToggleMenu(() => true)
  }
  const openToToggleMenuHandlerFood = () => {
    setOpenToggleMenu(() => false)
  }
  return (
    <div className="mt-32">
      <h1 className="text-center uppercase text-3xl my-6">Menu</h1>

      {/*  drinks and food section  */}
      <div className="flex">
        <div
          className={
            openToggleMenu
              ? 'flex-column border-2 mx-2 border-[red] justify-center items-center cursor-pointer rounded '
              : 'flex-column border mx-2 justify-center items-center cursor-pointer rounded opacity-50'
          }
          onClick={openToToggleMenuHandlerDrinks}
        >
          <img
            className="Drinks"
            src="data:image/jpeg;base64,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"
            alt="Drinks"
            width={200}
            height={120}
          />
          <h4 className="text-center bg-white">Drinks</h4>
        </div>
        <div
          className={
            openToggleMenu
              ? 'flex-column border mx-2 justify-center items-center cursor-pointer rounded opacity-50'
              : 'flex-column border-2 border-[red] mx-2 justify-center items-center cursor-pointer rounded '
          }
          onClick={openToToggleMenuHandlerFood}
        >
          <img
            className=""
            src="https://www.foodandwine.com/thmb/lSmwEvqVN1VtBDUuAdIJ1vn03ks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/light-and-crispy-waffles-FT-RECIPE1021-561d9a8be2274dc9b8384a1c58a71fcf.jpg"
            alt="Drinks"
            width={200}
            height={120}
          />
          <h4 className="text-center bg-white">Food</h4>
        </div>
      </div>
      {/* subsections */}
      {/* Food subsections*/}
      <div className="flex w-full h-[400px] ">
        {openToggleMenu ? (
          <div className="bg-[green] w-full h-full">Drinks</div>
        ) : (
          <div className="w-full h-full mt-2">
            <div className="flex justify-center items-center gap-4 border-y-[1px] border-black">
              <div className="flex-column m-[2px]">
                <img
                  src="https://prostoway.com/wp-content/uploads/2022/07/vafli_s_kuricei_i_zelyonim_lukom-516748-1280x720.jpg"
                  alt="salted waffles"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className='text-center text-[13px]'>salted waffles</h4>
              </div>
              <div className="flex-column m-[2px]">
                <img
                  src="https://cdn.abo.media/upload/article/o_1fma0tbome861ee21g7dmtijfp1k.jpg"
                  alt="sweet waffles"
                  width={100}
                  height={100}
                  className="rounded"
                />

                <h4 className='text-center text-[13px]'>sweet waffles</h4>
              </div>
              <div className="flex-column m-[2px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu8ustiJM8aWmo4zKtE4XDlpQRNzYzXCrMg&usqp=CAU"
                  alt="sweet waffles"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className='text-center text-[13px]'>other</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
