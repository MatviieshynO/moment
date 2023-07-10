
const ProductCards = ({ url, title, text, price }) => {
    return (
        <div className="m-2 p-2 bg-slate-100">
            <img
                src={url}
                alt="product-images"
                className="object-cover h-58 rounded"
            />
            <div className="flex justify-between p-2 items-center border-b border-slate-600">
                <h2 className="text-center text-3xl font-bold  w-full">
                    {title}
                </h2>
                <p className="font-semibold text-base w-20 p-1 text-center border-2 border-slate-600 rounded">
                    {price} ₴
                </p>
            </div>
            <p className=" text-md text-center w-full">{text}</p>
        </div>
    )
}

export default ProductCards
