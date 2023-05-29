import { AiFillInstagram } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { MdWifiCalling3 } from 'react-icons/md'

const SocialMedia = () => {
  return (
    <div className="flex-column absolute top-[90px] left-[0] md:hidden bg-white rounded gsap-04">
      <a
        href="https://www.instagram.com/moment.cv/"
        target="blank"
        className="bg-[red]"
      >
        <AiFillInstagram className="cursor-pointer ml-[1px] text-2xl  rounded-full p-[3px] gsap-03" />
      </a>
      <a href="/" target="blank">
        <GrMail className="cursor-pointer ml-[1px] text-2xl ] rounded-full p-[3px] gsap-03" />
      </a>
      <a href="/" target="blank">
        <MdWifiCalling3 className="cursor-pointer ml-[1px] text-2xl  rounded-full p-[3px] gsap-03" />
      </a>
    </div>
  )
}

export default SocialMedia
