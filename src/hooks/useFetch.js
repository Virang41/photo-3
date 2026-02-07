import { useState, useEffect, useCallback } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        if (!url) {
            setLoading(false)
            return
        }

        try {
            setLoading(true)
            setError(null)

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const jsonData = await response.json()
            setData(jsonData)
        } catch (err) {
            setError(err.message || 'Something went wrongng data')
            setData(null)
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const refetch = useCallback(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error, refetch }
}

export default useFetch
