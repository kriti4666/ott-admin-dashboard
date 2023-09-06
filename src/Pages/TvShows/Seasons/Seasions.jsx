import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { sessionTablehead } from "../../../Constants/SessionConstant";
import CustomeMovieTable from "../../../Components/Custom/CustomeMovieTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSessionList } from "../../../redux/admin/action";
import ShowAlert from "../../../Components/ShowAlert";

const Seasions = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  // data taking from store using useSelector

  const sessionData = useSelector(
    ({ sessionListReducer }) => sessionListReducer
  );
  const addSeason = useSelector(({ addSessionReducer }) => addSessionReducer);

  const updateSeason = useSelector(
    ({ updateSessionReducer }) => updateSessionReducer
  );
  const deleteSeason = useSelector(
    ({ deleteSessionReducer }) => deleteSessionReducer
  );

  const fetchUpdatedSessionData = () => {
    dispatch(getSessionList());
  };

 
  // useEffect to Add Season the UI
  useEffect(() => {
    if (addSeason.error) {
      setAlert({ status: "error", message: "Failed to create Season." });
    } else if (addSeason.result) {
      setAlert({
        status: "success",
        message: "Season created successfully.",
      });
      fetchUpdatedSessionData();
    }
  }, [addSeason.error, addSeason.result]);

  // useEffect to Update Season the UI
  useEffect(() => { 
    if (updateSeason.error) {
      setAlert({ status: "error", message: `${updateSeason.error}` });
    } else if (updateSeason.result) {
      setAlert({
        status: "success",
        message: `${updateSeason.result}`,
      });
      fetchUpdatedSessionData();
    }
  }, [updateSeason.error, updateSeason.result]);

 // useEffect to delete Season the UI
  useEffect(() => {
    if (deleteSeason.error) {
      setAlert({ status: "error", message: `${deleteSeason.error}` });
    } else if (deleteSeason.result) {
      setAlert({
        status: "success",
        message: `${deleteSeason.result}`,
      });
      fetchUpdatedSessionData();
    }
  }, [deleteSeason.error, deleteSeason.result]);


  useEffect(() => {
    dispatch(getSessionList());
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
          w="40%"
          placeholder="Filter By Languages"
        >
          <option>Hindi</option>
          <option>English</option>
        </Select>
        <Input
          w="40%"
          color="white"
          type="Text"
          placeholder="Search by Title"
        />
        <Button
          onClick={() => navigate("/season/add_season")}
          bg="#07BA36"
          color="white"
          fontSize="15px"
          px="30px"
          py="25px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          session
        </Button>
      </Flex>

      {sessionData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : sessionData.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {sessionData.error.message}
        </Text>
      ) : (
        <CustomeMovieTable
          tableHead={sessionTablehead}
          tableBody={sessionData.data}
          category={"Season"}
        />
      )}
    </Box>
  );
};

export default Seasions;
