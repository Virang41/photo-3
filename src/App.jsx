import { useState } from 'react'
import useFetch from './hooks/useFetch'
import ProductGrid from './components/ProductGrid'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import LoadingScreen from './components/LoadingScreen'
import NetworkError from './components/NetworkError'

// API endpoint for products
const API_URL = 'https://api.escuelajs.co/api/v1/products'

function App() {
    // use our custom useFetch hook to get products
    const { data: products, loading, error, refetch } = useFetch(API_URL)

    // state for loading and error screens
    const [showLoading, setShowLoading] = useState(false)
    const [showNetworkError, setShowNetworkError] = useState(false)

    // handle product click - show loading screen
    const handleProductClick = async (product) => {
        setShowLoading(true)
        setShowNetworkError(false)

        try {
            // try to fetch product - if network off, will throw error
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${product.id}`)

            if (!response.ok) {
                throw new Error('Network error')
            }

            // keep showing loading screen forever (as user requested)
            // loading screen will stay visible

        } catch (err) {
            // network error - show error screen
            setShowLoading(false)
            setShowNetworkError(true)
        }
    }

    return (
        <div className="min-h-screen bg-black font-poppins">
            {/* Loading Screen - sirf text */}
            {showLoading && <LoadingScreen />}

            {/* Network Error Screen - sirf text */}
            {showNetworkError && <NetworkError />}

            {/* header */}
            <header className="py-6 text-center">
                <h1 className="text-2xl font-normal text-white">
                    Photos
                </h1>
            </header>

            {/* main content area */}
            <main className="px-4 pb-8">
                {/* show loading spinner while fetching initial data */}
                {loading && <LoadingSpinner />}

                {/* show error if there is one */}
                {error && !loading && (
                    <ErrorMessage message={error} onRetry={refetch} />
                )}

                {/* show products grid when data is loaded */}
                {!loading && !error && products && (
                    <ProductGrid products={products} onProductClick={handleProductClick} />
                )}
            </main>
        </div>
    )
}

export default App
