import { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  ChartPieIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import LanguageSelect from './LanguageSelect'
import SocialMedia from './SocialMedia'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollNavbar, setShowScrollNavbar] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setShowScrollNavbar(true)
      } else {
        setShowScrollNavbar(false)
      }
    })
  }, [])
  console.log(mobileMenuOpen)
  return (
    <div className="fixed inset-x-0 top-0 z-20 snap-y">
      <nav
        className={
          showScrollNavbar
            ? 'flex items-center justify-between py-2 px-8 lg:px-8 duration-500 bg-yellow-50 shadow-lg shadow-bg-orange-50'
            : 'flex items-center justify-between py-6 px-8 lg:px-8 duration-500 text-white'
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1 justify-start">
          <Link to="/">
            <div
              className={
                showScrollNavbar
                  ? "h-[75px] w-[220px] bg-[url('../public/images/Logo_1.png')] bg-center bg-cover bg-no-repeat text-black"
                  : "h-[85px] w-[245px] bg-[url('../public/images/Logo_1.png')] bg-center bg-cover bg-no-repeat text-white"
              }
            ></div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <div className="flex items-end pt-10">
            <Popover className="relative mr-10 ">
              <Popover.Button
                className={
                  showScrollNavbar
                    ? 'flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 font-serif tracking-widest'
                    : 'flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-300 font-serif tracking-widest'
                }
              >
                Меню
                <ChevronDownIcon
                  className={
                    showScrollNavbar
                      ? 'h-5 w-5 flex-none text-gray-900'
                      : 'h-5 w-5 flex-none text-gray-50'
                  }
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  {/* popoper item1 */}
                  <div className="p-1 ">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50 ">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChartPieIcon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/"
                          className="block font-semibold text-gray-900"
                        >
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">Кава</p>
                      </div>
                    </div>
                  </div>

                  {/* popers item2 */}
                  <div className="p-1">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                        <ChartPieIcon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/"
                          className="block font-semibold text-gray-900"
                        >
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-900">Десерти</p>
                      </div>
                    </div>
                  </div>
                  {/* popers item3 */}
                  <div className="p-1">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                        <ChartPieIcon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/"
                          className="block font-semibold text-gray-900"
                        >
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-900">Канапки</p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 items-center text-center font-serif'
                  : 'text-lg font-semibold leading-6 text-gray-200 mr-10 items-center text-center font-serif'
              }
            >
              Галерея
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-10 font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-300 mr-10 font-serif tracking-widest'
              }
            >
              Контакти
            </Link>
            <Link
              to="/"
              className={
                showScrollNavbar
                  ? 'text-lg font-semibold leading-6 text-gray-900 mr-40 w-[100px] font-serif tracking-widest'
                  : 'text-lg font-semibold leading-6 text-gray-300 mr-40 w-[100px] font-serif tracking-widest'
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
          <div className="flex justify-end mt-12 mr-6 ">
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
              <div className="h-[155px] w-[165px]  bg-[url('../public/images/Logo_2.png')] bg-center bg-cover bg-no-repeat "></div>
            </Link>
          </div>
          {/*   */}
          <div className="mt-10 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 ">
                <Link
                  to="/"
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
