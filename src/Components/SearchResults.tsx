import {
  Box,
  Image,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import * as React from "react";
import { Giphy } from "./types";

interface SearchListProlps {
  list: Giphy[];
}
export const SearchResults = ({ list }: SearchListProlps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGif, setSelectedGif] = React.useState<Giphy>(list[0]);
  React.useEffect(() => {
    setSelectedGif(list[0]);
  }, [list[0]]);
  if (!list || list.length == 0) return null;

  return (
    <>
      <GifModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        selectedGif={selectedGif}
      ></GifModal>
      <SimpleGrid columns={3} maxW="90%" justifyItems="center" gridGap={16}>
        {list.map((l) => (
          <Box
            key={l.title}
            maxWidth="200"
            maxHeight="200"
            onClick={() => {
              setSelectedGif(l);
              onOpen();
            }}
          >
            <Image
              alt={l.title}
              src={l.images.downsized_still.url}
              maxBlockSize={150}
            ></Image>
            <p>{l.title}</p>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

interface ModalProps {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  selectedGif: Giphy;
}

function GifModal({ onOpen, isOpen, onClose, selectedGif }: ModalProps) {
  console.log(selectedGif);
  if (!selectedGif) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth={600}>
        <ModalHeader>{selectedGif.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={16}>
          <SimpleGrid minChildWidth={200} gridGap={8} justifyItems="center">
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.hd?.url}
            />
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.looping.url}
            />
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.original.url}
            />
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.original_mp4.url}
            />
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.preview_gif.url}
            />
            <ModalImage
              selectedGif={selectedGif}
              src={selectedGif.images.preview_webp.url}
            />
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const ModalImage = ({
  selectedGif,
  src,
}: {
  selectedGif: Giphy;
  src: string;
}) => {
  console.log(src);

  if (!selectedGif || !src) return null;
  return (
    <Box key={selectedGif.title} maxWidth="200" maxHeight="200">
      <Image alt={selectedGif.title} src={src} maxBlockSize={150}></Image>
    </Box>
  );
};
