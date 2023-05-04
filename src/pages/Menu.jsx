import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ScrollToButton from '../components/ScrollToTopButton'
import { Tab, initTE, Ripple } from 'tw-elements'
import { useEffect, useState, useRef } from 'react'

const Menu = () => {
  const [showScrollNavbar, setShowScrollNavbar] = useState(false)
  const wafles = useRef(null)
  const wafles2 = useRef(null)
  const Cheeseburger = useRef(null)
  const Sandwich = useRef(null)
  const classicMenu = useRef(null)
  const someInteresting = useRef(null)
  const matcha = useRef(null)
  const summerMenu = useRef(null)
  const eat = useRef(null)
  const drink = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    initTE({ Tab, Ripple })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setShowScrollNavbar(true)
      } else {
        setShowScrollNavbar(false)
      }
    })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollDistance = window.scrollY

      document.querySelectorAll('.section').forEach((el, i) => {
        if (
          el.offsetTop - document.querySelector('.nav-link').clientHeight <=
          scrollDistance
        ) {
          document.querySelectorAll('.nav-link a').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active')
            }
          })
        }
      })
    })
  }, [])

  return (
    <div>
      <ScrollToButton />

      <div className="mt-0">
        {/* <!--Tabs navigation--> */}
        <ul
          className="nav mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation" class="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
              ref={eat}
            >
              ЇЖА
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-profile02"
              className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-profile02"
              role="tab"
              aria-controls="tabs-profile02"
              aria-selected="false"
              ref={drink}
            >
              НАПОЇ
            </a>
          </li>
        </ul>

        {/* <!--Tabs content--> */}
        <div className="mb-6">
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home02"
            role="tabpanel"
            aria-labelledby="tabs-home-tab02"
            data-te-tab-active
          >
            {/* Foot content */}
            <div
              className="flex w-full justify-center duration-1000 flex-col items-center"
              role="group"
            >
              <nav
                className={
                  showScrollNavbar
                    ? 'nav-link fixed top-0 bg-white'
                    : 'nav-link bg-white'
                }
              >
                {' '}
                <NavLink
                  type="button"
                  className="'inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(wafles)}
                >
                  <h2>Солені вафлі</h2>
                </NavLink>
                <NavLink
                  type="button"
                  className="'inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(wafles2)}
                >
                  Солодкі вафлі
                </NavLink>
                <NavLink
                  type="button"
                  className="'inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(Cheeseburger)}
                >
                  Чізбургери
                </NavLink>
                <NavLink
                  className="'inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'"
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(Sandwich)}
                >
                  Сендвічі
                </NavLink>
              </nav>
              <div className="section w-full bg-[silver] pt-10" ref={wafles}>
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Солодкі вафлі
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="Title 1"
                  text="Some text 1"
                  price="100"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="50"
                />
              </div>
              <div className="section w-full bg-[orange] pt-10" ref={wafles2}>
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Солені вафлі
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="60"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="12"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="50"
                />
              </div>
              <div
                className="section w-full bg-[green] pt-10"
                ref={Cheeseburger}
              >
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Чізбургери
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div className="section w-full bg-[yellow] pt-10" ref={Sandwich}>
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Сендвічі
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div className="flex flex-col w-full mb-8">
                <button
                  className="p-4 m-2 shadow-md"
                  onClick={() => scrollToSection(eat)}
                >
                  Повернутись до Їжа
                </button>
                <div className="m-4">
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
            </div>

            {/*  */}
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile02"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab02"
          >
            {/* Drinks content */}
            <div
              className="flex w-full justify-center duration-1000 flex-col items-center"
              role="group"
            >
              <div
                className={
                  showScrollNavbar
                    ? 'nav-link fixed top-0 bg-[silver]'
                    : 'nav-link bg-white'
                }
              >
                <NavLink
                  type="button"
                  className="inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(classicMenu)}
                >
                  Класичне меню
                </NavLink>
                <NavLink
                  type="button"
                  className="inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(someInteresting)}
                >
                  Щось цікаве
                </NavLink>
                <NavLink
                  type="button"
                  className="inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(matcha)}
                >
                  Матча
                </NavLink>
                <NavLink
                  type="button"
                  className="inline-block px-[1px] pb-[6px] pt-2 text-xs font-medium  leading-normal  transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(summerMenu)}
                >
                  Літнє меню
                </NavLink>
              </div>
              <div
                className="section w-full  bg-[silver] pt-10"
                ref={classicMenu}
              >
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Класичне меню
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div
                className=" section w-full bg-[orange] pt-10"
                ref={someInteresting}
              >
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Щось цікаве
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div className=" section w-full  bg-[green] pt-10" ref={matcha}>
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Матча
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div
                className="section w-full bg-[yellow] pt-10"
                ref={summerMenu}
              >
                <h2 className="text-center p-2 m-2 text-2xl border-b-2">
                  Літнє меню
                </h2>
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 1"
                  text="Some text 1"
                  price="500"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 2"
                  text="Some text 2"
                  price="508"
                />
                <ProductCard
                  url="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  title="title 3"
                  text="Some text 3"
                  price="580"
                />
              </div>
              <div className="flex flex-col w-full mb-8">
                <button
                  className="p-4 m-2 shadow-md"
                  onClick={() => scrollToSection(drink)}
                >
                  Повернутись до напої
                </button>
                <div className="m-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
