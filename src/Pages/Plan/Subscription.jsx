import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomUserPlanTabel from "../../Components/Custom/CustomUserPlanTable";
import { planTableBody, planTableHead } from "../../Constants/PlanConstant";


const Subscription = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#1C1C1E" w="100%">
      <Button
        onClick={() => navigate("/subscription_plan/add_plan")}
        bg="#07BA36"
        color="white"
        fontSize="15px"
        p="20px"
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add Add
        Plan
      </Button>

      <CustomUserPlanTabel
        tableHead={planTableHead}
        tableBody={planTableBody}
        page={"Subscription Plan"}
      />
    </Box>
  );
};

export default Subscription;
