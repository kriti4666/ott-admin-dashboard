import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import MovieInfoPoster from "./MovieInfoPoster";
import Posters from "./Posters";
import { useLocation, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import VideoAudio from "./VideoAudio";
import Subtitle from "./Subtitle";
import Seo from "./Seo";
import { useDispatch, useSelector } from "react-redux";
import { UpdateMovie } from "../../redux/admin/action";
import ShowAlert from "../../Components/ShowAlert";

const initMovieData = {
  title: "",
  artistName: [],
  languageName: "",
  technicianName: [],
  genreName: "",
  releaseDate: "",
  duration: 0,
  rating: 0,
  description: "",
  posterUrl: "",
  thumbnailUrl: "",
  trailerUrl: "",
  movieCertification: "",
  logoUrl: "",
  isPaid: true,
  isUpcoming: true,
  imdbRating: null,
  videoQuality: true,
  videoUrlDefault: "",
  shortVideoUrl: "",
  videoUrl480p: "",
  videoUrl720p: "",
  videoUrl1080: "",
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
  isactive: true,
  isdeleted: true,
};

const EditMovie = () => {
  const location = useLocation();
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const { data } = location.state || {};
  const [movieData, setMovieData] = useState(data);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const editMovie = useSelector(
    ({ updateMovieReducer }) => updateMovieReducer
  );

  const handelChange = ({ target }) => {
    const { name, value } = target;
    if (
      name === "isPaid" ||
      name === "isUpcoming" ||
      name === "isactive" ||
      name === "isDownloadable" ||
      name === "videoQuality"
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

  const handleUpdateSubmit = () => {
    dispatch(UpdateMovie(movieData.id, movieData));
    // if (UpdateMovie.result) {
      navigate("/movie");
    // }
  };


  useEffect(() => {
    if (editMovie.error) {
      setAlert({
        status: "error",
        message: `${editMovie.error}`,
      });
    }
  }, [editMovie.error]);

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <Flex
        color="#E50813"
        p="15px"
        fontStyle="Roboto"
        fontSize="20px"
        fontWeight={600}
      >
        <GoChevronLeft style={{ marginTop: "5px" }} />
        <Text cursor="pointer" onClick={() => navigate("/movie")}>
          {" "}
          BACK
        </Text>
      </Flex>
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
            onClick={handleUpdateSubmit}
          >
            Update
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditMovie;
