import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
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
        {/* <Flex w="60%" flexDirection="column">
          <Select
            id="select"
            w="100%"
            h="40px"
            bg="#232629"
            border="none"
            color="white"
            required
            name="thumbnailUrl1"
            // value={data.thumbnailUrl1}
            onChange={handelChange}
          >
            <option value=""></option>
            <option value="">Yes</option>
            <option value="">No</option>
          </Select>
          <Text fontSize="10px">(Recommended resolution : 800X350)</Text>
        </Flex> */}
        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="thumbnailUrl1"
            onChange={handelChange}
          />
  
          <Text fontSize="10px">(Recommended Resolution : 800X450)</Text>
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
            name="thumbnailUrl2"
            onChange={handelChange}
          />
  
          <Text fontSize="10px">(Recommended Resolution : 800X450)</Text>
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
            name="logUrl"
            onChange={handelChange}
          />
  
          <Text fontSize="10px">(Recommended Resolution : 800X450)</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Posters;
