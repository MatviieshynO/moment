import { AiFillInstagram } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { MdWifiCalling3 } from 'react-icons/md'

const SocialMedia = () => {
  return (
    <div className="flex-column absolute top-[58px] left-[-4px] md:hidden rounded bg-gradient-to-r from-[#092d42] via-[#005672] to-[#2683b1] gsap-04">
      <a
        href="https://www.instagram.com/moment.cv/"
        target="blank"
        className="bg-[red]"
      >
        <AiFillInstagram className="cursor-pointer ml-[1px] text-3xl  p-[5px] gsap-03 bg-white" />
      </a>
      <a href="/" target="blank">
        <GrMail className="cursor-pointer ml-[1px] text-3xl p-[5px] gsap-03 " />
      </a>
      <a href="/" target="blank">
        <MdWifiCalling3 className="cursor-pointer ml-[1px] text-3xl p-[5px] gsap-03 text-white" />
      </a>
    </div>
  )
}

export default SocialMedia
