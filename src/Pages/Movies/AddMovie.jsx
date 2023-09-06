import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieInfoPoster from "./MovieInfoPoster";
import Posters from "./Posters";
import VideoAudio from "./VideoAudio";
import Subtitle from "./Subtitle";
import Seo from "./Seo";
import { useDispatch, useSelector } from "react-redux";
import { AddMovieData } from "../../redux/admin/action";
import BackButton from "../../Components/Custom/BackButton";
import ShowAlert from "../../Components/ShowAlert";
import { useNavigate } from "react-router-dom";

const initMovieData = {
  title: "",
  artistName: "",
  languageName: "",
  technicianName: "",
  genreName: "",
  releaseDate: "",
  releaseTime: "",
  duration: "",
  movieCertificate: "",
  rating: 0,
  description: "",
  posterUrl: "",
  thumbnailUrl1: "",
  thumbnailUrl2: "",
  logoUrl: "",
  trailerUrl: "",
  videoQuality: "",
  videoUrlDefault: "",
  shortVideoUrl: "",
  videoUrl480p: "",
  videoUrl720p: "",
  videoUrl1080p: "",
  isPaid: true,
  isUpcoming: true,
  imdbRating: 0,
  subtitleUrl1: "",
  subtitleUrl2: "",
  subtitleUrl3: "",
  subtitleUrl4: "",
  subtitleLanguage1: "",
  subtitleLanguage2: "",
  subtitleLanguage3: "",
  subtitleLanguage4: "",
  isDownloadable: true,
  seoTitle: "",
  seoDescription: "",
  keywords: "",
  isActive: true,
  isDeleted: true,
};

const AddMovie = () => {
  const [movieData, setMovieData] = useState(initMovieData);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addMovie = useSelector(({ addMovieReducer }) => addMovieReducer);

  const handelChange = ({ target }) => {
    const { name, value } = target;
    if (
      name === "isPaid" ||
      name === "isUpcoming" ||
      name === "isActive" ||
      name === "isDownloadable"
    ) {
      const boolValue = value === "true" ? true : false;
      setMovieData({ ...movieData, [name]: boolValue });
    } else if (
      name === "posterUrl" ||
      name === "thumbnailUrl1" ||
      name === "thumbnailUrl2" ||
      name === "logUrl"
    ) {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMovieData({
            ...movieData,
            [name]: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setMovieData({ ...movieData, [name]: value });
    }
  };

  const handleEditorChange = (content) => {
    setMovieData({ ...movieData, description: content });
  };

  const handleRadioChange = (name, value) => {
    handelChange({ target: { name, value } });
  };

  const handleAddSubmit = () => {
    dispatch(AddMovieData(movieData));
    if (addMovie.result) {
      navigate("/movie");
    }
    // setMovieData(initMovieData);
  };

  useEffect(() => {
    if (addMovie.error) {
      setAlert({ status: "error", message: ` ${addMovie.error}` });
    } 
  }, [addMovie.error]);

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <BackButton page={"/movie"} />
      <Divider w="98%" m="auto" />
      <Flex color="white" justifyContent="space-evenly">
        <Box w="45%" p="10px">
          <MovieInfoPoster
            data={movieData}
            setData={setMovieData}
            handelChange={handelChange}
            handleEditorChange={handleEditorChange}
          />
          <br />
          <Divider w="90%" />
          <Posters data={movieData} handelChange={handelChange} />
        </Box>
        <Box w="45%" p="10px">
          <VideoAudio
            data={movieData}
            setData={setMovieData}
            handelChange={handelChange}
            handleRadioChange={handleRadioChange}
          />
          <br />
          <Divider w="90%" />
          <Subtitle
            data={movieData}
            setData={setMovieData}
            handelChange={handelChange}
          />
          <Seo data={movieData} handelChange={handelChange} />
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

export default AddMovie;
