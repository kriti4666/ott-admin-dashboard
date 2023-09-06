import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SessionInfo from "./SessionInfo";
import BackButton from "../../../Components/Custom/BackButton";
import SessionSeo from "./Seo";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSeasonRequest } from "../../../redux/admin/action";
const initSeasonData = {
  title: "",
  showName: "",
  trailerurl: "",
  languageName: "",
  imdbrating: 0,
  contentrating: 0,
  isactive: true,
  posterurl: "",
  sortinfo: "",
  seotitle: "",
  seodescription: "",
  keyword: "",
  description: "",
  isdeleted: true,
};


const EditSession = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const [seasonData, setSeasonData] = useState(data);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const dispatch = useDispatch();
  const addSeason = useSelector(({ addSessionReducer }) => addSessionReducer);

  const navigate = useNavigate();
  

  const handelChange = ({ target }) => {
    const { name, value } = target;
    if (name === "isPaid" || name === "isUpcoming" || name === "isActive") {
      const boolValue = value === "true" ? true : false;
      setSeasonData({ ...seasonData, [name]: boolValue });
    } 
    else if (name === "posterUrl") {
      const file = target.files[0]; 
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log( "posterUrl: ", e.target.result.split(",")[1], typeof(e.target.result.split(",")[1]))

          setSeasonData({ ...seasonData, [name]: e.target.result.split(",")[1] });
        };
        reader.readAsDataURL(file); 
      }
    } 
    else {
      setSeasonData({ ...seasonData, [name]: value });
    }
  };

  console.log(seasonData, "data")

  const handleEditSubmit = () => {
    dispatch(UpdateSeasonRequest(seasonData.id, seasonData));
    navigate("/season");
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
    }
  }, [addSeason.error, addSeason.result]);

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      <BackButton page={"/season"} />
      <Flex color="white" justifyContent="space-evenly">
        <Box w="45%" p="10px">
          <SessionInfo
            data={seasonData}
            setData={setSeasonData}
            handelChange={handelChange}
          />
        </Box>
        <Box w="45%" p="10px" mt="-30px">
          <SessionSeo
            data={seasonData}
            setData={setSeasonData}
            handelChange={handelChange}
          />
          <Button
            mt="30px"
            p="25px"
            float="right"
            bg="#E50813"
            color="white"
            _hover={{ color: "#E50813", bg: "white" }}
            onClick={handleEditSubmit}
          >
            Update
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditSession;
