import React from 'react'
import {
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';

const CustomUserForm = ({page}) => {
  return (
    <>
      <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" color="white" textTransform="inherit" fontSize="15px">
          Name
        </Text>
        <Input
          type="text"
          w="50%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Enter Name"
        />
      </Flex>
      <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" color="white" textTransform="inherit" fontSize="15px">
          Email
        </Text>
        <Input
          type="text"
          w="50%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Enter Email"
        />
      </Flex>
      <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" color="white" textTransform="inherit" fontSize="15px">
          Password
        </Text>
        <Input
          type="text"
          w="50%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Enter Password"
        />
      </Flex>
      <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" color="white" textTransform="inherit" fontSize="15px">
          Phone
        </Text>
        <Input
          type="number"
          w="50%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Enter Phone"
        />
      </Flex>

      <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" fontSize="15px">
          Profile Image
        </Text>
        <Flex w="50%" flexDirection="column">
          <Select id='select' w="100%" h="40px" bg="#232629" border="none" color="white">
            <option value="">select</option>
            <option value="">url</option>
            <option value="">No</option>
          </Select>
          <Text color="grey" fontSize="10px">(Recommended Resolution : 1100X450)</Text>
        </Flex>
      </Flex>

    {page === "User" ? <>
    <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" fontSize="15px">
          Expiry Date
        </Text>
        <Input
          type="date"
          w="50%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="dd/mm/yyyy"
        />
      </Flex>
    </> : ""}

  {
    page === "Sub Admin"? <>
    <Flex mt="30px" gap="10px">
        <Text w="15%" px="20px" fontSize="15px">
          Admin Type
        </Text>
        <Flex w="50%" flexDirection="column">
          <Select id='select' w="100%" h="40px" bg="#232629" border="none" color="white">
            <option value="">select</option>
            <option value="">Admin</option>
            <option value="">Sub Admin</option>
          </Select>
          <Text fontSize="15px">Permission for Sub Admin</Text>
          <Text color="grey" fontSize="10px">(Language, Genres, Movies, TV Shows, Seasons, Episodes, Sports Category, Sports Video, Slider, Home Section)</Text>
        </Flex>
      </Flex>
    </>: <>
        <Flex mt="30px" gap="10px">
        <Text  w="15%" px="20px" fontSize="15px">
          Subscription Plan
        </Text>
        <Select id='select' w="50%" h="40px" bg="#232629" border="none" color="white">
          <option value="">select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </Select>
      </Flex>
    </>
  }
      <Flex mt="30px" gap="10px">
        <Text  w="15%" px="20px" fontSize="15px">
          Status
        </Text>
        <Select id='select' w="50%" h="40px" bg="#232629" border="none" color="white">
          <option value="">select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </Select>
      </Flex>
    </>
  )
}

export default CustomUserForm
