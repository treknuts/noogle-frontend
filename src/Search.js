import { useEffect, useState } from "react";
import { Center, Input, Button, Stack, Text, Box } from "@chakra-ui/react";
const axios = require("axios");

const Search = () => {
  const [search, setSearch] = useState("HTML");
  const [data, setData] = useState([]);

  useEffect(() => {}, [search]);

  const fetchData = (search) => {
    return axios
      .get("http://localhost:3000/search", {
        params: {
          query: search,
        },
      })
      .then((res) => res.data);
  };

  const searchQuery = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      console.log(value);
      setSearch(value);
      fetchData(value).then((res) => setData(res));
    }
  };

  return (
    <Center>
      <Stack spacing="10px">
        <Center>
          <Input
            placeholder="Happy Hacking!"
            w={["250px", "400px"]}
            h="50px"
            onKeyPress={searchQuery}
          ></Input>
        </Center>
        <Stack>
          <ul>
            {search &&
              data &&
              data.map((item) => {
                return (
                  <li>
                    <Box id={item.id} padding="4" bg="gray.100" maxW="3xl">
                      <Text>{item.title}</Text>
                      <a href={item.url}>{item.url}</a>
                    </Box>
                  </li>
                );
              })}
          </ul>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Search;
