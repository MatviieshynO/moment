const ProductCards = ({ url, alt, title, text, price }) => {
  return (
    <div className="flex w-full h-[150px] bg-slate-50 p-1">
      <div className="flex p-2  overflow-hidden">
        <div className="flex-column items-center">
          <h3 className="text-[4.5vw] text-center">{title}</h3>
          <p className="text-[3vw]">{text}</p>
          <button className="text-[10px] border-b">...</button>
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
