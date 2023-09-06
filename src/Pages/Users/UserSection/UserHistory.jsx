import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import UserData from "./UserData";
import BackButton from "../../../Components/Custom/BackButton";

const UserHistory = () => {
  return (
    <>
      <BackButton page={"/users"} />
      <Flex gap="30px" mt="30px">
        <Flex
          borderRadius="lg"
          w={{ sm: "70%", md: "70%" }}
          height={{ sm: "fit-content", md: "230px" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#1C1C1E", "gray.900")}
          boxShadow={"2xl"}
          padding={6}
          fontStyle="Roboto"
        >
          <Box bg="#1C1C1E" w="30%">
            <Avatar
              objectFit="cover"
              size={"2xl"}
              w="154px"
              h="154px"
              boxShadow={"2xl"}
              rounded={"xl"}
              alt={"User Img"}
              src={
                "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              }
            />
          </Box>
          <Flex w="70%" justifyContent="space-between">
            <Stack color="white" alignItems="flex-start" p={1} pt={2}>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                User Name
              </Heading>
              <Text fontWeight={600} fontSize="15px" mt={2}>
                Email : name@*****@gmail.com
              </Text>
              <Text>Phone : +91 630****6584</Text>
              <Text mt={2}>Address:</Text>
            </Stack>
            <Button
              w="100px"
              fontSize={"sm"}
              rounded={"full"}
              color={"white"}
              bg={"#07BA36"}
              mt={4}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "#38A169",
              }}
              _focus={{
                bg: "#38A169",
              }}
            >
              Active
            </Button>
          </Flex>
        </Flex>

        {/* User Active state and current plan  */}

        <Box
          color="white"
          w="30%"
          height={{ sm: "fit-content", md: "230px" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#1C1C1E", "gray.900")}
          fontStyle="Roboto"
        >
          <Text m="15px" fontSize="18px">
            Subscription Plan
          </Text>
          <Box
            m="15px"
            bg="#393939"
            py="10px"
            pl="10px"
            boxShadow="xl"
            cursor="pointer"
          >
            <Flex gap="10px">
              <GoDotFill color="red" size="30px" />
              <Flex flexDirection="column">
                <Text fontSize="14px">Free Plan</Text>
                <Text fontSize="12px">Current Plan</Text>
              </Flex>
            </Flex>
            <Divider w="100%" my="15px" />
            <Flex gap="10px">
              <GoDotFill color="green" size="30px" />
              <Flex flexDirection="column">
                <Text>July, 01, 2023</Text>
                <Text fontSize="12px">Subscription Expire On </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* user Data table */}
      <br />
      <Box bg="#1C1C1E" w="100%">
        <Flex p="20px" gap="20px" justifyContent="space-between" pt="30px">
          <Flex gap="20px" justifyContent="space-between">
            <Select
              bg="#232629"
              border="none"
              color="white"
              placeholder="Filter By Plan"
            >
              <option>Hindi</option>
              <option>English</option>
            </Select>
            <Input
              type="text"
              bg="#141414"
              rounded="3xl"
              border="none"
              color="white"
              placeholder="Search by Email ID or Payment ID"
            />
            <Input
              type="date"
              bg="#141414"
              rounded="3xl"
              border="none"
              color="white"
              placeholder="dd/mm/yyyy"
            />
          </Flex>

          <Button
            // onClick={() => navigate("")}
            bg="#4FC0D0"
            color="white"
            fontSize="15px"
            px="20px"
            py="15px"
          >
            Export Transaction
          </Button>
        </Flex>

        <UserData />
      </Box>
    </>
  );
};

export default UserHistory;
