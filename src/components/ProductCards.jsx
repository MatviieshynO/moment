import { MdOutlineExpandMore } from 'react-icons/md'
const ProductCards = ({ url, title, text, price }) => {
    return (
        <div className="m-2 p-2 bg-slate-100 rounded">
            <img
                src={url}
                alt="product-images"
                className="object-cover h-58 rounded"
            />
            {/* <p className="font-semibold text-xl text-center w-full">{price}</p> */}
            <h2 className="text-center text-2xl font-semibold">{title}</h2>
            <p className=" text-md text-center w-full">{text}</p>
        </div>
    )
}

export default ProductCards
