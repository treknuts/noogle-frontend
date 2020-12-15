import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, Center, Stack, Image } from "@chakra-ui/react";
import Search from "./Search.js";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <Stack>
          <Image src="logo.png" alt="Noogle" />
          <Search />
        </Stack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
