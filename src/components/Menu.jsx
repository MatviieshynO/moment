import { Tab, initTE } from 'tw-elements'
import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//Components
import ScrollToTopButton from '../components/ScrollToTopButton'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const Menu = () => {
  useEffect(() => {
    initTE({ Tab })
  }, [])
  //constants
  const saltyWaffles = useRef(null)
  const sweetWaffles = useRef(null)
  const other = useRef(null)

  //Drinks
  const blackСoffee = useRef(null)
  const coffeeDrinks = useRef(null)
  const cocoa = useRef(null)
  const tea = useRef(null)
  const matcha = useRef(null)
  const coldMenu = useRef(null)
  const lemonadeAndOthers = useRef(null)
  const milkshakes = useRef(null)

  //functions
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  function addClassActive(sectionClass, navClass) {
    window.addEventListener('scroll', () => {
      const scrollDistans = window.scrollY

      document.querySelectorAll(`.${sectionClass}`).forEach((el, i) => {
        if (
          el.offsetTop - document.querySelector(`.${navClass}`).clientHeight <=
          scrollDistans
        ) {
          document.querySelectorAll(`.${navClass} a`).forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active')
            }
          })
          document
            .querySelectorAll(`.${navClass} li`)
            [i].querySelector('a')
            .classList.add('active')
        }
      })
    })
  }
  addClassActive('sectionFood', 'navFood')
  addClassActive('sectionDrinks', 'navDrinks')
  //

  //
  return (
    <div className="flex-row justify-center w-full box-border">
      <ScrollToTopButton />
      <div className="flex sticky top-[0px] items-center px-8 text-white bg-[#3b3a3a] justify-between gap-40">
        <div>
          <NavLink to="/">
            <KeyboardBackspaceIcon
              fontSize="large"
              sx={{
                padding: '0px 2px',
                borderRadius: '5px',
              }}
            />
          </NavLink>
        </div>
      </div>
      {/* <!--Tabs navigation--> */}
      <ul
        className="mb-0 flex sticky top-10 list-none flex-row flex-wrap border-b-0 pl-0 w-full justify-center bg-neutral-800 text-white"
        id="tabs-tab3"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation">
          <a
            href="#foot"
            className="mt-[2px] flex px-10 pb-2 pt-2 text-xs font-medium leading-tight text-neutral-0 hover:isolate hover:border-transparent hover:bg-black focus:isolate focus:border-transparent data-[te-nav-active]:border-white data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            id="tabs-home-tab3"
            data-te-toggle="pill"
            data-te-target="#tabs-home3"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home3"
            aria-selected="true"
          >
            Їжа
          </a>
        </li>
        <li role="presentation">
          <a
            href="#drinks"
            className="mt-[2px] flex border-x-0 border-b-2 border-t-0 border-transparent px-10 pb-2 pt-2 text-xs font-medium leading-tight text-neutral-0 hover:isolate hover:border-transparent hover:bg-black  data-[te-nav-active]:border-white data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            id="tabs-profile-tab3"
            data-te-toggle="pill"
            data-te-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="true"
          >
            Напої
          </a>
        </li>
      </ul>
      {/* <!--Tabs content--> */}
      <div>
        <div
          className="hidden opacity-100 transition-opacity duration-0 ease-linear data-[te-tab-active]:block"
          id="tabs-home3"
          role="tabpanel"
          data-te-tab-active
          aria-labelledby="tabs-home-tab3"
        >
          {/* Tab 1 content button version */}
          <nav className="flex-column w-full">
            <ul className="navFood flex justify-center items-center sticky top-[74px] bg-black text-white text-xs text-center">
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(saltyWaffles)}>
                  Солоні вафлі
                </a>
              </li>
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(sweetWaffles)}>
                  Солодкі вафлі
                </a>
              </li>
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(other)}>
                  Інше
                </a>
              </li>
            </ul>
            <div className="flex-column ">
              <section ref={saltyWaffles} className="sectionFood ">
                <h4 className="text-center">Солодкі вафлі</h4>
              </section>
              <section ref={sweetWaffles} className="sectionFood  "></section>

              <section ref={other} className="sectionFood "></section>
            </div>
          </nav>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-0 data-[te-tab-active]:block"
          id="tabs-profile3"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab3"
        >
          {/* Tab 2 content button version */}
          <nav className="flex-column w-full">
            <ul className="navDrinks flex  text-center w-[100%] text-[1.5vw] whitespace-nowrap  z-20  overflow-x-auto justify-center items-center sticky top-[74px] bg-black text-white text-xs">
              <li className="p-2 ">
                <a href="##" onClick={() => scrollToSection(blackСoffee)}>
                  Чорна кава
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(coffeeDrinks)}>
                  Кавові напої
                </a>
              </li>
              <li className="p-2 ">
                <a href="##" onClick={() => scrollToSection(cocoa)}>
                  Какао
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(tea)}>
                  Чай
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(matcha)}>
                  Матча
                </a>
              </li>
              <li className="p-4 ">
                <a href="#coldMenu" onClick={() => scrollToSection(coldMenu)}>
                  Холодне меню
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(lemonadeAndOthers)}>
                  Лимонад та інше
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(milkshakes)}>
                  Мілкшейки
                </a>
              </li>
            </ul>
            <div className="flex-column">
              <h2 className="text-center">Напої</h2>
              <section ref={blackСoffee} className="sectionDrinks ">
                <h2>Чорна кава</h2>
              </section>
              <section ref={coffeeDrinks} className="sectionDrinks">
                <h2>Кавові напої</h2>
              </section>
              <section ref={cocoa} className="sectionDrinks">
                <h2>Какао</h2>
              </section>
              <section ref={tea} className="sectionDrinks">
                <h2>Чай</h2>
              </section>
              <section ref={matcha} className="sectionDrinks">
                <h2>Матча</h2>
              </section>
              <section ref={coldMenu} className="sectionDrinks">
                <h2>Холодне меню</h2>
              </section>
              <section ref={lemonadeAndOthers} className="sectionDrinks">
                <h2>Лимонад і інше</h2>
              </section>
              <section ref={milkshakes} className="sectionDrinks">
                <h2>Мілкшейки</h2>
              </section>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span className="text-xs">
          Всі права захищені © 2023 авторське право :{' '}
        </span>
        <a
          className="text-xs font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://matviieshyn.vercel.app/"
          target="blank"
        >
          Oleh Matviieshyn
        </a>
      </div>
    </div>
  )
}

export default Menu
