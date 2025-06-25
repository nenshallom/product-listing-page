// nextjs optimized Images component
import Image from 'next/image';

interface ProductsProps {
    product: {
        id: number;
        name: string; 
        price: number;
        image: string;
        category: string;
        store: string;
        storeLogo: string;
        unit?: string;
    };
}

export default function ProductCard({ product }: ProductsProps) {
    return (
        <div className="product-card">
            <Image 
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
            />
            <h2>{product.name}</h2>
            <div className='store-info'>
                <Image 
                    src={product.storeLogo}
                    alt={product.store}
                    width={15}
                    height={15}
                    className='store-logo'
                />
                <p>{product.store}</p>
            </div>
       
            <p>
                ${product.price} {product.unit ? ` / ${product.unit}` : ""}
            </p>
        </div>
    )
}

