import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const SessionSeo = ({data, handelChange}) => {
  return (
    <Box mt="30px" fontStyle="Roboto" fontWeight={600}>
      <Text fontSize="20px">SEO</Text>
      <Text fontSize="10px"></Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          SEO title
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder=""
          name="seoTitle"
          value={data.seoTitle}
          onChange={handelChange}
        />
      </Flex>
      {/* <Text fontSize="10px">
      </Text> */}
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Meta Description
        </Text>
        <Input
          type="text"
          w="60%"
          h="90px"
          border="0px"
          bg="#232629"
          placeholder=""
          name="seoDescription"
          value={data.seoDescription}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Keywords
        </Text>
        <Flex w="60%" flexDirection="column">
          <Input
            type="text"
            w="100%"
            h="90px"
            border="0px"
            bg="#232629"
            placeholder=""
            name="keyword"
            value={data.keyword}
            onChange={handelChange}
          />
          <Text fontSize="10px">Use Comma (,) to separate keyword.</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SessionSeo;
