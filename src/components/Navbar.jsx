import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSelect from './LanguageSelect'
import SocialMedia from './SocialMedia'
import { Collapse, initTE } from 'tw-elements'

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
  console.log(showScrollNavbar)
  return (
    <div className="fixed inset-x-0 top-0 z-20 snap-y">
      <nav
        className={
          showScrollNavbar
            ? 'flex items-center justify-between py-0 px-8 lg:px-8 duration-200 bg-white shadow-lg shadow-bg-orange-50'
            : 'flex items-center justify-between py-6 px-8 lg:px-8 duration-200 text-white'
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <div
              className={
                showScrollNavbar
                  ? ' lg:bg-center lg:bg-cover lg:bg-no-repeat lg:text-black'
                  : ' lg:bg-center lg:bg-cover lg:bg-no-repeat lg:text-white'
              }
              // "lg:h-[150px] lg:w-[150px] lg:bg-[url('../public/images/Logo_3.png')]
            ></div>
          </Link>
        </div>
        <div className="flex lg:hidden justify-between w-full">
          {showScrollNavbar ? (
            <div className="bg-[url('../public/images/LogoHomePage.gif')] h-[70px] w-40 bg-no-repeat bg-cover bg-center top-10"></div>
          ) : (
            <div></div>
          )}

          <button
            type="button"
            className={
              showScrollNavbar
                ? '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-1000'
                : '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'
            }
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <div className="flex items-start p-10">
            <Link
              to="/menu"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 items-center text-center font-serif'
                  : 'text-lg font-semibold leading-6 text-gray-500 mr-10 items-center text-center font-serif'
              }
            >
              Меню
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 items-center text-center font-serif'
                  : 'text-lg font-semibold leading-6 text-gray-500 mr-10 items-center text-center font-serif'
              }
            >
              Галерея
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-500 mr-10 font-serif tracking-widest'
              }
            >
              Контакти
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-40 w-[100px] font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-500 mr-40 w-[100px] font-serif tracking-widest'
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
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* NavMobile */}
        <div className="fixed inset-0 z-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end mt-4 mr-6 ">
            <button
              type="button"
              className="rounded-md text-gray-700 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="flex justify-center ">
            <Link to="/" className="">
              <div className="bg-center bg-cover bg-no-repeat "></div>
              {/* h-[155px] w-[165px]  bg-[url('../public/images/Logo_3.png')]  */}
            </Link>
          </div>
          {/*   */}
          <div className="mt-10 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 ">
                <Link
                  to="/menu"
                  className="-mx-0 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50 text-center"
                >
                  Меню
                </Link>
                <Link
                  to="/"
                  className="-mx-0 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                >
                  Галерея
                </Link>
                <Link
                  to="/"
                  className="-mx-0 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                >
                  Контакти
                </Link>
                <Link
                  to="/"
                  className="-mx-0 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                >
                  Про нас
                </Link>
              </div>

              <div className="flex justify-center items-center mt-10">
                <LanguageSelect />
              </div>
              <div className="py-6 flex justify-center">
                <SocialMedia />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
