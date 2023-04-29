import { useState, useEffect } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
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
  console.log(showScrollButton)
  return (
    <div className="fixed sm:bottom-[70px] sm:right-[50px] md:bottom-[80px] md:right-[50px] bottom-[0px] right-[45%] text-6xl">
      {showScrollButton && (
        <KeyboardDoubleArrowUpIcon
          className="cursor-pointer hover:border-[1px] bg-incherit hover:bg-white"
          onClick={scrollToTop}
          fontSize="large"
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
