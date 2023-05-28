import { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    })
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="fixed sm:bottom-[10%] sm:right-[1%] md:bottom-[10%] md:right-[3%] bottom-[-21px] right-[42%]">
      {showScrollButton && (
        <BsFillArrowUpCircleFill
          className="cursor-pointer bg-incherit text-5xl text-[#256469]"
          onClick={scrollToTop}
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
