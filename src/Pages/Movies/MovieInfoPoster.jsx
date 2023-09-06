import { Box, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtistList,
  getGenreList,
  getLanguages,
  getTechnicianList,
} from "../../redux/admin/action";

const MovieInfoPoster = ({
  data,
  setData,
  handelChange,
  handleEditorChange,
}) => {
  const editor = useRef(null);

  const selectedArtistOptions = [];
  const selectedTechnicianOptions = [];

  // Handlers for selecting and removing options
  const onSelectArtistOptions = (selectedList, selectedItem) => {
    const selectedArtistNames = selectedList.map((item) => item.name);

    setData((prevData) => ({
      ...prevData,
      artistName: selectedArtistNames,
    }));
  };

  const onRemoveArtistOptions = (selectedList, removedItem) => {
    const selectedArtistNames = selectedList.map((item) => item.name);

    setData((prevData) => ({
      ...prevData,
      artistName: selectedArtistNames,
    }));
  };

  const onSelectTechnicianOptions = (selectedList, selectedItem) => {
    const selectedTechnicianNames = selectedList.map((item) => item.name);

    setData((prevData) => ({
      ...prevData,
      technicianName: selectedTechnicianNames,
    }));
  };

  const onRemoveTechnicianOptions = (selectedList, removedItem) => {
    const selectedTechnicianNames = selectedList.map((item) => item.name);

    setData((prevData) => ({
      ...prevData,
      technicianName: selectedTechnicianNames,
    }));
  };

  const dispatch = useDispatch();

    const formateDate = data.releaseDate.split("T")[0]
    // console.log(formateDate, "date")
  

  // data get from useSelector

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

  const optionForTech = technicianList.technicianData?.map((technician) => ({
    name: technician.fullname,
    id: technician.id,
  }));

  const optionForArtist = ArtistList.artistData?.map((artist) => ({
    name: artist.fullname,
    id: artist.id,
  }));

  const multiselectStyles = {
    chips: {
      background: "red",
      color: "white",
    },
    searchBox: {
      border: "1px solid red",
      borderRadius: "5px",
      width: "100%",
    },
    optionContainer: {
      background: "#1C1C1E",
      borderRadius: "5px",
    },
    option: {
      color: "red",
      matginTop: "10px",
    },
  };

  useEffect(() => {
    dispatch(getLanguages());
    dispatch(getGenreList());
    dispatch(getArtistList());
    dispatch(getTechnicianList());
  }, []);

  return (
    <Box fontStyle="Roboto">
      <Text fontSize="20px" fontWeight={600}>
        Movies Info & Posters
      </Text>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movie Name*
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          required
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
            id="select"
            w="100%"
            h="40px"
            bg="#232629"
            border="none"
            color="white"
            name="isUpcoming"
            required
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
          Movie Access
        </Text>
        <Select
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          required
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
          required
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
          required
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
      {/* <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Artist
        </Text>
        <Multiselect
          options={optionForArtist}
          name="artistName"
          required
          onSelect={onSelectArtistOptions}
          onRemove={onRemoveArtistOptions}
          displayValue="name"
          closeIcon="cancel"
          placeholder="Select Artist"
          selectedValues={selectedArtistOptions}
          style={multiselectStyles}
          
        />
      </Flex> */}
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Artist
        </Text>
        <Select
          w="60%"
          h="40px"
          bg="#232629"
          id="select"
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
      {/* <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Technician
        </Text>
        <Multiselect
          options={optionForTech}
          name="technicianName"
          required
          onSelect={onSelectTechnicianOptions}
          onRemove={onRemoveTechnicianOptions}
          displayValue="name"
          closeIcon="cancel"
          placeholder="Select Technician"
          selectedValues={selectedTechnicianOptions}
          style={multiselectStyles}
        />
      </Flex> */}
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Technician
        </Text>
        <Select
          w="60%"
          h="40px"
          bg="#232629"
          id="select"
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
          required
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
          required
          name="rating"
          value={data.rating}
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
          required
          name="movieCertificate"
          value={data.movieCertificate}
          onChange={handelChange}
        >
          <option value="">select</option>
          <option value="true">Hindi</option>
          <option value="false">English</option>
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
          required
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
          required
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
          required
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
          id="select"
          w="60%"
          h="40px"
          bg="#232629"
          border="none"
          color="white"
          required
          name="isActive"
          value={data.isActive}
          onChange={handelChange}
        >
          {/* <option >select</option> */}
          <option value="true">Active</option>
          <option value="false">inActive</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default MovieInfoPoster;
