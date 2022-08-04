import React, { useRef, useState } from 'react';
import { useAuth } from './context/AuthContext';
import { 
    Stack, 
    Heading, 
    Input,
    InputGroup,
    InputRightAddon, 
    FormControl,
    FormLabel,
    Button,
    Text,
    Box 
} from '@chakra-ui/react';

const Signup = () => {
    const [show, setShow] = useState(false);
    const emailRef  = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    function handleSubmit(e) {
        e.preventDefault;

        signup(emailReft.current.value, passwordRef.current.value)
    }

  return (
    <Stack spacing={5} sx={{
        p: '70px 0',
        maxW: '400px',
        m: '0 auto'
    }}>
        <Box sx={{
            border: '1px solid',
            borderRadius: '10px',
            p: '20px'
        }}>
            <Heading sx={{
                textAlign: 'center',
                mb: '25px'
            }}>Sign Up</Heading>

            <form action="">
                <Stack spacing={5}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input variant='outline' type={'email'} ref={emailRef} required />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input variant='outline' type={show ? 'text' : 'password'} ref={passwordRef} required />
                                <InputRightAddon 
                                    onClick={() => setShow(!show)}
                                    children={'show'} 
                                    sx={{ cursor: 'pointer' }} 
                                />
                            </InputGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password Confirmation</FormLabel>
                        <InputGroup>
                            <Input variant='outline' type={show ? 'text' : 'password'} />
                            <InputRightAddon 
                                onClick={() => setShow(!show)}
                                children={'show'} 
                                sx={{ cursor: 'pointer' }} 
                            />
                        </InputGroup>
                    </FormControl>

                    <Button type='submit' sx={{
                        bg: 'blue.500',
                        w: '100%',
                        mt: '10px'
                    }}>Sign Up</Button>
                </Stack>
            </form>
        </Box>

        <Text sx={{
                textAlign: 'center'
            }}>Already have an account? Login In
        </Text>
        
    </Stack>
  )
}

export default Signup