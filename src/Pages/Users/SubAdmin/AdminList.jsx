import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../../../Components/Custom/UserTabel";
import { adminTableBody, adminTableHead } from "../../../Constants/SubAdminConstant";

const AdminList = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#1C1C1E" w="100%">
      <Flex px="20px" gap="20px">
        <Input w="30%" type="Text" placeholder="Search by Email/Name" />
        <Button
          onClick={() => navigate("/users/add_admin")}
          bg="#07BA36"
          color="white"
          fontSize="15px"
          p="20px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Add Admin
        </Button>
      </Flex>

      <UserTable tableHead={adminTableHead} tableBody={adminTableBody} page={"Sub Admin"}/>
    </Box>
  );
};

export default AdminList;
