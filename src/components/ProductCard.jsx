import { Ripple, initTE } from 'tw-elements'
import { useEffect } from 'react'

const ProductCard = ({ url, title, text, price }) => {
  useEffect(() => {
    initTE({ Ripple })
  }, [])
  return (
    <div className="flex w-full pt-2 mx-auto justify-between bg-white dark:bg-neutral-700 ">
      <div className="p-2 w-full">
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <span className="text-[12px]">
          {' '}
          Ціна : <span className="text-[green] text-sm">{price} ₴</span>{' '}
        </span>
        <p className="text-[10px] text-neutral-600 dark:text-neutral-200">
          {text}
        </p>
      </div>
      <div
        className=" overflow-hidden bg-cover bg-no-repeat w-[50%] h-full  "
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img className="h-full w-full rounded-[2px] p-2" src={url} alt="" />
      </div>
    </div>
  )
}

export default ProductCard
