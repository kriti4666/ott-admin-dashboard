import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { showTableHead } from "../../../Constants/ShowsConstant";
import CustomeMovieTable from "../../../Components/Custom/CustomeMovieTable";
import { useNavigate } from "react-router-dom";
import { getShowsList } from "../../../redux/admin/action";
import { useDispatch, useSelector } from "react-redux";
import ShowAlert from "../../../Components/ShowAlert";



const Shows = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showData = useSelector(({ showListReducer }) => showListReducer);
  const addShow = useSelector(({ addShowReducer }) => addShowReducer);
  const updateShow = useSelector(({ updateShowReducer }) => updateShowReducer);
  const deleteShow = useSelector(({ deleteShowReducer }) => deleteShowReducer);

  const fetchUpdatedShowData = () => {
    dispatch(getShowsList());
  };

    // useEffect to Add Genre the UI
    useEffect(() => {
      if (addShow.error) {
        setAlert({ status: "error", message: `Failed to create Show ${addShow.error}` });
      } else if (addShow.result) {
        setAlert({
          status: "success",
          message: `${addShow.result}`,
        });
        fetchUpdatedShowData();
      }
    }, [addShow.error, addShow.result]);

  // useEffect to Update Show the UI
  useEffect(() => {
    if (updateShow.error) {
      setAlert({ status: "error", message: `Failed to Update Show ${updateShow.error}` });
    } else if (updateShow.result) {
      setAlert({
        status: "success",
        message: ` ${updateShow.result}`,
      });
      fetchUpdatedShowData();
    }
  }, [updateShow.error, updateShow.result]);


  // useEffect to delete Show the UI
  useEffect(() => {
    if (deleteShow.error) {
      setAlert({ status: "error", message: `Failed to delete Show ${deleteShow.error}` });
    } else if (deleteShow.result) {
      setAlert({
        status: "success",
        message: `${deleteShow.result}`,
      });
      fetchUpdatedShowData();
    }
  }, [deleteShow.error, deleteShow.result]);


  useEffect(() => {
    dispatch(getShowsList());
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
          type="Text"
          color="white"
          placeholder="Search by Title"
        />
        <Button
          onClick={() => navigate("/shows/addshow")}
          bg="#07BA36"
          color="white"
          fontSize="15px"
          px="30px"
          py="25px"
          _hover={{ backgroundColor: "red" }}
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Show
        </Button>
      </Flex>


      {showData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : showData.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {showData.error.message}
        </Text>
      ) : (
        <CustomeMovieTable
          tableHead={showTableHead}
          tableBody={showData.data}
          category={"Shows"}
        />
      )}
    </Box>
  );
};

export default Shows;
