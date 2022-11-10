import React, { useState } from 'react';
import Loader from '../Components/loader';



interface ProviderProps {
    isLoading: boolean
    showLoading: () => void
    hideLoading: () => void
}

interface LoadingProviderProps {
    children: any
    loading?: ProviderProps
}

const LoadingContext = React.createContext<ProviderProps>({
    isLoading: false,
    showLoading: () => {},
    hideLoading: () => {}
})

export const LoadingProvider = ({children, loading}: LoadingProviderProps) => {
    const [isLoading, setLoading] = useState(loading?.isLoading)

    const showLoading = () => setLoading(true)
    const hideLoading = () => setLoading(false)

    return (
        <LoadingContext.Provider value={{ isLoading: !!isLoading, showLoading, hideLoading }}>
            {children}
            <Loader isLoading={!!isLoading} />
        </LoadingContext.Provider>
    )
}

export const useLoading = () => React.useContext(LoadingContext)