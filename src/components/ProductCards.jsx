const ProductCards = ({ url, alt, title, text, price }) => {
  return (
    <div className="flex justify-center bg-slate-50 min-h-[130px] flex-nowrap p-2 border-y border-black">
      <div className="flex mx-2">
        <div className="flex-column grow break-words">
          <h3 className="text-[16px] text-center">{title}</h3>
          <p className="text-center text-[red]">{price}</p>
          <p className="text-[10px] ">{text}</p>
          <div className="flex justify-center gap-20">
            <div></div>
            <button className="text-[10px] border-b">...</button>
          </div>
        </div>

        <div className="min-w-[180px] h-full items-start flex pl-2">
          <img
            src={url}
            alt={alt}
            width={180}
            height={130}
            className="rounded shrink-0"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCards
