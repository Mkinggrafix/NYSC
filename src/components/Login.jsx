import { Box , Text, Image,  Tooltip } from "@chakra-ui/react";
import loginImg from './../image/login.png';

const Login = () => {
    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        borderRadius: '5px',
        p: '40px 0',
        boxShadow: '1px 1px 2px #000'
    }
  return (
    <Box>
        <Box sx={{
            display: 'flex',
            flexDir: ['column', null, null, 'row'],
            justifyContent: 'space-between',
            gap: '50px',
            mb: '40px'
            }}>
            <Box flex={2} sx={boxStyle}>
                <Text>No Active Registration</Text>
            </Box>

            <Box alignSelf={'center'}>
                <a href="#">
                    <Text ml={'5px'}>Login Here</Text>
                    <Image w={'100px'} src={loginImg} />
                </a>
            </Box>
        </Box>

        <Box sx={boxStyle} flexDir={'column'} mb={'100px'}>
            <Text sx={{
                color: '#c70d0d',
                fontSize: ['1.2rem', null, null, '1.5rem'],
                mb: '5px'
            }}>New: Online Application for Remobilization!!</Text>
            <Tooltip hasArrow label='This is for the Corps Members who have absconded from service and the state has not taken appropirate action. The completion of this application form shows that you are ready to come back and complete your service after you have refunded the NYSC. Afterwards, you will then be able to Remob into the current batch when opened'>
                <Text><a href="#">Click here to Apply for Remobilisation</a></Text>
            </Tooltip>
        </Box>
    </Box>
  )
}

export default Login