import React, { useEffect, useState } from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { GenreTableHead } from "../../Constants/genresConstant";
import CustomTable from "../../Components/Custom/CustomTable";
import CustomModal from "../../Components/Custom/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { AddGenreData, getGenreList } from "../../redux/admin/action";
import ShowAlert from "../../Components/ShowAlert";

const initialGenreData = {
  name: "",
  isactive: true,
};

const Genre = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [genreData, setGenreData] = useState(initialGenreData);
  const [alert, setAlert] = useState({ status: "success", message: "" });


  const dispatch = useDispatch();
  const getGenreData = useSelector(({ getGenreListReducer }) => getGenreListReducer);
  const addGenre = useSelector(({ addGenreReducer }) => addGenreReducer);
  const updateGerne = useSelector(({ updateGenreReducer }) => updateGenreReducer);
  const deleteGerne = useSelector(({ deleteGenreReducer }) => deleteGenreReducer);
  
  
  // function to handle Add Submit form 
  const handelFormSubmit = () => {
    if (!genreData.name) {
      setAlert({ status: "error", message: "Please fill in all the details." });
      return;
    }
    dispatch(AddGenreData(genreData));
    setGenreData(initialGenreData);
    onClose();
  }

  // useEffect to Add Genre the UI
  useEffect(() => {
    if (addGenre.error) {
      setAlert({ status: "error", message: "Failed to create Genre." });
    } else if (addGenre.result) {
      setAlert({
        status: "success",
        message: "Genre created successfully.",
      });
    }
  }, [addGenre.error, addGenre.result]);


  // useEffect to Update the UI
  useEffect(() => {
    if (deleteGerne.error) {
      setAlert({ status: "error", message: " delete Failed ." });
    } else if (deleteGerne.result) {
      setAlert({
        status: "success",
        message: "Genre deleted successfully.",
      });
    }
  }, [deleteGerne.error, deleteGerne.result]);


  useEffect(() => {
    if (updateGerne.error) {
      setAlert({ status: "error", message: "Update Failed." });
    } else if (updateGerne.result) {
      setAlert({
        status: "success",
        message: "Genre created successfully.",
      });
    }
  }, [updateGerne.error, updateGerne.result]);

  useEffect(() => {
    dispatch(getGenreList());
  }, [ ]);

  return (
    <Box bg="#1C1C1E" w="100%">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <Button
        On
        bg="#07BA36"
        color="white"
        fontSize="10px"
        mx="50px"
        mt="30px"
        onClick={onOpen}
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
        Genres
      </Button>
      <CustomModal
        category={"Genre Title"}
        isOpen={isOpen}
        onClose={onClose}
        data={genreData}
        setData={setGenreData}
        handelFormSubmit={handelFormSubmit}
      />
      {getGenreData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : getGenreData.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {getGenreData.error.message}
        </Text>
      ) : (
        <CustomTable tableHead={GenreTableHead} tableBody={getGenreData.genreData} category={"Genre Title"}/>
      )}
      
    </Box>
  );
};

export default Genre;
