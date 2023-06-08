const SocialMedia = () => {
  return (
    <div className="flex-column absolute top-[30px] z-30 left-[25px] md:hidden rounded  gsap-04">
      <a
        href="https://www.instagram.com/moment.cv/"
        target="blank"
        className="bg-[red]"
      >
        <img
          src="images/instagram.png"
          alt="instagram"
          height={25}
          width={25}
          className="shadow-lg shadow-[#256469] rounded-[10px]"
        />
      </a>
    </div>
  )
}

export default SocialMedia
