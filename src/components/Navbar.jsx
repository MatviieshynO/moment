import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSelect from './LanguageSelect'
import SocialMedia from './SocialMedia'
import { Collapse, initTE } from 'tw-elements'
import gsap from 'gsap'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollNavbar, setShowScrollNavbar] = useState(false)
  useEffect(() => {
    initTE({ Collapse })
  }, [mobileMenuOpen])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setShowScrollNavbar(true)
      } else {
        setShowScrollNavbar(false)
      }
    })
  }, [])
  useEffect(() => {
    gsap.fromTo(
      '.gsap-01',
      {
        opacity: 0,
      },
      {
        delay: 1,
        opacity: 1,
        duration: 0.8,
      }
    )
    gsap.fromTo(
      '.gsap-03',
      {
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
        duration: 0.8,
      }
    )
    gsap.fromTo(
      '.gsap-04',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 4,
      }
    )
  }, [])
  useEffect(() => {
    gsap.fromTo(
      '.gsap-02',
      {
        rotate: 0,
      },
      {
        rotate: 1080,
        duration: 2,
      }
    )
    gsap.fromTo(
      '.gsap-05',
      {
        x: 400,
        opacity: 0.5,
      },
      {
        x: 0,
        delay: 0.5,
        opacity: 1,
        duration: 1,
      }
    )
    gsap.fromTo(
      '.gsap-05-link1',
      {
        x: 400,
        opacity: 0.5,
      },
      {
        x: 0,
        delay: 0.9,
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-05-link2',
      {
        x: 400,
        opacity: 0.5,
      },
      {
        x: 0,
        delay: 1.3,
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-05-link3',
      {
        x: 400,
        opacity: 0.5,
      },
      {
        x: 0,
        delay: 1.8,
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-05-link4',
      {
        x: 400,
        opacity: 0.5,
      },
      {
        x: 0,
        delay: 2.3,
        opacity: 1,
        duration: 0.5,
      }
    )
  }, [mobileMenuOpen])
  return (
    <div className="fixed inset-x-0 top-0 z-40 snap-y lg:w-[85%] lg:mx-auto">
      <nav
        className={
          showScrollNavbar
            ? 'flex items-center justify-between px-2 py-4 lg:px-8 duration-300 bg-white shadow-lg '
            : 'flex items-center justify-between px-2 py-6 lg:px-8 duration-300 bg-white shadow-lg shadow-bg-orange-50'
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden justify-between w-full ">
          {showScrollNavbar ? (
            <Link to="/" className="w-full h-full flex justify-center">
              <img
                className="duration-300 absolute top-[-7px] left-1/2 transform -translate-x-1/2 -translate-y-[0px] rounded-full"
                src="images/mobileMenuLogo.png"
                alt="ds"
                width={90}
                height={90}
              />
              {/* <div className="bg-[url('../public/images/mobileMenuLogo.png')]bg-no-repeat bg-contain bg-center top-10"></div> */}
            </Link>
          ) : (
            <Link to="/" className="w-full h-full flex justify-center">
              <img
                className="gsap-01 duration-300 absolute top-[-4px] left-1/2 transform -translate-x-1/2 -translate-y-[0px] rounded-full"
                src="images/mobileMenuLogo.png"
                alt="logo"
                width={115}
                height={115}
              />
            </Link>
          )}
          {!mobileMenuOpen ? (
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-md text-gray-1000 my-2 mr-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-md text-gray-1000 my-2 mr-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 gsap-02" aria-hidden="true" />
            </button>
          )}
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <div className="flex items-start p-10">
            <Link
              to="/menu"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 items-center text-center font-serif'
                  : 'text-lg font-semibold leading-6 text-gray-100 mr-10 items-center text-center font-serif'
              }
            >
              Меню
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 items-center text-center font-serif'
                  : 'text-lg font-semibold leading-6 text-gray-100 mr-10 items-center text-center font-serif'
              }
            >
              Галерея
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-100 mr-10 font-serif tracking-widest'
              }
            >
              Контакти
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-40 w-[100px] font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-100 mr-40 w-[100px] font-serif tracking-widest'
              }
            >
              Про нас
            </Link>
          </div>
          <div className="flex items-center">
            <LanguageSelect />
          </div>
          <div className="flex justify-center items-center">
            <SocialMedia />
          </div>
        </Popover.Group>
      </nav>
      {/* NavMobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className=" gsap-05 fixed right-[0] top-[72px] z-20 w-full p-4 h-[65y%] bg-gradient-to-r from-[#062e36] via-[#154354] to-[#b8c3cb] ">
          <ul className="text-white text-center pt-14">
            <li className="text-xl uppercase gsap-05-link1">
              <Link to="/menu">Меню</Link>
            </li>
            <li className="text-xl uppercase pt-6 gsap-05-link2">Відгуки</li>
            <li className="text-xl uppercase pt-6 gsap-05-link3">
              Години роботи
            </li>
            <li className="text-xl uppercase pt-6 gsap-05-link4">Про нас</li>
            <br />
            <hr />
          </ul>
          <LanguageSelect />
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
