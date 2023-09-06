import React, { useEffect } from "react";
import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getShowsList } from "../../../redux/admin/action";

const SessionInfo = ({ data, setData, handelChange }) => {
  const dispatch = useDispatch();
  const showData = useSelector(({ showListReducer }) => showListReducer);

  useEffect(() => {
    dispatch(getShowsList());
  }, []);

  return (
    <Box fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Session Info & Poster
      </Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Show
        </Text>
        <Flex w="60%" flexDirection="column">
          <Select
            id="select"
            w="100%"
            h="40px"
            bg="#232629"
            border="none"
            color="white"
            name="showName"
            value={data.showName}
            onChange={handelChange}
          >
            <option value="">select</option>
            {showData.data?.map((show) => (
              <option value={show.title}>{show.title}</option>
            ))}
          </Select>
          <Text fontSize="10px">(Recommended resolution : 800X450)</Text>
        </Flex>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Session Title*
        </Text>
        <Input
          type="text"
          w="60%"
          h="90px"
          border="0px"
          bg="#232629"
          placeholder=""
          name="title"
          value={data.title}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          session Poster
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
            name="posterUrl"
            onChange={handelChange}
          />
  
          <Text fontSize="10px">(Recommended Resolution : 800X450)</Text>
        </Flex>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Trailer URL
        </Text>
        <Flex w="60%" flexDirection="column">
          <Input
            type="text"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="www.youtube.com/movie/trailerdemo"
            name="trailerUrl"
            value={data.trailerUrl}
            onChange={handelChange}
          />

          <Text fontSize="10px">(Supported : MP4)</Text>
        </Flex>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Status
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="isActive"
          value={data.isActive}
          onChange={handelChange}
        >
          <option>select</option>
          <option value="true">Active</option>
          <option value="false">inActive</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default SessionInfo;
