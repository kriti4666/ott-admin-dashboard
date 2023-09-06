import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const BackButton = ({page}) => {
    const navigate = useNavigate();
  return (
    <>
      <Flex
        color="#E50813"
        p="15px"
        fontStyle="Roboto"
        fontSize="20px"
        fontWeight={600}
      >
        <GoChevronLeft style={{ marginTop: "5px" }} />
        <Text cursor="pointer" onClick={() => navigate(page)}>
          {" "}
          BACK
        </Text>
      </Flex>
      <Divider w="98%" m="auto" />
    </>
  );
};

export default BackButton;
