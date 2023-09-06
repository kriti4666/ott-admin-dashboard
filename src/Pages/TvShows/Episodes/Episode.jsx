import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { episodeTableHead } from "../../../Constants/EpisodesConstant";
import CustomeMovieTable from "../../../Components/Custom/CustomeMovieTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeList } from "../../../redux/admin/action";
import ShowAlert from "../../../Components/ShowAlert";

const Episode = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const episodeData = useSelector(
    ({ episodeListReducer }) => episodeListReducer
  );
  const addEpisode = useSelector(({ addEpisodeReducer }) => addEpisodeReducer);
  const updateEpisode = useSelector(
    ({ updateEpisodeReducer }) => updateEpisodeReducer
  );
  const deleteEpisode = useSelector(
    ({ deleteEpisodeReducer }) => deleteEpisodeReducer
  );

  const fetchUpdatedEpisodeData = () => {
    dispatch(getEpisodeList());
  };

  useEffect(() => {
    if (addEpisode.error) {
      setAlert({ status: "error", message: "Failed to create Episode." });
    } else if (addEpisode.result) {
      setAlert({
        status: "success",
        message: "Episode created successfully.",
      });
      fetchUpdatedEpisodeData();
    }
  }, [addEpisode.error, addEpisode.result]);

  useEffect(() => {
    if (updateEpisode.error) {
      setAlert({ status: "error", message: "Failed to update Episode." });
    } else if (updateEpisode.result) {
      setAlert({
        status: "success",
        message: "Episode updated successfully.",
      });
      fetchUpdatedEpisodeData();
    }
  }, [updateEpisode.error, updateEpisode.result]);

  useEffect(() => {
    if (deleteEpisode.error) {
      setAlert({ status: "error", message: "Failed to delete Episode." });
    } else if (deleteEpisode.result) {
      setAlert({
        status: "success",
        message: "Episode deleted successfully.",
      });
      fetchUpdatedEpisodeData();
    }
  }, [deleteEpisode.error, deleteEpisode.result]);

  useEffect(() => {
    dispatch(getEpisodeList());
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
          id="select"
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
          type="Text"
          color="white"
          placeholder="Search by Title"
        />
        <Button
          onClick={() => navigate("/episodes/addepisode")}
          bg="#07BA36"
          color="white"
          fontSize="15px"
          px="30px"
          py="25px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Episode
        </Button>
      </Flex>

      {episodeData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : episodeData.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {episodeData.error.message}
        </Text>
      ) : (
        <CustomeMovieTable
          tableHead={episodeTableHead}
          tableBody={episodeData.data}
          category={"Episode"}
        />
      )}
    </Box>
  );
};

export default Episode;
