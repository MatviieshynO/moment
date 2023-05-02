import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const SocialMedia = () => {
  return (
    <div className="flex border-b-[1px] border-black opacity-80 p-2">
      <InstagramIcon
        className=" mr-1 hover:opacity-70 cursor-pointer"
        fontSize="medium"
      />
      <MailOutlineIcon
        className="hover:opacity-70 cursor-pointer"
        fontSize="medium"
      />
      <LocationOnIcon
        className="hover:opacity-70 cursor-pointer"
        fontSize="medium"
      />
    </div>
  )
}

export default SocialMedia
