import { Tab, initTE } from 'tw-elements'
import { useRef, useEffect } from 'react'
//Components
import ScrollToTopButton from '../components/ScrollToTopButton'

const PrivacyPolicy = () => {
  useEffect(() => {
    initTE({ Tab })
  }, [])
  //constants
  const sweetWaffles = useRef(null)
  const saltyWaffles = useRef(null)
  const Cheeseburgers = useRef(null)
  const Sandwiches = useRef(null)
  const classicMenu = useRef(null)
  const summerMenu = useRef(null)
  const matcha = useRef(null)
  const someInteresting = useRef(null)
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
          console.log(document.querySelector(`.${navClass}`).clientHeight)
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
  return (
    <div className="flex-row justify-center w-full">
      <ScrollToTopButton />
      {/* <!--Tabs navigation--> */}
      <ul
        className="mb-0 flex list-none flex-row flex-wrap border-b-0 pl-0 w-full justify-center bg-neutral-800 text-white"
        id="tabs-tab3"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation">
          <a
            href="#foot"
            className="mt-4 block border-x-0 border-b-2 border-t-0 border-transparent px-10 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-0 hover:isolate hover:border-transparent hover:bg-black focus:isolate focus:border-transparent data-[te-nav-active]:border-white data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
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
            className="mt-4 block border-x-0 border-b-2 border-t-0 border-transparent px-10 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-0 hover:isolate hover:border-transparent hover:bg-black focus:isolate focus:border-transparent data-[te-nav-active]:border-white data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
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
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home3"
          role="tabpanel"
          data-te-tab-active
          aria-labelledby="tabs-home-tab3"
        >
          {/* Tab 1 content button version */}
          <nav className="flex-column w-full">
            <ul className="navFood flex justify-center items-center sticky top-0 bg-black text-white text-xs text-center">
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(sweetWaffles)}>
                  Солодкі вафлі
                </a>
              </li>
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(saltyWaffles)}>
                  Солоні вафлі
                </a>
              </li>
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(Cheeseburgers)}>
                  Чізбургери
                </a>
              </li>
              <li className="p-2 my-2">
                <a href="##" onClick={() => scrollToSection(Sandwiches)}>
                  Сендвічі
                </a>
              </li>
            </ul>
            <div className="flex-column">
              <h2 className="text-center">Їжа</h2>
              <section
                ref={sweetWaffles}
                className="sectionFood bg-[red] h-[500px]"
              ></section>
              <section
                ref={saltyWaffles}
                className="sectionFood bg-[green] h-[500px]"
              ></section>
              <section
                ref={Cheeseburgers}
                className="sectionFood bg-[yellow] h-[500px]"
              ></section>
              <section
                ref={Sandwiches}
                className="sectionFood bg-[gray] h-[500px]"
              ></section>
            </div>
          </nav>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile3"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab3"
        >
          {/* Tab 2 content button version */}
          <nav className="flex-column w-full">
            <ul className="navDrinks flex justify-center items-center sticky top-0 bg-black text-white text-xs text-center">
              <li className="p-2 ">
                <a href="##" onClick={() => scrollToSection(classicMenu)}>
                  Класичне меню
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(summerMenu)}>
                  Літнє меню
                </a>
              </li>
              <li className="p-2 ">
                <a href="##" onClick={() => scrollToSection(matcha)}>
                  Матча
                </a>
              </li>
              <li className="p-4 ">
                <a href="##" onClick={() => scrollToSection(someInteresting)}>
                  Щось цікаве
                </a>
              </li>
            </ul>
            <div className="flex-column">
              <h2 className="text-center">Напої</h2>
              <section
                ref={classicMenu}
                className="sectionDrinks bg-[red] h-[500px]"
              ></section>
              <section
                ref={summerMenu}
                className="sectionDrinks bg-[green] h-[500px]"
              ></section>
              <section
                ref={matcha}
                className="sectionDrinks bg-[yellow] h-[500px]"
              ></section>
              <section
                ref={someInteresting}
                className="sectionDrinks bg-[gray] h-[500px]"
              ></section>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
