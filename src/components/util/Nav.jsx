import { Box , Text, Image, IconButton, useColorMode } from "@chakra-ui/react/";
import banner from '../../image/banner1.png';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const textStyle = {
        padding: '10px',
        transition: '.5s',
        borderBottom: ['1px solid', null, null, null, 'none'],
        fontSize:['1rem', null, null, null, '1rem'],

        _hover:{
            bg: '#1a7928e6',
            color: '#fff'
        }
    }

  return (
    <Box>
        <Box sx={{
            display: ['block', null, null, null, 'flex'],
            gap: '20px',
            bg: '#ffffffeb',
            color: '#000',
            padding: '10px 20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '3px solid #c70d0d',
        }}>
            <a href="/">
                <Image src={banner} />
            </a>

            <Box sx={{
                    display: 'flex',
                    flexDirection: ['column', null, null, null, 'row'],
                    gap: '10px',
                    listStyleType: 'none',
                    fontSize: ['1rem'],
                    m: '10px 0'
                }}>
                <a href="#"><Text sx={textStyle}>Home</Text></a>
                <a href="#"><Text sx={textStyle}>Payment Status</Text></a>
                <a href="#"><Text sx={textStyle}>Contact Us</Text></a>
            </Box>
        </Box>

        <Box sx={{
            bg: '#1a7928e6',
            color: '#fff',
            padding: '10px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text sx={{
                fontSize: ['1.2rem', null, null, '1.5rem'],
                fontWeight: 500               
            }}>Welcome to the NYSC Portal</Text>

            <IconButton sx={{
                bg: 'transparent',
                fontSize: ['1.2rem', null, null, '1.5rem']
            }} onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} />
        </Box>
    </Box>
  )
}

export default Nav