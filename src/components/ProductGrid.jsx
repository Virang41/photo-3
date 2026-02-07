import ProductCard from './ProductCard'



function ProductGrid({ products, onProductClick }) {

    if (!products || products.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-white/60 text-lg">No</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onProductClick={onProductClick}
                />
            ))}
        </div>
    )
}

export default ProductGrid
