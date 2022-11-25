import { Box, Spinner } from 'native-base';
import React from 'react';
import { colorTheme } from '../../App'

interface LoaderProps {
    isLoading: boolean
}

const Loader = ({
    isLoading = false
}: LoaderProps) => {

    return (
        <Box display={isLoading ? 'flex' : 'none'} backgroundColor='F4FAFF' alignItems={'center'} justifyContent='center' alignContent={'center'} style={{width:"100%", height:"100%"}}>
            <Spinner  size={30} color={colorTheme.primary[900]} />
        </Box>
    )
}

export default Loader;