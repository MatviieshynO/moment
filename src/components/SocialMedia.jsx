import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const SocialMedia = () => {
  return (
    <div className="flex pt-[8px] mr-2">
      <a href="https://www.instagram.com/moment.cv/" target="blank">
        <InstagramIcon
          className="hover:opacity-70 cursor-pointer mr-[2px] p-[2px] "
          fontSize="large"
        />
      </a>
      <a href="/" target="blank">
        <MailOutlineIcon
          className="hover:opacity-70 cursor-pointer"
          fontSize="large"
        />
      </a>
      <a href="/" target="blank">
        <LocationOnIcon
          className="hover:opacity-70 cursor-pointer p-[2px]"
          fontSize="large"
        />
      </a>
    </div>
  )
}

export default SocialMedia
