import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '425px',
    md: '550px',
    lg: '768px',
    xl: '1024px'
}

const theme = extendTheme({ breakpoints });

export default theme;