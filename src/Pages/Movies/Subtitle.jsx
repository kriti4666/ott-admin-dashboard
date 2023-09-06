import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Subtitle = ({ data, setData, handelChange }) => {
  return (
    <Box mt="30px" fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Subtitle
      </Text>
      <Text fontSize="10px">
        (Supported : vtt file URL only. You Can Convert Subtitles to Vtt Here)
      </Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Language 1
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Telugu"
          required
          name="subtitleLanguage1"
          value={data.subtitleLanguage1}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Subtitle URL 1
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp3"
          required
          name="subtitleUrl1"
          value={data.subtitleUrl1}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Language 2
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="English"
          required
          name="subtitleLanguage2"
          value={data.subtitleLanguage2}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Subtitle URL 2
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp3"
          required
          name="subtitleUrl2"
          value={data.subtitleUrl2}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Language 3
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Malayalam"
          required
          name="subtitleLanguage3"
          value={data.subtitleLanguage3}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Subtitle URL 3
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp3"
          required
          name="subtitleUrl3"
          value={data.subtitleUrl3}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Language 4
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Tamil"
          required
          name="subtitleLanguage4"
          value={data.subtitleLanguage4}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Subtitle URL 4
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp3"
          required
          name="subtitleUrl4"
          value={data.subtitleUrl4}
          onChange={handelChange}
        />
      </Flex>
    </Box>
  );
};

export default Subtitle;
