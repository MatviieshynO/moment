import { useEffect, useState, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import gsap from 'gsap'

//Components

const Menu = () => {
  //States
  const [scroll, setScroll] = useState(false)
  const [openToggleMenu, setOpenToggleMenu] = useState(false)
  const [saltedWaffles, setSaltedWaffles] = useState(null)
  const [sweetWaffles, setSweetWaffles] = useState(null)
  const [other, setOther] = useState(null)
  //ref
  const wafflesSl = useRef(null)
  const wafflesSw = useRef(null)
  const another = useRef(null)
  console.log(wafflesSl)
  useEffect(() => {
    gsap.fromTo(
      '.gsap-05-menu-1',
      { y: -350 },
      {
        y: 0,
        duration: 0.8,
      }
    )
  }, [scroll])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [scroll])
  //Functions
  const scrollToSectionHundler = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
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
            ? 'fixed top-[1px] flex bg-white z-50 w-full justify-center pb-2 gap-8 gsap-05-menu-1'
            : 'flex justify-center '
        }
      >
        <div
          className={
            openToggleMenu
              ? 'flex-column  mx-2 justify-center items-center cursor-pointer rounded border border-black p-[1px]'
              : 'flex-column mx-2 p-[1px] justify-center items-center cursor-pointer rounded opacity-50'
          }
          onClick={openToToggleMenuHandlerDrinks}
        >
          <img
            className="rounded"
            src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
            alt="Drinks"
            width={scroll ? 110 : 200}
            height={scroll ? 60 : 200}
          />
          <h4 className="text-center bg-white">Drinks</h4>
        </div>
        <div
          className={
            openToggleMenu
              ? 'flex-column p-[1px] mx-2 justify-center items-center cursor-pointer rounded opacity-50'
              : 'flex-column  mx-2 justify-center items-center cursor-pointer rounded border border-black p-[1px]'
          }
          onClick={openToToggleMenuHandlerFood}
        >
          <img
            className="rounded"
            src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
            alt="Drinks"
            width={scroll ? 110 : 200}
            height={scroll ? 60 : 200}
          />
          <h4 className="text-center bg-white">Food</h4>
        </div>
      </div>
      {/* subsections */}
      <div className="flex w-full ">
        {openToggleMenu ? (
          <div className="w-full h-full mt-2">
            {/* Drinks subsections*/}
            <div
              className={
                scroll
                  ? 'fixed  top-[110px] z-50 flex  bg-white w-full gap-[28px] overflow-auto gsap-05-menu-1 pl-2'
                  : 'flex border-y-[1px] border-black gap-4 overflow-scroll pl-2'
              }
            >
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="Black coffee"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">black coffee</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="coffee drinks"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />

                <h4 className="text-center text-[10px]">coffe drinks</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="chocolate"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">chocolate</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="tea"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">tea</h4>
              </div>
              <div className="flex-column m-[2px] h-full shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="matcha"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">matcha</h4>
              </div>
              <div className="flex-column m-[2px] h- shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="cold menu"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">cold menu</h4>
              </div>
              <div className="flex-column  h-full m-[2px] shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="limonade and other"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">limonade and other</h4>
              </div>
              <div className="flex-column  h-full m-[2px] shrink-0">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="milkshakes"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">milkshakes</h4>
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
        ) : (
          <div className="w-full h-full mt-2">
            {/* Food subsections*/}
            <div
              className={
                scroll
                  ? 'fixed top-[110px] z-50 flex  bg-white w-full gsap-05-menu-1 gap-[28px] overflow-scroll pl-2'
                  : 'flex  gap-4 border-y-[1px] border-black bg-white pl-2'
              }
            >
              <div className="flex-column m-[2px]">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="salted waffles"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                  onClick={() => scrollToSectionHundler(wafflesSl)}
                />
                <h4 className="text-center text-[10px]">salted waffles</h4>
              </div>
              <div className="flex-column m-[2px]">
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="sweet waffles"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                  onClick={() => scrollToSectionHundler(wafflesSw)}
                />

                <h4 className="text-center text-[10px]">sweet waffles</h4>
              </div>
              <div
                className="flex-column m-[2px]"
                onClick={() => scrollToSectionHundler(wafflesSw)}
              >
                <img
                  src="https://blogstudio.s3.theshoppad.net/coffeeheroau/5b3d5ebf8a5442199dad3293c8ce8227.jpg"
                  alt="sweet waffles"
                  width={scroll ? 90 : 100}
                  height={scroll ? 90 : 100}
                  className="rounded"
                />
                <h4 className="text-center text-[10px]">other</h4>
              </div>
            </div>
            {/* Products from food */}
            <div>
              <div className="h-[600px] w-full bg-slate-900 mt-20">
                <div ref={wafflesSl}></div>
              </div>
              <div className="h-[600px] w-full bg-slate-700">
                <div ref={wafflesSw}></div>
              </div>
              <div className="h-[600px] w-full bg-slate-400">
                <div ref={another}></div>
              </div>
              {/* <InView
                ref={wafflesSl}
                as="div"
                onChange={(inView, entry) => setSaltedWaffles(inView)}
                className="h-[600px] w-full bg-slate-900"
              ></InView>
              <InView
                ref={wafflesSw}
                as="div"
                onChange={(inView, entry) => setSweetWaffles(inView)}
                className="h-[600px] w-full bg-slate-600"
              ></InView>
              <InView
                ref={another}
                as="div"
                onChange={(inView, entry) => setOther(inView)}
                className="h-[600px] w-full bg-slate-400"
              ></InView> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
