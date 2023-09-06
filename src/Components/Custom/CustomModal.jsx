import React from "react";
import {
  Box,
  Button,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";

const CustomModal = ({
  category,
  SeletctType,
  isOpen,
  onClose,
  data,
  setData,
  type,
  handelFormSubmit,
}) => {
  const addLanguage = useSelector(
    ({ addLanguagesReducer }) => addLanguagesReducer
  );

  const handleModelForm = ({ target }) => {
    const { name, value } = target;
    if (name === "isactive") {
      const boolValue = value === "true" ? true : false;
      setData({ ...data, [name]: boolValue });
    } else if (name === "image") {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // console.log(
          //   "image: ",
          //   e.target.result.split(",")[1],
          //   typeof e.target.result.split(",")[1]
          // );

          setData({
            ...data,
            [name]: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  return (
    <Box bg="#1C1C1E" w="100%" borderRadius="5px">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody bg="#1C1C1E">
            <Box bg="#1C1C1E" color="white" w="100%" borderRadius="5px">
              {category === "Language Title" || category === "Genre Title" ? (
                <>
                  <Flex mt="30px">
                    <Text
                      w="30%"
                      color="white"
                      textTransform="inherit"
                      fontSize="15px"
                    >
                      {category}
                    </Text>
                    <Input
                      type="text"
                      w="60%"
                      h="40px"
                      border="0px"
                      bg="#232629"
                      placeholder=""
                      name="name"
                      value={data.name}
                      onChange={handleModelForm}
                    />
                  </Flex>
                </>
              ) : (
                <>
                  <Flex mt="30px">
                    <Text
                      w="30%"
                      color="white"
                      textTransform="inherit"
                      fontSize="15px"
                    >
                      {category}
                    </Text>
                    <Input
                      type="text"
                      w="60%"
                      h="40px"
                      border="0px"
                      bg="#232629"
                      placeholder=""
                      name="fullname"
                      value={data.fullname}
                      onChange={handleModelForm}
                    />
                  </Flex>
                </>
              )}

              {SeletctType ? (
                <>
                  <Flex mt="30px">
                    <Text w="30%" fontSize="15px">
                      {SeletctType}
                    </Text>
                    <Flex w="60%" flexDirection="column">
                      <Input
                        type="file"
                        accept="image/*"
                        w="100%"
                        h="40px"
                        border="0px"
                        bg="#232629"
                        placeholder="www.youtube.com/movie/trailerdemo"
                        name="image"
                        onChange={handleModelForm}
                      />
                      <Text fontSize="10px">
                        (Recommended Resolution : 180X140)
                      </Text>
                    </Flex>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex mt="30px">
                    <Text w="30%" fontSize="15px">
                      status
                    </Text>
                    <Select
                      w="60%"
                      h="40px"
                      id="select"
                      bg="#232629"
                      border="none"
                      color="white"
                      name="isactive"
                      value={data.isactive}
                      onChange={handleModelForm}
                    >
                      <option>select</option>
                      <option value="true">Active</option>
                      <option value="false">InActive</option>
                    </Select>
                  </Flex>
                </>
              )}
            </Box>
          </ModalBody>

          <ModalFooter bg="#1C1C1E">
            {addLanguage.loading ? (
              <Button
                isLoading
                colorScheme="green"
                spinner={<BsThreeDots size={8} color="white" />}
              >
                Click me
              </Button>
            ) : (
              <Button
                bg="#E50813"
                color="white"
                _hover={{ color: "#E50813", bg: "white" }}
                mr={3}
                onClick={
                  type === "Edit"
                    ? () => handelFormSubmit(data.id)
                    : handelFormSubmit
                }
              >
                Save
              </Button>
            )}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CustomModal;
