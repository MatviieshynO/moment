import { Tab, initTE } from 'tw-elements'
import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//Components
import ScrollToTopButton from '../components/ScrollToTopButton'
import ProductCard from '../components/ProductCard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import LanguageSelect from '../components/LanguageSelect'

const Menu = () => {
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

        <div>
          <LanguageSelect />
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
            <div className="flex-column mt-20">
              <section ref={sweetWaffles} className="sectionFood ">
                <h4 className="text-center">Солодкі вафлі</h4>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="Солоні вафлі"
                  text="Свіжі і дуже смачні, всіх запрошую покуштувати"
                  price="250"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={saltyWaffles} className="sectionFood  ">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={Cheeseburgers} className="sectionFood ">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={Sandwiches} className="sectionFood ">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
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
            <ul className="navDrinks flex justify-center items-center sticky top-[74px] pt-2 bg-black text-white text-xs text-center">
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
              <section ref={classicMenu} className="sectionDrinks ">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={summerMenu} className="sectionDrinks">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={matcha} className="sectionDrinks">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
              <section ref={someInteresting} className="sectionDrinks">
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  title="some title"
                  text="some text"
                  price="500"
                />
              </section>
            </div>
          </nav>
        </div>
      </div>
      <div className="p-4">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Локалізація і адрес
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Чернівці, Україна
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          info@example.com
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          + 01 234 567 88
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
              clipRule="evenodd"
            />
          </svg>
          + 01 234 567 89
        </p>
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
