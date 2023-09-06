import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import BackButton from "../../../Components/Custom/BackButton";
import Multiselect from "multiselect-react-dropdown";

const AddSection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [removedOptions, setRemovedOptions] = useState([]);

  const onSelectOptions = (selectedList, selectedItem) => {
    setSelectedOptions([...selectedOptions, selectedItem]);
  };
  const onRemoveOptions = (selectedList, removedItem) => {
    setRemovedOptions([...removedOptions, removedItem]);
  };

  const options = [
    // {
    //   value: "Fast & Furious",
    //   label: "Fast & Furious",
    // },
    { name: "Fast & Furious", id: 1 },
    { name: "Family Man", id: 2 },
    { name: "Avatar2", id: 3 },
    { name: "Dhrishim", id: 4 },
    { name: "Aadipursuh", id: 5 },
  ];

  const multiselectStyles = {
    chips: {
      background: "red", // Customize the background color of selected chips
      color: "white", // Customize the text color of selected chips
    },
    searchBox: {
      border: "1px solid red", // Customize the border of the search box
      borderRadius: "5px", // Customize the border radius of the search box
    },
    optionContainer: {
    background: "#1C1C1E",
      borderRadius: "5px", // Customize the border radius of the options container
    },
    option: {
      color: "red", // Customize the text color of the options
      matginTop: "10px",
    },
  };

  return (
    <Box bg="#1C1C1E" color="white" w="100%" borderRadius="5px" p="20px">
      <BackButton page={"/home/home_section"} />
      <Flex mt="30px">
        <Text w="30%" color="white" textTransform="inherit" fontSize="15px">
          Home Section Title
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
          Type
        </Text>
        <Flex w="60%" flexDirection="column">
          <Select w="100%" h="40px" bg="#232629" border="none" color="white">
            <option value="">select</option>
            <option value="">document/Technician/technicianName</option>
            <option value="">No</option>
          </Select>
          <Text fontSize="10px">(Recommended Resolution : 180X140)</Text>
        </Flex>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          type
        </Text>
        <Select w="60%" h="40px" bg="#232629" border="none" color="white">
          <option value="">select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </Select>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movies
        </Text>

        <Multiselect
          options={options}
          name="particulars"
          onSelect={onSelectOptions}
          onRemove={onRemoveOptions}
          displayValue="name"
          closeIcon="cancel"
          placeholder="Select Options"
          selectedValues={selectedOptions}
          style={multiselectStyles}
        />
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Display On
        </Text>
        <RadioGroup defaultValue="1">
          <Stack spacing={4} direction="row">
            <Radio colorScheme="green" value="1">
              Show Poster Vertical
            </Radio>
            <Radio colorScheme="green" value="2">
              Show Poster Horizontal
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          status
        </Text>
        <Select w="60%" h="40px" bg="#232629" border="none" color="white">
          <option value="">select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </Select>
      </Flex>
      <Button
        bg="#E50813"
        color="white"
        _hover={{ color: "#E50813", bg: "white" }}
        mt="40px"
        ml="30%"
      >
        Save
      </Button>
    </Box>
  );
};

export default AddSection;
