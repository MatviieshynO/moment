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
import { Collapse, initTE } from 'tw-elements'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollNavbar, setShowScrollNavbar] = useState(false)
  useEffect(() => {
    initTE({ Collapse })
  }, [mobileMenuOpen])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowScrollNavbar(true)
      } else {
        setShowScrollNavbar(false)
      }
    })
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-20 snap-y">
      <nav
        className={
          showScrollNavbar
            ? 'flex items-center justify-between py-2 px-8 lg:px-8 duration-500 bg-amber-50 shadow-lg shadow-bg-orange-50'
            : 'flex items-center justify-between py-6 px-8 lg:px-8 duration-1000 text-white'
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <div
              className={
                showScrollNavbar
                  ? "lg:h-[75px] lg:w-[220px] lg:bg-[url('../public/images/Logo_1.png')] lg:bg-center lg:bg-cover lg:bg-no-repeat lg:text-black"
                  : "lg:h-[85px] lg:w-[245px] lg:bg-[url('../public/images/Logo_1.png')] lg:bg-center lg:bg-cover lg:bg-no-repeat lg:text-white"
              }
            ></div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={
              showScrollNavbar
                ? '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                : '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'
            }
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
              <div className="h-[155px] w-[165px]  bg-[url('../public/images/Logo_2.png')] bg-center bg-cover bg-no-repeat "></div>
            </Link>
          </div>
          {/*   */}
          <div className="mt-10 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 ">
                {/* <Link
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
                </Link> */}

                <div id="accordionExample5">
                  <button
                    className="group relative flex w-full justify-center items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#collapseOne5"
                    aria-expanded="false"
                    aria-controls="collapseOne5"
                  >
                    <div className="flex justify-center items-center">
                      <span className="mr-2">Меню</span>
                      <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <div
                    id="collapseOne5"
                    className="!visible flex justify-center"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne5"
                  >
                    <span>dasd</span>
                  </div>
                </div>
                {/* item1 */}
                <div>
                  <h2 className="mb-0" id="headingTwo5">
                    <button
                      className="group relative justify-center flex w-full items-center px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target="#collapseTwo5"
                      aria-expanded="false"
                      aria-controls="collapseTwo5"
                    >
                      <div className="flex justify-center items-center">
                        {' '}
                        <span className="mr-2">Галерея</span>
                        <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo5"
                    className="!visible hidden flex justify-center"
                    data-te-collapse-item
                    aria-labelledby="headingTwo5"
                  >
                    <span>dasd</span>
                  </div>
                </div>
                {/* item2 */}
                <div>
                  <button
                    className="group relative justify-center flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseThree5"
                    aria-expanded="false"
                    aria-controls="collapseThree5"
                  >
                    <div className="flex justify-center items-center">
                      <span className="mr-2">Контакти</span>
                      <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <div
                    id="collapseThree5"
                    className="!visible hidden flex justify-center"
                    data-te-collapse-item
                    aria-labelledby="headingThree5"
                  >
                    <span>dasd</span>
                  </div>
                </div>
                {/*  item3*/}
                <div>
                  <button
                    className="group relative justify-center flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseFour5"
                    aria-expanded="false"
                    aria-controls="collapseFour5"
                  >
                    <div className="flex justify-center items-center">
                      <span className="mr-2">Про нас</span>
                      <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <div
                    id="collapseFour5"
                    className="!visible hidden flex justify-center"
                    data-te-collapse-item
                    aria-labelledby="headingFour5"
                  >
                    <span>dasd</span>
                  </div>
                </div>

                {/*  */}
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
