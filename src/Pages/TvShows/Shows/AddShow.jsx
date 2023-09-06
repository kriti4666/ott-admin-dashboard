import { Box, Divider, Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowInfo from "./ShowInfo";
import BackButton from "../../../Components/Custom/BackButton";
import ShowSeo from "./Seo";
import { useDispatch, useSelector } from "react-redux";
import { AddShowData } from "../../../redux/admin/action";
import ShowAlert from "../../../Components/ShowAlert";

const initShowData = {
  title: "",
  artistName: "",
  languageName: "",
  technicianName: "",
  genreName: "",
  imdbRating: 0,
  movieCertificate: "",
  releaseDate: "",
  releaseTime: "",
  contentRating: 0,
  duration: "",
  isActive: true,
  posterUrl: "",
  sortInfo: "",
  description: "",
  isUpcoming: true,
  isPaid: true,
  isDeleted: true,
};

const AddShow = () => {
  const [showData, setShowData] = useState(initShowData);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addShow = useSelector(({ addShowReducer }) => addShowReducer);

  const handelChange = ({ target }) => {
    const { name, value } = target;
    if (name === "isPaid" || name === "isUpcoming" || name === "isActive") {
      const boolValue = value === "true" ? true : false;
      setShowData({ ...showData, [name]: boolValue });
    } else if (name === "posterUrl") {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setShowData({
            ...showData,
            [name]: e.target.result.split(",")[1],
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setShowData({ ...showData, [name]: value });
    }
  };

  const handleAddSubmit = () => {
    dispatch(AddShowData(showData));
    if (addShow.result) {
      navigate("/shows");
      setShowData(initShowData);
    }
  };

  // useEffect to show Add Error in the UI
  useEffect(() => {
    if (addShow.error) {
      setAlert({ status: "error", message: ` ${addShow.error}` });
    }
  }, [addShow.error]);

  return (
    <Box bg="#1C1C1E" borderRadius="8px" pb="50px">
      <BackButton page={"/shows"} />
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      <Flex color="white" justifyContent="space-evenly">
        <Box w="45%" p="10px">
          <ShowInfo
            data={showData}
            setData={setShowData}
            handelChange={handelChange}
          />
        </Box>
        <Box w="45%" p="10px" mt="-30px">
          <ShowSeo
            data={showData}
            setData={setShowData}
            handelChange={handelChange}
          />
          <Button
            mt="30px"
            p="25px"
            float="right"
            bg="#E50813"
            color="white"
            _hover={{ color: "#E50813", bg: "white" }}
            onClick={handleAddSubmit}
          >
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddShow;
