import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const SocialMedia = () => {
  return (
    <div className="flex pt-[11px] items-top">
      <a href="https://www.instagram.com/moment.cv/" target="blank">
        <InstagramIcon
          className="hover:opacity-70 cursor-pointer mr-[2px] p-[1px]"
          fontSize="medium"
        />
      </a>
      <a href="/" target="blank">
        <MailOutlineIcon
          className="hover:opacity-70 cursor-pointer"
          fontSize="medium"
        />
      </a>
      <a href="/" target="blank">
        <LocationOnIcon
          className="hover:opacity-70 cursor-pointer p-[1px]"
          fontSize="medium"
        />
      </a>
    </div>
  )
}

export default SocialMedia
