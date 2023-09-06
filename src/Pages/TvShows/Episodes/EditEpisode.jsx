import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EpisodeInfo from "./EpisodeInfo";
import Posters from "./Posters";
import VideoAudio from "./VideoAudio";
import Subtitle from "./Subtile";
import BackButton from "../../../Components/Custom/BackButton";
import EpisodeSeo from "./Seo";
import { UpdateEpisodeRequest } from "../../../redux/admin/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const EditEpisode = () => {
    const location = useLocation();
    const { data } = location.state || {};
  const [episodeData, setEpisodeData] = useState(data);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const dispatch = useDispatch();
  const naivgate = useNavigate();
  const addEpisode = useSelector(({ addEpisodeReducer }) => addEpisodeReducer);

  const handelChange = ({ target }) => {
    const { name, value } = target;
    if (name === "isPaid" || name === "isUpcoming" || name === "isActive" || name === "isVideoQuality" || name === "isDownload" ) {
      const boolValue = value === "true" ? true : false;
      setEpisodeData({ ...episodeData, [name]: boolValue });
    } else if (
      name === "posterUrl" ||
      name === "thumbnailUrl1" ||
      name === "thumbnailUrl2" ||
      name === "logoUrl"
    ) {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setEpisodeData({
            ...episodeData,
            [name]: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      }
    }

     else {
      setEpisodeData({ ...episodeData, [name]: value });
    }
  };

  const handleEditorChange = (content) => {
    setEpisodeData({ ...episodeData, description: content });
  };

  const handleRadioChange = (name, value) => {
    handelChange({ target: { name, value } });
  };

  console.log(episodeData, "data");

  const handelUpdateEpisode = () => {
    dispatch(UpdateEpisodeRequest(episodeData.id, episodeData));
  
    naivgate("/episodes")
    
    // setEpisodeData(initEpisodeData);
  };

 

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      <BackButton page={"/episodes"} />
      <Flex color="white" justifyContent="space-evenly">
        <Box w="45%" p="10px">
          <EpisodeInfo
            data={episodeData}
            setData={setEpisodeData}
            handelChange={handelChange}
            handleEditorChange={handleEditorChange}
          />
          <br />
          <Divider w="90%" />
          <Posters
            data={episodeData}
            setData={setEpisodeData}
            handelChange={handelChange}
          />
        </Box>
        <Box w="45%" p="10px" mt="-30px">
          <VideoAudio
            data={episodeData}
            handelChange={handelChange}
            handleRadioChange={handleRadioChange}
          />
          <br />
          <Divider w="90%" />
          <Divider w="90%" />
          <Subtitle data={episodeData} handelChange={handelChange} />
          <br />
          <Divider w="90%" />
          <EpisodeSeo data={episodeData} handelChange={handelChange} />
          <Button
            mt="30px"
            p="25px"
            float="right"
            bg="#E50813"
            color="white"
            _hover={{ color: "#E50813", bg: "white" }}
            onClick={handelUpdateEpisode}
          >
            Update
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditEpisode;
