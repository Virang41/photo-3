
const boxColors = [
    '#8BC34A',
    '#9C27B0',
    '#4CAF50',
    '#E91E63',
    '#F48FB1',
    '#2196F3',
    '#A5D6A7',
    '#673AB7',
    '#80DEEA',
    '#8D6E63',
    '#00BCD4',
    '#03A9F4',
]

function ProductCard({ product, index, onProductClick }) {

    const bgColor = boxColors[index % boxColors.length]

    const handleClick = () => {
        if (onProductClick) {
            onProductClick(product)
        }
    }

    return (
        <div
            className="bg-black-900 border border-white/30 "
            onClick={handleClick}
        >

            <div
                className="aspect-square flex  justify-center"
                style={{ backgroundColor: bgColor }}
            >
                <span className="text-white/98 text-sm font-light">
                    600 x 700
                </span>
            </div>

            <div className="pt-3 ">
                <p className="text-white/70 text-xs ">
                    {product.title || 'accusamus '}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
