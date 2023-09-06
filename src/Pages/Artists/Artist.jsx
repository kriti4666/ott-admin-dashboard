import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomModal from "../../Components/Custom/CustomModal";
import CustomTable from "../../Components/Custom/CustomTable";
import {
  artistTableHead,
} from "../../Constants/ArtistConstant";
import { useDispatch, useSelector } from "react-redux";
import { AddArtistData, getArtistList } from "../../redux/admin/action";
import ShowAlert from "../../Components/ShowAlert";

const initArtistData = {
  fullname: "",
  firstname: "",
  image: "",
  lastname: "",
  bio: "",
  description: "",
  isactive: true,
  isdeleted: true,
};


// deleteArtistReducer,

const Artist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [artistData, setArtistData] = useState(initArtistData);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const getArtistData = useSelector(
    ({ getArtistListReducer }) => getArtistListReducer
  );
  const addArtist = useSelector(
    ({ addArtistReducer }) => addArtistReducer
  );
  const updateArtist = useSelector(
    ({ updateArtistReducer }) => updateArtistReducer
  );
  const deleteArtist = useSelector(
    ({ deleteArtistReducer }) => deleteArtistReducer
  );

  const dispatch = useDispatch();

  const handelArtistForm = () => {
    if (artistData.fullname === "" || artistData.image === "" || (!artistData.fullname && !artistData.image)) {
      setAlert({ status: "error", message: "Please fill in all the details." });
      return;
    }
    dispatch(AddArtistData(artistData));
    setArtistData(initArtistData);
    onClose();
  };


    // useEffect to Add Artist the UI
    useEffect(() => {
      if (addArtist.error) {
        setAlert({ status: "error", message: "Failed to create Artist." });
      } else if (addArtist.result) {
        setAlert({
          status: "success",
          message: "Artist created successfully.",
        });
      }
    }, [addArtist.error, addArtist.result]);


    // useEffect to Update Artist the UI
    useEffect(() => {
      if (updateArtist.error) {
        setAlert({ status: "error", message: "Failed to create Artist." });
      } else if (updateArtist.result) {
        setAlert({
          status: "success",
          message: "Artist created successfully.",
        });
      }
    }, [updateArtist.error, updateArtist.result]);

    // useEffect to Update Artist the UI
    useEffect(() => {
      if (deleteArtist.error) {
        setAlert({ status: "error", message: "Failed to delete Artist." });
      } else if (deleteArtist.result) {
        setAlert({
          status: "success",
          message: "Artist deleted successfully.",
        });
      }
    }, [deleteArtist.error, deleteArtist.result]);
  

  useEffect(() => {
    dispatch(getArtistList());
  }, []);

console.log(getArtistData, "data")
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
        onClick={onOpen}
        bg="#07BA36"
        color="white"
        fontSize="15px"
        mx="50px"
        mt="30px"
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
        Artist
      </Button>
      <CustomModal
        category={"Artist Name"}
        SeletctType={"Artist Image"}
        isOpen={isOpen}
        onClose={onClose}
        data={artistData}
        setData={setArtistData}
        handelFormSubmit={handelArtistForm}
      />
      {getArtistData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : getArtistData.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {getArtistData.error.message}
        </Text>
      ) : (
        <CustomTable
          tableHead={artistTableHead}
          tableBody={getArtistData.artistData}
          category={"Artist Name"}
          SeletctType={"Artist Image"}
        />
      )}
    </Box>
  );
};

export default Artist;
