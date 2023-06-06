import { useEffect, useState, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import gsap from 'gsap'

//Components

const Menu = () => {
  //States
  const [scroll, setScroll] = useState(false)
  const [openToggleMenu, setOpenToggleMenu] = useState(true)
  const [saltedWaffles, setSaltedWaffles] = useState(true)
  const [sweetWaffles, setSweetWaffles] = useState(false)
  const [other, setOther] = useState(false)
  const [blackCoffee, setBlackCoffee] = useState(true)
  const [coffeeDrinks, setCoffeeDrinks] = useState(false)
  const [chocolate, setChocolate] = useState(false)
  const [tea, setTea] = useState(false)
  const [matcha, setMatcha] = useState(false)
  const [coldMenu, setColdMenu] = useState(false)
  const [limonade, setLimonade] = useState(false)
  const [milkshakes, setMilkshakes] = useState(false)
  const [offSet, setOffSet] = useState(0)

  //ref                                                           !blackCoffee&&!coffeeDrinks&&!chocolate&&!tea&&!matcha&&!coldMenu&&!limonade
  const wafflesSl = useRef(null)
  const wafflesSw = useRef(null)
  const another = useRef(null)
  const blackCof = useRef(null)
  const coffeeDr = useRef(null)
  const chocol = useRef(null)
  const theTea = useRef(null)
  const theMatcha = useRef(null)
  const coldMen = useRef(null)
  const limon = useRef(null)
  const milkSha = useRef(null)
  useEffect(() => {
    if (blackCoffee) {
      setOffSet((currentOffSet) => {
        let newOffSet = (currentOffSet = 0)

        newOffSet = 0
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [blackCoffee])
  useEffect(() => {
    if (chocolate) {
      setOffSet((currentOffSet) => {
        let newOffSet = (currentOffSet = 0)

        newOffSet = -122
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [chocolate])
  useEffect(() => {
    if (tea) {
      setOffSet((currentOffSet) => {
        let newOffSet = currentOffSet

        newOffSet = -244
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [tea])
  useEffect(() => {
    if (matcha) {
      setOffSet((currentOffSet) => {
        let newOffSet = currentOffSet

        newOffSet = -366
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [matcha])
  useEffect(() => {
    if (coldMenu) {
      setOffSet((currentOffSet) => {
        let newOffSet = currentOffSet

        newOffSet = -488
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [coldMenu])
  useEffect(() => {
    if (limonade) {
      setOffSet((currentOffSet) => {
        let newOffSet = currentOffSet

        newOffSet = -680
        return newOffSet
      })
    } else {
      setOffSet((currentOffSet) => {
        return currentOffSet
      })
    }
  }, [limonade])

  //////////////////////
  useEffect(() => {
    gsap.fromTo(
      '.gsap-05-menu-1',
      { y: -300 },
      {
        y: 0,
        duration: 0.3,
      }
    )
  }, [scroll])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 160) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [scroll])
  //Functions
  const scrollToSectionHundler = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 160,
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
      <h1 className="text-center uppercase text-5xl my-6 opacity-70">Меню</h1>

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
              ? 'flex  mx-2 justify-center items-center cursor-pointer rounded  p-[1px] '
              : 'flex mx-2 p-[1px] justify-center items-center cursor-pointer rounded opacity-60 '
          }
          onClick={openToToggleMenuHandlerDrinks}
        >
          <h2 className="text-center text-3xl px-2">НАПОЇ</h2>
        </div>
        <div
          className={
            openToggleMenu
              ? 'flex-column p-[1px] mx-2 justify-center items-center cursor-pointer rounded opacity-60 '
              : 'flex-column  mx-2 justify-center items-center cursor-pointer rounded  p-[1px]'
          }
          onClick={openToToggleMenuHandlerFood}
        >
          <h2 className="text-center text-3xl p-2">ЇЖА</h2>
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
                  ? 'fixed  top-[55px] z-50 flex  bg-white w-full overflow-hidden gsap-05-menu-1 pl-2 '
                  : 'flex  gap-4 overflow-hidden pl-2  w-full'
              }
            >
              <div
                style={{ transform: `translateX(${offSet}px)` }}
                className="w-full flex gap-[28px] duration-1000 pb-1"
              >
                <div
                  className={
                    blackCoffee && !coffeeDrinks
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(blackCof)}
                >
                  <h4 className="text-center text-xl">Чорна кава</h4>
                </div>
                <div
                  className={
                    coffeeDrinks && !chocolate
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(coffeeDr)}
                >
                  <h4 className="text-center text-xl">Кавові напої</h4>
                </div>
                <div
                  className={
                    chocolate && !tea
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2 items-center'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(chocol)}
                >
                  <h4 className="text-center text-xl">Какао</h4>
                </div>
                <div
                  className={
                    tea && !matcha
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(theTea)}
                >
                  <h4 className="text-center text-xl">Чай</h4>
                </div>
                <div
                  className={
                    matcha && !coldMenu
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(theMatcha)}
                >
                  <h4 className="text-center text-xl">Матча</h4>
                </div>
                <div
                  className={
                    coldMenu && !limonade
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(coldMen)}
                >
                  <h4 className="text-center text-xl">Холодне меню</h4>
                </div>
                <div
                  className={
                    limonade && !milkshakes
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(limon)}
                >
                  <h4 className="text-center text-xl">Лимонади та інше</h4>
                </div>
                <div
                  className={
                    milkshakes
                      ? 'flex m-[2px] h-full shrink-0 border border-[red] rounded p-2'
                      : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                  }
                  onClick={() => scrollToSectionHundler(milkSha)}
                >
                  <h4 className="text-center text-xl">Мілкшейки</h4>
                </div>
              </div>
            </div>
            {/* Products from Drinks */}
            <div className={scroll ? 'mt-[200px]' : ''}>
              <InView
                as="div"
                onChange={(inView, entry) => setBlackCoffee(inView)}
                className="h-[700px] w-full bg-slate-900"
              >
                <div ref={blackCof}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setCoffeeDrinks(inView)}
                className="h-[700px] w-full bg-slate-800"
              >
                <div ref={coffeeDr}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setChocolate(inView)}
                className="h-[700px] w-full bg-slate-700"
              >
                <div ref={chocol}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setTea(inView)}
                className="h-[700px] w-full bg-slate-600"
              >
                <div ref={theTea}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setMatcha(inView)}
                className="h-[700px] w-full bg-slate-500"
              >
                <div ref={theMatcha}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setColdMenu(inView)}
                className="h-[700px] w-full bg-slate-400"
              >
                <div ref={coldMen}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setLimonade(inView)}
                className="h-[700px] w-full bg-slate-300"
              >
                <div ref={limon}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setMilkshakes(inView)}
                className="h-[700px] w-full bg-slate-200"
              >
                <div ref={milkSha}></div>
              </InView>
            </div>
          </div>
        ) : (
          <div className="w-full h-full mt-2">
            {/* Food subsections*/}
            <div
              className={
                scroll
                  ? 'fixed top-[55px] z-50 flex justify-center   bg-white w-full gsap-05-menu-1 gap-4 overflow-scroll pl-2'
                  : 'flex  gap-4 border-y-[1px] border-black bg-white pl-2'
              }
            >
              <div
                className={
                  saltedWaffles && !sweetWaffles
                    ? 'flex m-[2px] h-full shrink-0 border items-center border-[red] rounded p-2'
                    : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                }
                onClick={() => scrollToSectionHundler(wafflesSl)}
              >
                <h2 className="text-center text-xl">Солоні вафлі</h2>
              </div>
              <div
                className={
                  sweetWaffles && !other
                    ? 'flex m-[2px] h-full shrink-0 border items-center border-[red] rounded p-2'
                    : 'flex m-[2px] h-full shrink-0 opacity-50 items-center'
                }
                onClick={() => scrollToSectionHundler(wafflesSw)}
              >
                <h2 className="text-center text-xl">Солодкі вафлі</h2>
              </div>
              <div
                className={
                  other
                    ? 'flex m-[2px] h-full shrink-0 border items-center border-[red] rounded p-2'
                    : 'flex m-[2px] h-full shrink-0 opacity-50 items-center '
                }
                onClick={() => scrollToSectionHundler(another)}
              >
                <h2 className="text-center text-xl">Інше</h2>
              </div>
            </div>
            {/* Products from food */}
            <div className={scroll ? 'mt-[200px]' : ''}>
              <InView
                as="div"
                onChange={(inView, entry) => setSaltedWaffles(inView)}
                className="h-[700px] w-full bg-slate-900"
              >
                <div ref={wafflesSl}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setSweetWaffles(inView)}
                className="h-[700px] w-full bg-slate-600"
              >
                <div ref={wafflesSw}></div>
              </InView>
              <InView
                as="div"
                onChange={(inView, entry) => setOther(inView)}
                className="h-[700px] w-full bg-slate-400 "
              >
                <div ref={another}></div>
              </InView>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
