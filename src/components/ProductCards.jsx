import { MdOutlineExpandMore } from 'react-icons/md'
const ProductCards = ({ url, alt, title, text, price }) => {
  return (
    <div className="flex w-full h-[150px] bg-slate-50 p-1">
      <div className="flex p-2  overflow-hidden justify-center items-center content-center">
        <div className="flex-column items-center pr-4">
          <h3 className="text-[4.5vw] text-center">{title}</h3>
          <p className="text-[3vw]  flex w-[150px]">{text}</p>
          <div className="text-[25px] flex justify-center">
            <MdOutlineExpandMore />
          </div>
        </div>
        <div className="flex-column">
          <img
            src={url}
            alt={alt}
            width={240}
            height={200}
            className="rounded shrink-0"
          />
          <p className="text-center text-[red]">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCards
