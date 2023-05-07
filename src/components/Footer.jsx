import { Link } from 'react-router-dom'
import SocialMedia from '../components/SocialMedia'

export default function Footer() {
  return (
    // <!-- Footer container -->
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left pb-8">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Зв'яжіться з нами в соціальних мережах</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <SocialMedia />
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Тут ви знайдете юридичну і контактну інформацію.
            </h6>
            <p>А також корисні посилання, для кращого переміщення по сайтi</p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Посилання
            </h6>
            <p className="mb-4">
              <Link
                to="/menu"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Меню
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/gallery"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Галерея
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/contact"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Контакти
              </Link>
            </p>
            <p>
              <Link
                to="/about"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Про нас
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Юридична інформація
            </h6>
            <p className="mb-4">
              <Link
                to="/privacy"
                class="text-neutral-600 dark:text-neutral-200"
              >
                Правила та умови
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/terms"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Безпечність даних
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/privacy"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Політика конфіденційності
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Локалізація і адрес
            </h6>
            <p className="mb-4 flex items-start justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <a href="https://www.google.com/maps/place/55-010+%D0%A0%D0%B0%D0%B4%D0%B2%D0%B0%D0%BD%D1%96%D1%86%D0%B5/@51.051433,17.0944271,14z/data=!3m1!4b1!4m6!3m5!1s0x470fdcd936094ecb:0xe004eba23da99d6c!8m2!3d51.0489879!4d17.1112823!16s%2Fm%2F03gzc11">
                Чернівці, Кобилянської, 10
                <p>( у дворику)</p>
              </a>
            </p>
            <p className="mb-4 flex  justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="mailto:momentsmakucv@gmail.com">
                momentsmakucv@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
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
    </footer>
  )
}
