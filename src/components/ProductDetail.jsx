

function ProductDetail({ product, onClose }) {
    if (!product) return null

    return (
        <div className="fixed inset-0 bg-black z-50 overflow-auto">

            <button
                onClick={onClose}
                className="fixed top-4 right-4  text-white/60"         >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="max-w-2xl mx-auto ">

                <div className="aspect-square">
                    <img
                        src={product.images?.[0] || 'https://placehold.co/600x600/333/fff'}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://placehold.co/600x600/333/fff?text=No+Image'
                        }}
                    />
                </div>


                <h1 className="text-white text-2xl "></h1>

                <p className="text-emerald-400 "></p>

                <p className="text-white/60 ">

                </p>


                {product.category && (
                    <div className="mt-6  ">
                        <span className="text-white/60 text-xs"></span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
