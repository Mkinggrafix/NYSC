import { Box , Text } from "@chakra-ui/react/";

const Footer = () => {
  return (
    <Box sx={{
        display: ['grid', null, null, null, 'flex'],
        gap: '5px',
        justifyContent: 'space-around',
        textAlign: 'center',
        width: '100%',
        bg: '#1a7928e6',
        padding: '25px 0',
        color: '#fff',
        fontSize: '.9rem',
        borderTop: '3px solid #c70d0d'
    }}>
        <Text><a href='#'>Powered by SIDMACH</a></Text>
        
        <Box sx={{
            display: ['grid', null, null, null, 'flex'],
            gap: '5px'
        }}>
            <Text>Copyright © 2022 National Youth Service Corps</Text>
            <Text>All rights reserved. | <a href='#'>Privacy Policy</a></Text>
        </Box>
    </Box>
  )
}

export default Footer