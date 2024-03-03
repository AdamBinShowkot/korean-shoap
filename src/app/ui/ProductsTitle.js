import Link from "next/link";

const ProductsTitle=({data})=>{
    return(
        <Link
        href={`${data?.slug?`/products/${data?.slug}`:'/products/page=1&per_page=10'}`}
        className="products-link-href"
        >
            <span>
                <b>
                    {data?.name?data.name:`Neogen Dermalogy Black 
                    Energy Cream 80ml`}
                </b>
            </span>
        </Link>
    )
}
export default ProductsTitle;