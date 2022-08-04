import { Box, Heading, Text, Image } from "@chakra-ui/react";
import graduate from '.././image/foreign-graduates.png';
import guides from '.././image/remitapayment.png';
import calendar from '.././image/calendar.png';
import faq from '.././image/faq.png';

const Guide = () => {
    const boxStyle = {
        display: 'flex',
        w: '100%',
        flexDir: 'column ',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        boxShadow: '1px 1px 2px #000',
        padding: '10px',
        h: '200px',
        borderRadius: '5px',
        transition: '.5s',
        _hover:{
            transform: 'scale(1.1)'
        }
    }

    const textStyle = {
        borderBottom: '1px dotted',
        pb: '5px',
        w: '100%',
        mb: '.5rem'
    }

  return (
    <Box sx={{
        mt: '40px'
    }}>
        <Heading sx={{
            fontSize: ['1.2rem', null, null, '1.5rem'],
            borderBottom: '2px dotted',
            mb: '40px',
            fontWeight: '500px',
            pb: '5px'
        }}>Guidelines</Heading>

        <Box sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, 'repeat(4, 1fr)'],
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            mt: '20px'
            }}>
            <a href="#">
                <Box sx={boxStyle}>
                    <Text sx={textStyle}>Foreign P.C.M Requirements</Text>
                    <Image src={graduate} />
                </Box>
            </a>

            <a href="#">
                <Box sx={boxStyle}>
                    <Text sx={textStyle}>Guidelines on Payment</Text>
                    <Image src={guides} />
                </Box>
            </a>

            <a href="#">
                <Box sx={boxStyle}>
                    <Text sx={textStyle}>Change of Date of Birth</Text>
                    <Image src={calendar} />
                </Box>
            </a>

            <a href="#">
                <Box sx={boxStyle}>
                    <Text sx={textStyle}>F.A.Qs</Text>
                    <Image src={faq} />
                </Box>
            </a>
        </Box>
    </Box>
  )
}

export default Guide