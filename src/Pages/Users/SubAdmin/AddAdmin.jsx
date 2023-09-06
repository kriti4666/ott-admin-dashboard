import {
    Box,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import BackButton from "../../../Components/Custom/BackButton";
  import CustomUserForm from "../../../Components/Custom/CustomUserForm";
  
  const AddAdmin = () => {
    return (
      <Box bg="#1C1C1E" color="white" w="100%" borderRadius="5px" p="20px">
        <BackButton page={"/users/sub_Admin"} />
        <CustomUserForm page={"Sub Admin"}/>
        <Button
          bg="#E50813"
          color="white"
          _hover={{ color: "#E50813", bg: "white" }}
          ml="15%"
          mt="40px"
        >
          Save
        </Button>
      </Box>
    );
  };
  
  export default AddAdmin;
  
