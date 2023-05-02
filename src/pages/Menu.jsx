import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
  return (
    <div>
      <ScrollToButton />
      {/* <Navbar /> */}

      <div className="mt-0 h-[600px]">
        {/* <!--Tabs navigation--> */}
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
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
              <div
                className={
                  showScrollNavbar ? 'fixed top-0 bg-[silver]' : 'bg-white'
                }
              >
                {' '}
                <button
                  type="button"
                  className="inline-block rounded-l border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(wafles)}
                >
                  <h2>Солені вафлі</h2>
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(wafles2)}
                >
                  Солодкі вафлі
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block rounded-r border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(Cheeseburger)}
                >
                  Чізбургери
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block rounded-r border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(Sandwich)}
                >
                  Сендвічі
                </button>
              </div>
              <div className="w-full h-[500px] bg-[silver] pt-10" ref={wafles}>
                <h2 className="text-center p-2 m-2 text-2xl">wafles</h2>
              </div>
              <div className="w-full h-[500px] bg-[orange] pt-10" ref={wafles2}>
                <h2 className="text-center p-2 m-2 text-2xl">wafles2</h2>
              </div>
              <div
                className="w-full h-[500px] bg-[green] pt-10"
                ref={Cheeseburger}
              >
                <h2 className="text-center p-2 m-2 text-2xl">Cheeseburger</h2>
              </div>
              <div
                className="w-full h-[500px] bg-[yellow] pt-10"
                ref={Sandwich}
              >
                <h2 className="text-center p-2 m-2 text-2xl">Sandwich</h2>
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
                  showScrollNavbar ? 'fixed top-0 bg-[silver]' : 'bg-white'
                }
              >
                <button
                  type="button"
                  className="inline-block rounded-l border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(classicMenu)}
                >
                  Класичне меню
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(someInteresting)}
                >
                  Щось цікаве
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block rounded-r border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(matcha)}
                >
                  Матча
                </button>
                <button
                  type="button"
                  className="-ml-0.5 inline-block rounded-r border-2 border-primary px-2 pb-[6px] pt-2 text-xs font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => scrollToSection(summerMenu)}
                >
                  Літнє меню
                </button>
              </div>
              <div
                className="w-full h-[500px] bg-[silver] pt-10"
                ref={classicMenu}
              >
                <h2 className="text-center p-2 m-2 text-2xl">wafles</h2>
              </div>
              <div
                className="w-full h-[500px] bg-[orange] pt-10"
                ref={someInteresting}
              >
                <h2 className="text-center p-2 m-2 text-2xl">wafles2</h2>
              </div>
              <div className="w-full h-[500px] bg-[green] pt-10" ref={matcha}>
                <h2 className="text-center p-2 m-2 text-2xl">Cheeseburger</h2>
              </div>
              <div
                className="w-full h-[500px] bg-[yellow] pt-10"
                ref={summerMenu}
              >
                <h2 className="text-center p-2 m-2 text-2xl">Sandwich</h2>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Menu
