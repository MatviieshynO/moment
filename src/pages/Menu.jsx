import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Tab, initTE } from 'tw-elements'
import { useEffect } from 'react'

const Menu = () => {
  useEffect(() => {
    initTE({ Tab })
  }, [])
  return (
    <div>
      <Navbar />

      <div className="mt-20 lg:mt-40 h-[600px]">
        <h3 className="text-center text-3xl">Ознайомтеся з нашим меню</h3>
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
            Tab 1 content
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile02"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab02"
          >
            Tab 2 content
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu
