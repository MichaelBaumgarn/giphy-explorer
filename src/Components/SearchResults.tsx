import {
  Box,
  Center,
  Container,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import * as React from "react";
import { Giphy } from "./types";

interface SearchListProlps {
  list: Giphy[];
}
export const SearchResults = ({ list }: SearchListProlps) => {
  if (!list) return null;

  return (
    <Container p="8" m="8">
      <Box>
        <Text>SearchResults</Text>
      </Box>
      <SimpleGrid columns={3} maxW="90%" justifyItems="center">
        {list.map((l) => (
          <Box key={l.title} maxWidth="200" maxHeight="200">
            <Image
              alt={l.title}
              src={l.images.downsized.url}
              maxBlockSize={150}
            ></Image>
            <p>{l.title}</p>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
