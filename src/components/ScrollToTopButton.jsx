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
    <div className="fixed bottom-[80px] right-[20px] text-6xl">
      {showScrollButton && (
        <KeyboardDoubleArrowUpIcon
          className="text-black  cursor-pointer  hover:border-[1px]"
          onClick={scrollToTop}
          fontSize="large"
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
