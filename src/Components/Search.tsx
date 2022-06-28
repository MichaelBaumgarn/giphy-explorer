import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface SearchProps {
  onSubmit: (q: string) => void;
}

export const Search = ({ onSubmit }: SearchProps) => {
  const [search, setSearch] = useState("");
  return (
    <Box my={8}>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit(search);
            setSearch("");
          }
        }}
      ></Input>
      <Button
        my={4}
        onClick={() => {
          onSubmit(search);
          setSearch("");
        }}
      >
        Search for {search}
      </Button>
    </Box>
  );
};
