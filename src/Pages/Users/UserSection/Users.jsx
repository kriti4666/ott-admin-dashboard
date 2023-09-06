import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UsertableBody, UsertableHead } from "../../../Constants/UserConstant";
import UserTable from "../../../Components/Custom/UserTabel";

const Users = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#1C1C1E" w="100%">
      <Flex justifyContent="space-between" pt="30px">
        <Flex px="20px" gap="20px" justifyContent="space-between">
          <Select
            bg="#232629"
            border="none"
            color="white"
            w="40%"
            placeholder="Filter By Plan"
          >
            <option>Hindi</option>
            <option>English</option>
          </Select>
          <Input w="40%" type="Text" placeholder="Search by Email/Name" />
          <Button
            onClick={() => navigate("/users/add_user")}
            bg="#07BA36"
            color="white"
            fontSize="15px"
            p="20px"
          >
            <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
            User
          </Button>
        </Flex>

        <Button
          onClick={() => navigate("")}
          bg="#4FC0D0"
          color="white"
          fontSize="15px"
          p="20px"
          mr="20px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span>
          Export User
        </Button>
      </Flex>

      <UserTable tableHead={UsertableHead} tableBody={UsertableBody} page={"User"}/>
    </Box>
  );
};

export default Users;
