import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackButton from "../../../Components/Custom/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { AddSliderData, getMoviesList } from "../../../redux/admin/action";

const initSlideData = {
  sliderName: "",
  image: "",
  postType: "",
  istvshow: false,
  ismovie: false,
  isnewPopular: false,
  ishome: false,
  isactive: true,
  isdeleted: true,
};

const AddSlider = () => {
  const [sliderForm, setSliderForm] = useState(initSlideData);

  const dispatch = useDispatch();

  const movies = useSelector(({ movieListReducer }) => movieListReducer);

  const handelChange = ({ target }) => {
    const { name, value, checked } = target;
    if (
      name === "istvshow" ||
      name === "ismovie" ||
      name === "isnewPopular" ||
      name === "ishome" ||
      name === "isactive"
    ) {

      setSliderForm({ ...sliderForm, [name]: checked });
    } else if (name === "image") {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSliderForm({
            ...sliderForm,
            [name]: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setSliderForm({ ...sliderForm, [name]: value });
    }
  };

  // console.log(sliderForm, "slider")


  const handleAddSlider = () => {
    dispatch(AddSliderData(sliderForm));
  }

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  return (
    <Box bg="#1C1C1E" color="white" w="100%" borderRadius="5px" p="20px">
      <BackButton page={"/home/slider"} />
      <Flex mt="30px">
        <Text w="30%" color="white" textTransform="inherit" fontSize="15px">
          Slider Name
        </Text>
        <Input
          type="text"
          w="60%"
          h="40px"
          border="0px"
          bg="#232629"
          placeholder="Enter Name"
          name="sliderName"
          value={sliderForm.sliderName}
          onChange={handelChange}
        />
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Slider Image
        </Text>

        <Flex w="60%" flexDirection="column">
          <Input
            type="file"
            accept="image/*"
            w="100%"
            h="40px"
            border="0px"
            bg="#232629"
            placeholder="Image/url"
            name="image"
            onChange={handelChange}
          />

          <Text fontSize="10px">(Recommended Resolution : 180X140)</Text>
        </Flex>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Post Type
        </Text>
        <Select
          w="60%"
          h="40px"
          bg="#232629"
          id="select"
          border="none"
          color="white"
          name="postType"
          value={sliderForm.postType}
          onChange={handelChange}
        >
          <option>select</option>
          <option value="movie">Movie</option>
          <option value="show">Show</option>
          <option value="season">Season</option>
          <option value="episode">Episode</option>
        </Select>
      </Flex>
      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Movies
        </Text>
        <Select
          w="60%"
          h="40px"
          id="select"
          bg="#232629"
          border="none"
          color="white"
          // name="ismovie"
          // value={sliderForm.ismovie}
          // onChange={handelChange}
        >
          <option>select</option>
          {movies.data?.map((movie) => (
            <option value={movie.title}>{movie.title}</option>
          ))}
        </Select>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          Display On
        </Text>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox
            size="lg"
            colorScheme="red"
            name="ishome"
            // value={sliderForm.ishome}
            onChange={handelChange}
          >
            Home
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="green"
            name="istvshow"
            
            onChange={handelChange}
          >
            Tv Showz
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="orange"
            name="ismovie"
            // value={sliderForm.ismovie}
            onChange={handelChange}
          >
            Movies
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="orange"
            name="isnewPopular"
            // value={sliderForm.isnewPopular}
            onChange={handelChange}
          >
            New & Popular
          </Checkbox>
        </Stack>
      </Flex>

      <Flex mt="30px">
        <Text w="30%" fontSize="15px">
          status
        </Text>
        <Select
          w="60%"
          h="40px"
          bg="#232629"
          id="select"
          border="none"
          color="white"
          name="isactive"
          value={sliderForm.isactive}
          onChange={handelChange}
        >
          <option>select</option>
          <option value="true">Active</option>
          <option value="false">inActive</option>
        </Select>
      </Flex>
      <Button
        bg="#E50813"
        color="white"
        _hover={{ color: "#E50813", bg: "white" }}
        ml="30%"
        mt="40px"
        onClick={handleAddSlider}
      >
        Save
      </Button>
    </Box>
  );
};

export default AddSlider;
