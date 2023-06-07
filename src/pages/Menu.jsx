import { useEffect, useState, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import gsap from 'gsap'

//Components

const Menu = () => {
  //States
  const [scroll, setScroll] = useState(false)
  const [openToggleMenu, setOpenToggleMenu] = useState(true)
  const [saltedWaffles, setSaltedWaffles] = useState(false)
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

        newOffSet = -600
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
      if (window.scrollY > 190) {
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
    <div className="mt-20 font-syne-mono bg-white">
      <h1 className="text-center text-5xl my-6 opacity-70 uppercase pt-20">
        Меню
      </h1>

      {/*  drinks and food section  */}
      <div
        className={
          scroll
            ? 'fixed top-0 flex bg-white z-50 w-full justify-center pb-2 gap-8 gsap-05-menu-1 border-[#256469] border-b-2 text-[#256469]'
            : 'flex justify-center border-[#256469] border-b-2 [#256469] text-[#256469]'
        }
      >
        <div
          className={
            openToggleMenu
              ? 'flex  mx-2 justify-center items-center cursor-pointer rounded'
              : 'flex mx-2 justify-center items-center cursor-pointer rounded opacity-60 '
          }
          onClick={openToToggleMenuHandlerDrinks}
        >
          <h2 className="text-center text-3xl px-2 uppercase">Напої</h2>
        </div>
        <div
          className={
            openToggleMenu
              ? 'flex-column p-[1px] mx-2 justify-center items-center cursor-pointer rounded opacity-60 '
              : 'flex-column  mx-2 justify-center items-center cursor-pointer rounded  p-[1px]'
          }
          onClick={openToToggleMenuHandlerFood}
        >
          <h2 className="text-center text-3xl p-2 uppercase">Їжа</h2>
        </div>
      </div>
      {/* subsections */}
      <div>
        {openToggleMenu ? (
          <div className="w-full h-full">
            {/* Drinks subsections*/}
            <div
              className={
                scroll
                  ? 'fixed top-[63px] z-50 flex bg-white overflow-hidden gsap-05-menu-1 py-2 px-[2px]'
                  : 'flex overflow-hidden py-2 px-[2px] w-full '
              }
            >
              <div
                style={{ transform: `translateX(${offSet}px)` }}
                className="flex pb-1 text-center text-lg gap-2 duration-700"
              >
                <div
                  className={
                    blackCoffee && !coffeeDrinks
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(blackCof)}
                >
                  <button>Чорна кава</button>
                </div>
                <div
                  className={
                    coffeeDrinks && !chocolate
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(coffeeDr)}
                >
                  <button>Кавові напої</button>
                </div>
                <div
                  className={
                    chocolate && !tea
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(chocol)}
                >
                  <button>Какао</button>
                </div>
                <div
                  className={
                    tea && !matcha
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(theTea)}
                >
                  <button>Чай</button>
                </div>
                <div
                  className={
                    matcha && !coldMenu
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(theMatcha)}
                >
                  <button>Матча</button>
                </div>
                <div
                  className={
                    coldMenu && !limonade
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(coldMen)}
                >
                  <button>Холодне меню</button>
                </div>
                <div
                  className={
                    limonade && !milkshakes
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(limon)}
                >
                  <button>Лимонади та інше</button>
                </div>
                <div
                  className={
                    milkshakes
                      ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                      : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                  }
                  onClick={() => scrollToSectionHundler(milkSha)}
                >
                  <button>Мілкшейки</button>
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
          <div className=" h-full">
            {/* Food subsections*/}
            <div
              className={
                scroll
                  ? 'fixed top-[63px] z-50 flex bg-white w-full overflow-hidden gsap-05-menu-1 py-2 px-[2px] text-base gap-2 '
                  : 'flex overflow-hidden py-2 px-[2px] w-full text-base gap-2'
              }
            >
              <div
                className={
                  saltedWaffles && !sweetWaffles
                    ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                    : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                }
                onClick={() => scrollToSectionHundler(wafflesSl)}
              >
                <button>Солоні вафлі</button>
              </div>
              <div
                className={
                  sweetWaffles && !other
                    ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                    : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                }
                onClick={() => scrollToSectionHundler(wafflesSw)}
              >
                <button>Солодкі вафлі</button>
              </div>
              <div
                className={
                  other
                    ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                    : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                }
                onClick={() => scrollToSectionHundler(another)}
              >
                <button>Інше</button>
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
