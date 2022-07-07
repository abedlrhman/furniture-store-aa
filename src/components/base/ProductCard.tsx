
type Props = {

    image: string;
    title: string;
    company: string;
    price: number;
    id?: number;

}

function ProductCard ( { image,
    title,
    company,
    price,
    id }: Props )
{
    return (
        <div className="px-5">
            <div className="h-52">
                <img src={ image } alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div>
                <div className="flex justify-between">
                    <p className="text-sm font-normal text-custombuedgray">{ title }</p>
                    <p className="text-sm font-light text-customgray">{ company }</p>
                </div>
                <div> <p className="text-lg font-semibold text-custombuedgray">${ price }</p> </div>
            </div>
        </div>
    )
}

export default ProductCard