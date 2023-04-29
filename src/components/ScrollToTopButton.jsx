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
    <div className="fixed sm:bottom-[10%] sm:right-[3%] md:bottom-[10%] md:right-[3%] bottom-[-9px] right-[45%] text-6xl">
      {showScrollButton && (
        <KeyboardDoubleArrowUpIcon
          className="cursor-pointer bg-incherit"
          onClick={scrollToTop}
          fontSize="large"
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
