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
        <Box display={isLoading ? 'flex' : 'none'} position={'absolute'} left={0} top={0} bottom={0} right={0} backgroundColor='rgba(0,0,0,0.8)' alignItems={'center'} justifyContent='center' zIndex={100}>
            <Spinner  size={30} color={colorTheme.primary[500]} />
        </Box>
    )
}

export default Loader;