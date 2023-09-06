import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomUserPlanTabel from "../../Components/Custom/CustomUserPlanTable";
import { couponTableBody, couponTableHead } from "../../Constants/CouponsConstant";


const Coupons = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#1C1C1E" w="100%">
      <Button
        onClick={() => navigate("/Coupons/add_coupon")}
        bg="#07BA36"
        color="white"
        fontSize="15px"
        p="20px"
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add Add
        Coupon
      </Button>

      <CustomUserPlanTabel
        tableHead={couponTableHead}
        tableBody={couponTableBody}
        page={"Coupons"}
      />
    </Box>
  );
};

export default Coupons;
