import { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'

//Components

const Menu = () => {
  //States
  const [scroll, setScroll] = useState(false)
  const [openToggleMenu, setOpenToggleMenu] = useState(false)
  const [saltedWaffles, setSaltedWaffles] = useState(null)
  const [sweetWaffles, setSweetWaffles] = useState(null)
  const [other, setOther] = useState(null)

  //Functions
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])
  console.log(scroll)
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
      <div
        className={
          scroll
            ? 'fixed top-[1px] flex bg-white z-50 w-full justify-center'
            : 'flex'
        }
      >
        <div
          className={
            openToggleMenu
              ? 'flex-column  mx-2 justify-center items-center cursor-pointer rounded '
              : 'flex-column border-2 mx-2 justify-center items-center cursor-pointer rounded opacity-50'
          }
          onClick={openToToggleMenuHandlerDrinks}
        >
          <img
            className="rounded"
            src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Drinks"
            width={scroll ? 75 : 200}
            height={scroll ? 75 : 200}
          />
          <h4 className="text-center bg-white">Drinks</h4>
        </div>
        <div
          className={
            openToggleMenu
              ? 'flex-column border-2 mx-2 justify-center items-center cursor-pointer rounded opacity-50'
              : 'flex-column  mx-2 justify-center items-center cursor-pointer rounded '
          }
          onClick={openToToggleMenuHandlerFood}
        >
          <img
            className="rounded"
            src="https://www.foodandwine.com/thmb/lSmwEvqVN1VtBDUuAdIJ1vn03ks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/light-and-crispy-waffles-FT-RECIPE1021-561d9a8be2274dc9b8384a1c58a71fcf.jpg"
            alt="Drinks"
            width={scroll ? 75 : 200}
            height={scroll ? 75 : 200}
          />
          <h4 className="text-center bg-white">Food</h4>
        </div>
      </div>
      {/* subsections */}
      <div className="flex w-full ">
        {openToggleMenu ? (
          <div className="w-full h-full mt-2">
            {/* Drinks subsections*/}
            <div className="flex items-center border-y-[1px] border-black gap-8 overflow-auto mx-2">
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="Black coffee"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[13px]">black coffee</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://d1ralsognjng37.cloudfront.net/22759c8b-fb62-44a0-b3de-57d0ee706983.jpeg"
                  alt="coffee drinks"
                  width={100}
                  height={100}
                  className="rounded"
                />

                <h4 className="text-center text-[10px]">coffe drinks</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://www.runtastic.com/blog/wp-content/uploads/2015/06/hot-chocolate-after-workout_ft-1024x683.jpg.webp"
                  alt="chocolate"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">chocolate</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://www.thrive.org.uk/files/images/_hero/Herbal-teas_hero-image.jpg"
                  alt="tea"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">tea</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://szefsmaku.pl/wp-content/uploads/2022/05/matcha.jpg"
                  alt="matcha"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">matcha</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://www.todocanada.ca/wp-content/uploads/Tim_Hortons_OREO-DOUBLE_STUF__Iced_Capp__OREO__Strawberry_Creamy.jpg"
                  alt="cold menu"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">cold menu</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://shottbeverages.com/wp-content/uploads/2018/11/Tahitian-Limonade_small.jpg"
                  alt="limonade and other"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">limonade and other</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://thedairyalliance.com/wp-content/uploads/2020/05/blueberry-strawberry-and-banana-milk-shake-26493995.jpg"
                  alt="milkshakes"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">milkshakes</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full mt-2">
            {/* Food subsections*/}
            <div
              className={
                scroll
                  ? 'fixed top-[78px] z-50 flex justify-center bg-white w-full'
                  : 'flex justify-center items-center gap-4 border-y-[1px] border-black bg-white'
              }
            >
              <div className="flex-column m-[2px]">
                <img
                  src="https://prostoway.com/wp-content/uploads/2022/07/vafli_s_kuricei_i_zelyonim_lukom-516748-1280x720.jpg"
                  alt="salted waffles"
                  width={scroll ? 50 : 100}
                  height={scroll ? 50 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">salted waffles</h4>
              </div>
              <div className="flex-column m-[2px]">
                <img
                  src="https://cdn.abo.media/upload/article/o_1fma0tbome861ee21g7dmtijfp1k.jpg"
                  alt="sweet waffles"
                  width={scroll ? 50 : 100}
                  height={scroll ? 50 : 100}
                  className="rounded"
                />

                <h4 className="text-center text-[10px]">sweet waffles</h4>
              </div>
              <div className="flex-column m-[2px] flex-nowrap">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu8ustiJM8aWmo4zKtE4XDlpQRNzYzXCrMg&usqp=CAU"
                  alt="sweet waffles"
                  width={scroll ? 50 : 100}
                  height={scroll ? 50 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">other</h4>
              </div>
            </div>
            {/* Products from food */}
            <div>
              <InView
                as="div"
                onChange={(inView, entry) => setSaltedWaffles(inView)}
                className="h-[400px] w-full bg-slate-900"
              ></InView>
              <InView
                as="div"
                onChange={(inView, entry) => setSweetWaffles(inView)}
                className="h-[400px] w-full bg-slate-600"
              ></InView>
              <InView
                as="div"
                onChange={(inView, entry) => setOther(inView)}
                className="h-[400px] w-full bg-slate-400"
              ></InView>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
