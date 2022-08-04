import { Box, Image, Text } from "@chakra-ui/react";
import certificate from '.././image/verification.png';
import payment from '.././image/paymentstatus.png';
import mainsite from '.././image/mainsite.png';

const Boxes = () => {
    const boxStyle = {
        display: 'flex',
        w: '100%',
        flexDir: 'column ',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        boxShadow: '1px 1px 2px #000',
        padding: '20px 10px',
        h: '200px',
        borderRadius: '5px',
        transition: '.5s',
        _hover:{
            transform: 'scale(1.1)'
        }
    }

    const textStyle = {
        w: '100%',
        bg: '#c70d0d',
        color: '#fff',
        p: '5px 0',
        borderRadius: '5px',
        m: '5px 0',
        fontWeight: '500'
    }

  return (
    <Box sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', null, null, '1fr 1fr', 'repeat(3, 1fr)'],
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }}>
        <a href="#">
            <Box sx={boxStyle}>
                <Image src={certificate} mb={'15px'} />
                <Text sx={textStyle}>Verify Certificates</Text>
                <Text>Discharge, Exclusion and Exemption</Text>
            </Box>
        </a>

        <a href="#">
            <Box sx={boxStyle}>
                <Image src={payment} mb={'15px'} />
                <Text sx={textStyle}>Payment Status</Text>
                <Text>To check your Payment Status</Text>
            </Box>
        </a>

        <a href="#">
            <Box sx={boxStyle}> 
                <Image src={mainsite} mb={'15px'} />
                <Text sx={textStyle}>Visit the Main Site</Text>
                <Text>Visit NYSC website for information and updates</Text>
            </Box>
        </a>
    </Box>
  )
}

export default Boxes