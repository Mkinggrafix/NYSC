import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import theme from "./theme";
import Nav from "./components/util/Nav";
import Footer from "./components/util/Footer";
import Login from "./components/Login";
import Boxes from "./components/Boxes";
import Guide from "./components/Guide";
import Info from "./components/Info";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
        <Box sx={{
          w: '80%',
          m: '30px auto',

          textAlign: 'center'
        }}>
          <Login />
          <Boxes />
          <Guide />
          <Info />
        </Box>
         
      <Footer />
    </ChakraProvider>
  )
}

export default App
