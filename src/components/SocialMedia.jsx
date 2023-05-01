import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const SocialMedia = () => {
  return (
    <div className="flex border-b-[1px] border-black opacity-80 p-2">
      {' '}
      <InstagramIcon
        className=" mr-1 hover:opacity-70 cursor-pointer"
        fontSize="large"
      />
      <MailOutlineIcon
        className="hover:opacity-70 cursor-pointer"
        fontSize="large"
      />
      <LocationOnIcon
        className="hover:opacity-70 cursor-pointer"
        fontSize="large"
      />
    </div>
  )
}

export default SocialMedia
