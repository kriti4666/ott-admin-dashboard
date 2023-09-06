import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Posters = ({ data, handelChange }) => {
  return (
    <Box mt="30px" fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Posters
      </Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Thumbnail 1*
        </Text>

        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="movieThumbnail1"
            onChange={handelChange}
          />

          <Text fontSize="10px">(Recommended resolution : 270X390)</Text>
        </Flex>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Thumbnail 2*
        </Text>
        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="movieThumbnail2"
            onChange={handelChange}
          />

          <Text fontSize="10px">(Recommended resolution : 390X270)</Text>
        </Flex>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Poster
        </Text>

        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="posterUrl"
            onChange={handelChange}
          />

          <Text fontSize="10px">(Recommended Resolution : 800X450)</Text>
        </Flex>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Logo
        </Text>

        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="movieLogo"
            onChange={handelChange}
          />

          <Text fontSize="10px">(Recommended resolution : 800X450)</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Posters;
