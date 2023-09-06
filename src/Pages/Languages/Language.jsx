import React, { useState } from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { tableHead } from "../../Constants/LanguageContant";
import { tableBody } from "../../Constants/LanguageContant";
import CustomTable from "../../Components/Custom/CustomTable";
import CustomModal from "../../Components/Custom/CustomModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddLanguage, getLanguages } from "../../redux/admin/action";
import ShowAlert from "../../Components/ShowAlert";

const initialLanguageData = {
  name: "",
  isactive: true,
};

const Language = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(initialLanguageData);
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const dispatch = useDispatch();
  const getData = useSelector(({ getLanguageReducer }) => getLanguageReducer);
  const addLanguage = useSelector(
    ({ addLanguagesReducer }) => addLanguagesReducer
  );
  const updateLanguage = useSelector(
    ({ updateLanguagesReducer }) => updateLanguagesReducer
  );
  const deleteLanguage = useSelector(
    ({ deleteLanguagesReducer }) => deleteLanguagesReducer
  );


  const handelFormSubmit = () => {
    if (data.name === "" || data.name === null) {
      setAlert({ status: "error", message: "Please fill in all the details." });
      return;
    }
    dispatch(AddLanguage(data));
    setData(initialLanguageData);
    onClose();
  };


  useEffect(() => {
    if (addLanguage.error) {
      setAlert({ status: "error", message: "Failed to create Language." });
    } else if (addLanguage.result) {
      setAlert({
        status: "success",
        message: "Language created successfully.",
      });
    }
  }, [addLanguage.result, addLanguage.error]);

  useEffect(() => {
    if (updateLanguage.error) {
      setAlert({ status: "error", message: "Failed to update Language." });
    } else if (updateLanguage.result) {
      setAlert({
        status: "success",
        message: "Language updates successfully.",
      });
    }
  }, [updateLanguage.result, updateLanguage.error]);

  useEffect(() => {
    if (deleteLanguage.error) {
      setAlert({ status: "error", message: "Failed to  Language." });
    } else if (deleteLanguage.result) {
      setAlert({
        status: "success",
        message: "Language deleted  successfully.",
      });
    }
  }, [deleteLanguage.result, deleteLanguage.error]);

  useEffect(() => {
    dispatch(getLanguages());
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
      <Button
        onClick={onOpen}
        bg="#07BA36"
        color="white"
        fontSize="10px"
        mx="50px"
        mt="30px"
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
        Languages
      </Button>
      <CustomModal
        category={"Language Title"}
        isOpen={isOpen}
        onClose={onClose}
        data={data}
        setData={setData}
        handelFormSubmit={handelFormSubmit}
      />
      {getData.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : getData.error ? (
        <Text color="red" fontSize="2xl" textAlign="center">
          {getData.error.message}
        </Text>
      ) : (
        <CustomTable
          tableHead={tableHead}
          tableBody={getData.languageData}
          category={"Language Title"}
        />
      )}
    </Box>
  );
};

export default Language;
