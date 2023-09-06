import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EpisodeInfo from "./EpisodeInfo";
import Posters from "./Posters";
import VideoAudio from "./VideoAudio";
import Subtitle from "./Subtile";
import BackButton from "../../../Components/Custom/BackButton";
import EpisodeSeo from "./Seo";
import { AddEpisodeData } from "../../../redux/admin/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowAlert from "../../../Components/ShowAlert";

const initEpisodeData = {
  title: "",
  releaseDate: "",
  seasonName: "",
  showName: "",
  artistName: "",
  languageName: "",
  technicianName: "",
  genreName: "",
  duration: "",
  releaseTime: "",
  movieCertificate: "",
  movieLogo: "",
  movieThumbnail1: "",
  movieThumbnail2: "",
  shortVideoUrl: "",
  releaseDate1: "2023-08-16T12:44:28.496Z",
  imdbRating: 0,
  contentRating: 0,
  isActive: true,
  posterUrl: "",
  thumbnailUrl: "",
  trailerUrl: "",
  isVideoQuality: true,
  thumbnailVideo: "",
  defaultVideourl: "",
  videoUrl480P: "",
  videoUrl720P: "",
  videoUrl1080P: "",
  isDownload: true,
  subtitleUrl1: "",
  subtitleUrl2: "",
  subtitleUrl3: "",
  subtitleUrl4: "",
  subtitleLanguage1: "",
  subtitleLanguage2: "",
  subtitleLanguage3: "",
  subtitleLanguage4: "",
  seoTitle: "",
  seoDescription: "",
  keyword: "",
  description: "",
  isUpcoming: true,
  isPaid: true,
  isDeleted: true
}


// {
//   title: "",
//   releaseDate: "",
//   seasonName: "",
//   artistName: "",
//   languageName: "",
//   technicianName: "",
//   genreName: "",
//   duration: 0,
//   releaseDate1: "2023-08-10T13:07:54.476Z",
//   imdbRating: 0,
//   contentRating: 0,
//   isActive: true,
//   posterUrl: "",
//   thumbnailUrl: "",
//   trailerUrl: "",
//   isVideoQuality: true,
//   thumbnailVideo: "",
//   defaultVideourl: "",
//   videoUrl480P: "",
//   videoUrl720P: "",
//   videoUrl1080P: "",
//   isDownload: true,
//   subtitleUrl1: "",
//   subtitleUrl2: "",
//   subtitleUrl3: "",
//   subtitleUrl4: "",
//   subtitleLanguage1: "",
//   subtitleLanguage2: "",
//   subtitleLanguage3: "",
//   subtitleLanguage4: "",
//   audioUrl1: "",
//   audioUrl2: "",
//   audioUrl3: "",
//   audioUrl4: "",
//   audioLanguage1: "",
//   audioLanguage2: "",
//   audioLanguage3: "",
//   audioLanguage4: "",
//   seoTitle: "",
//   seoDescription: "",
//   keyword: "",
//   description: "",
//   isUpcoming: true,
//   isPaid: true,
//   isDeleted: true,
// };

const AddEpisode = () => {
  const [episodeData, setEpisodeData] = useState(initEpisodeData);
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


  const handleAddSubmit = () => {
    dispatch(AddEpisodeData(episodeData));
    if(addEpisode.result)(
      naivgate("/episodes")
    )

    // setEpisodeData(initEpisodeData);
  };

  useEffect(() => {
    if (addEpisode.error) {
      setAlert({ status: "error", message: ` ${addEpisode.error}` });
    } 
  }, [addEpisode.error]);

 

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
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
            onClick={handleAddSubmit}
          >
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddEpisode;
