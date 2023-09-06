import {
  Box,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const VideoAudio = ({ data, handelChange, handleRadioChange }) => {
  return (
    <Box fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Video, Audio & subtitle
      </Text>
      <Flex mt="30px">
        <Flex w="30%" flexDirection="column">
          <Text fontSize="15px">Trailer URL</Text>
          <Text fontSize="10px">(Supported : MP4)</Text>
        </Flex>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Movie Url"
          required
          name="trailerUrl"
          value={data.trailerUrl}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Flex w="30%" flexDirection="column" gap="10px">
          <Text fontSize="15px">Video Quality</Text>
          <Text fontSize="10px">(Supported : MP4,MOV,MKV,WEBM)</Text>
        </Flex>
        <RadioGroup
          defaultValue="1"
          name="videoQuality"
          onChange={(value) => handleRadioChange("videoQuality", value)}
        >
          <Stack spacing={4} direction="row">
            <Radio colorScheme="green" value="true">
              Active
            </Radio>
            <Radio colorScheme="green" value="false">
              In-Active
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <Flex mt="30px">
        <Flex w="30%" flexDirection="column" gap="10px">
          <Text fontSize="15px">Video URL</Text>
          <Text fontSize="10px">(Default Player File)</Text>
        </Flex>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp4"
          required
          name="videoUrlDefault"
          value={data.videoUrlDefault}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Flex w="30%" flexDirection="column" gap="10px">
          <Text fontSize="15px">ShortVideo URL</Text>
          <Text fontSize="10px">(2- 5 Minutes)</Text>
        </Flex>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp4"
          required
          name="shortVideoUrl"
          value={data.shortVideoUrl}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Video URL 480P
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp4"
          required
          name="videoUrl480p"
          value={data.videoUrl480p}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Video URL 720P
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp4"
          required
          name="videoUrl720p"
          value={data.videoUrl720p}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Video URL 1080P
        </Text>

        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="https://example.com/demo.mp4"
          required
          name="videoUrl1080"
          value={data.videoUrl1080}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Download
        </Text>
        <RadioGroup
          defaultValue="1"
          name="isDownloadable"
          onChange={(value) => handleRadioChange("isDownloadable", value)}
        >
          <Stack spacing={4} direction="row">
            <Radio colorScheme="green" value="true">
              Active
            </Radio>
            <Radio colorScheme="green" value="false">
              In-Active
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </Box>
  );
};

export default VideoAudio;
