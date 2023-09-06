import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistList, getGenreList, getLanguages, getSessionList, getShowsList, getTechnicianList } from "../../../redux/admin/action";

const EpisodeInfo = ({ data, handelChange, handleEditorChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const showData = useSelector(({ showListReducer }) => showListReducer);
  const seasonData = useSelector(
    ({ sessionListReducer }) => sessionListReducer
  );

  const LanguageList = useSelector(
    ({ getLanguageReducer }) => getLanguageReducer
  );
  const GenreList = useSelector(
    ({ getGenreListReducer }) => getGenreListReducer
  );
  const technicianList = useSelector(
    ({ TechnicianListReducer }) => TechnicianListReducer
  );
  const ArtistList = useSelector(
    ({ getArtistListReducer }) => getArtistListReducer
  );

  const formateDate = data.releaseDate.split("T")[0]

  useEffect(() => {
    dispatch(getShowsList());
    dispatch(getSessionList());
    dispatch(getLanguages());
    dispatch(getGenreList());
    dispatch(getArtistList());
    dispatch(getTechnicianList());
  }, []);
  return (
    <Box fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Episode Info & Posters
      </Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Series*
        </Text>
        <Select
          id="select"
          w="60%"
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
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Session Title*
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="seasonName"
          value={data.seasonName}
          onChange={handelChange}
        >
          <option value="">select</option>
          {seasonData.data?.map((season) => (
            <option value={season.title}>{season.title}</option>
          ))}
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Episode Name*
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Movie Name"
          name="title"
          value={data.title}
          onChange={handelChange}
        />
      </Flex>
      <Text>Description</Text>
      <Box color="black" w="80%" m="20px">
        <JoditEditor
         config={{
          askBeforePasteHTML: false, 
          askBeforePasteFromWord: false, 
          defaultActionOnPaste: "insert_clear_html",
        }}
          ref={editor}
          color="blue"
          name="description"
          value={data.description}
          onChange={handleEditorChange}
        />
      </Box>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Upcomming*
        </Text>
        <Flex w="60%" flexDirection="column">
          <Select
            w="100%"
            h="40px"
            id="select"
            bg="#232629"
            border="none"
            color="white"
            name="isUpcoming"
            value={data.isUpcoming}
            onChange={handelChange}
          >
            <option>select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Text fontSize="10px">(Upcoming display only on Home Page)</Text>
        </Flex>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Episode Access
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="isPaid"
          value={data.isPaid}
          onChange={handelChange}
        >
          <option>select</option>
          <option value="true">Paid</option>
          <option value="false">Free</option>
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Language
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="languageName"
          value={data.languageName}
          onChange={handelChange}
        >
          <option value="">select</option>
          {LanguageList.languageData?.map((lang) => (
            <option value={lang.name}>{lang.name}</option>
          ))}
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Genres*
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="genreName"
          value={data.genreName}
          onChange={handelChange}
        >
          <option value="">select</option>
          {GenreList.genreData?.map((genre) => (
            <option value={genre.name}>{genre.name}</option>
          ))}
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Artist
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="artistName"
          value={data.artistName}
          onChange={handelChange}
        >
          <option value="">select</option>
          {ArtistList.artistData?.map((artist) => (
            <option value={artist.fullname}>{artist.fullname}</option>
          ))}
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Technician
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="technicianName"
          value={data.technicianName}
          onChange={handelChange}
        >
          <option value="">select</option>
          {technicianList.technicianData?.map((technician) => (
            <option value={technician.fullname}>{technician.fullname}</option>
          ))}
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          IMDB Rating
        </Text>
        <Input
          type="number"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="8.4"
          name="imdbRating"
          value={data.imdbRating}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Content Rating
        </Text>
        <Input
          type="number"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="16+"
          name="contentRating"
          value={data.contentRating}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Certification
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          name="movieCertificate"
          value={data.movieCertificate}
          onChange={handelChange}
        >
          <option>select</option>
          <option value="Utf 81">Hindi</option>
          <option value="Utf11">English</option>
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Release Date
        </Text>
        <Input
          type="date"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="dd/mm/yyyy"
          name="releaseDate"
          value={data.releaseDate? formateDate: data.releaseDate}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Release Time
        </Text>
        <Input
          type="time"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="dd/mm/yyyy"
          name="releaseTime"
          value={data.releaseTime}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Duration
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="1h 20m 3s"
          name="duration"
          value={data.duration}
          onChange={handelChange}
        />
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Status
        </Text>
        <Select
          w="60%"
          h="40px"
          id="select"
          bg="#232629"
          border="none"
          color="white"
          name="isActive"
          value={data.isActive}
          onChange={handelChange}
        >
          <option >select</option>
          <option value="true">Active</option>
          <option value="false">inActive</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default EpisodeInfo;
