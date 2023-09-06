import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MovietableHead } from "../../Constants/MovieConstant";
import { useNavigate } from "react-router-dom";
import CustomeMovieTable from "../../Components/Custom/CustomeMovieTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesList } from "../../redux/admin/action";
import ShowAlert from "../../Components/ShowAlert";

const Movie = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector(({ movieListReducer }) => movieListReducer);
  const deleteMovie = useSelector(
    ({ deleteMovieReducer }) => deleteMovieReducer
  );
  const addMovie = useSelector(({ addMovieReducer }) => addMovieReducer);
  const UpdateMovie = useSelector(
    ({ updateMovieReducer }) => updateMovieReducer
  );

  const fetchUpdatedMoviesData = () => {
    dispatch(getMoviesList());
  };

  useEffect(() => {
    if (addMovie.error) {
      setAlert({
        status: "error",
        message: `Failed to Add Movie: ${addMovie.error}`,
      });
    } else if (addMovie.result) {
      setAlert({
        status: "success",
        message: `${addMovie.result}`,
      });
      fetchUpdatedMoviesData();
    }
  }, [addMovie.error, addMovie.result]);

  useEffect(() => {
    if (deleteMovie.error) {
      setAlert({ status: "error", message: `${deleteMovie.error}` });
    } else if (deleteMovie.result) {
      setAlert({
        status: "success",
        message: ` ${deleteMovie.result}`,
      });
      fetchUpdatedMoviesData();
    }
  }, [deleteMovie.error, deleteMovie.result]);

  useEffect(() => {
    if (UpdateMovie.error) {
      setAlert({
        status: "error",
        message: `Movie fail to Update:${UpdateMovie.error}`,
      });
    } else if (UpdateMovie.result) {
      setAlert({
        status: "success",
        message: ` ${UpdateMovie.result}`,
      });
      fetchUpdatedMoviesData();
    }
  }, [UpdateMovie.error, UpdateMovie.result]);

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  return (
    <Box bg="#1C1C1E" w="100%">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <Flex
        w="60%"
        px="55px"
        gap="20px"
        pt="30px"
        justifyContent="space-between"
      >
        <Select
          bg="#232629"
          border="none"
          color="white"
          id="select"
          w="40%"
          placeholder="Filter By Languages"
        >
          <option>Hindi</option>
          <option>English</option>
        </Select>
        <Input w="40%" type="Text" placeholder="Search by Title" />
        <Button
          onClick={() => navigate("/movie/addmovie")}
          bg="#07BA36"
          color="white"
          fontSize="15px"
          px="30px"
          py="25px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Movies
        </Button>
      </Flex>

      {movies.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : movies.error ? (
        <Text color="red" fontSize="2xl" textAlign="center">
          {movies.error.message}
        </Text>
      ) : (
        <CustomeMovieTable
          tableHead={MovietableHead}
          tableBody={movies.data}
          category={"Movie"}
        />
      )}
    </Box>
  );
};

export default Movie;
