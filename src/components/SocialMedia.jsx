import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const SocialMedia = () => {
  return (
    <div className='flex'>
      {' '}
      <InstagramIcon
        className=" mr-1 hover:opacity-70 cursor-pointer"
        fontSize="large"
      />
      <FacebookIcon
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
