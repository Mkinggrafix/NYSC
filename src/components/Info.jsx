import { Box, Text, Heading } from "@chakra-ui/react";

const Info = () => {
    const boxStyle = {
        display: 'flex',
        w: '100%',
        h: '100px',
        bg: '#ffffffeb',
        color: '#000',
        flexDir: 'column ',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        boxShadow: '1px 1px 2px',
        padding: '10px',
        borderRadius: '5px',
        transition: '.5s',
        _hover:{
            transform: 'scale(1.1)'
        }
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
        }}>Important Information</Heading>

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
                        <Text>Check Senate List or its equivalents</Text>
                    </Box>
                </a>

                <a href="#">
                    <Box sx={boxStyle}>
                        <Text>Biometric Instructions</Text>
                    </Box>
                </a>

                <a href="#">
                    <Box sx={boxStyle}>
                        <Text>Accredited Institutions/Programmes</Text>
                    </Box>
                </a>

                <a href="#">
                    <Box sx={boxStyle}>
                        <Text>View Graduation List</Text>
                    </Box>
                </a>
        </Box>
    </Box>
  )
}

export default Info