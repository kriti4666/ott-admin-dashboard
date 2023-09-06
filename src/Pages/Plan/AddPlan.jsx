import React from "react";
import { Box, Button, Checkbox, Flex, Input, Select, Stack, Text } from "@chakra-ui/react";
import BackButton from "../../Components/Custom/BackButton";

const AddPlan = () => {
  return (
    <Box bg="#1C1C1E" color="white" w="100%" borderRadius="5px" p="20px">
    <BackButton page={"/subscription_plan"}/>
    <Flex mt="30px">
      <Text w="30%" color="white" textTransform="inherit" fontSize="15px">
        Plan Name
      </Text>
      <Input
        type="text"
        w="60%"
        h="40px"
        border="0px"
        bg="#232629"
        placeholder=""
      />
    </Flex>

    <Flex mt="30px">
      <Text w="30%" fontSize="15px">
        Duration
      </Text>
      <Flex w="60%" flexDirection="row" gap="30px">
      <Input
        type="text"
        w="60%"
        h="40px"
        border="0px"
        bg="#232629"
        placeholder=""
      />
        <Select id="select" w="100%" h="40px" bg="#232629" border="none" color="white">
          <option value="">Days(s)</option>
          <option value="">document/Technician/technicianName</option>
          <option value="">No</option>
        </Select>
      </Flex>
    </Flex>

    <Flex mt="30px">
      <Text w="30%" fontSize="15px">
        Price
      </Text>
      <Input
        type="text"
        w="60%"
        h="40px"
        border="0px"
        bg="#232629"
        placeholder="149.00"
      />
    </Flex>

    <Flex mt="30px">
        <Text w="30%" fontSize="15px">Device Access</Text>
      <Stack spacing={[1, 4]} direction={["column", "row"]}>
        <Checkbox size="lg" colorScheme="green">
          Mobile Device
        </Checkbox>
        <Checkbox size="lg" colorScheme="green" >
          Large Device (Systems)
        </Checkbox>
        <Checkbox size="lg" colorScheme="green">
          TV's
        </Checkbox>
       
      </Stack>
    </Flex>

    <Flex mt="30px">
      <Text w="30%" fontSize="15px">
        status
      </Text>
      <Select id="select" w="60%" h="40px" bg="#232629" border="none" color="white">
        <option >select</option>
        <option value="">Active</option>
        <option value="">InActive</option>
      </Select>
    </Flex>
    <Button
            bg="#E50813"
            color="white"
            _hover={{ color: "#E50813", bg: "white" }}
            ml="30%"
            mt="40px"

          >
            Save
          </Button>
  </Box>
  );
};

export default AddPlan;
