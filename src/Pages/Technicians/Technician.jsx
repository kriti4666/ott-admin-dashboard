import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomModal from "../../Components/Custom/CustomModal";
import CustomTable from "../../Components/Custom/CustomTable";
import {
  technicianTableHead,
} from "../../Constants/TechnicianConstant";
import { AddTechnicianData, getTechnicianList } from "../../redux/admin/action";
import { useDispatch, useSelector } from "react-redux";
import ShowAlert from "../../Components/ShowAlert";

const initTechData = {
  fullname: "",
  firstname: "",
  image: "",
  lastname: "",
  isactive: true,
  isdeleted: true,
}

//   deleteTechnicianReducer,

const Technician = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [technicianData, settTechnicianData] = useState(initTechData);
  const [alert, setAlert] = useState({ status: "success", message: "" });
  
  
  const dispatch = useDispatch();
  
    const technicianList = useSelector(
      ({ TechnicianListReducer }) => TechnicianListReducer
    );

    const AddTechnician = useSelector(
      ({ addTechnicianReducer }) => addTechnicianReducer
    );

    const updateTechnician = useSelector(
      ({ updateTechinicianReducer }) => updateTechinicianReducer
    );

    const deleteTechnician = useSelector(
      ({ deleteTechnicianReducer }) => deleteTechnicianReducer
    );

  const handelTechForm = () => {
    if (technicianData.fullname === "" || technicianData.image === "") {
      setAlert({ status: "error", message: "Please fill in all the details." });
      return;
    }
    dispatch(AddTechnicianData(technicianData));
    settTechnicianData(initTechData);
    onClose();
  }

  // useEffect to Add Tech the UI

  useEffect(() => {
    if (AddTechnician.error) {
      setAlert({ status: "error", message: "Failed to create Technician." });
    } else if (AddTechnician.result) {
      setAlert({
        status: "success",
        message: "Technician created successfully.",
      });
    }
  }, [AddTechnician.error, AddTechnician.result]);


  useEffect(() => {
    if (updateTechnician.error) {
      setAlert({ status: "error", message: "Failed to create Technician." });
    } else if (updateTechnician.result) {
      setAlert({
        status: "success",
        message: "Technician created successfully.",
      });
    }
  }, [updateTechnician.error, updateTechnician.result]);


  useEffect(() => {
    if (deleteTechnician.error) {
      setAlert({ status: "error", message: "Failed to delete Technician." });
    } else if (deleteTechnician.result) {
      setAlert({
        status: "success",
        message: "Technician deleted successfully.",
      });
    }
  }, [deleteTechnician.error, deleteTechnician.result]);


  useEffect(() => {
    dispatch(getTechnicianList());
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
        fontSize="15px"
        mx="50px"
        mt="30px"
      >
        <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
        Technician
      </Button>
      <CustomModal
        category={"Technician Name"}
        SeletctType={"Technician Image"}
        isOpen={isOpen}
        onClose={onClose}
        data={technicianData}
        setData={settTechnicianData}
        handelFormSubmit={handelTechForm}
      />
    
      {technicianList.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : technicianList.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {technicianList.error.message}
        </Text>
      ) : (
        <CustomTable
          tableHead={technicianTableHead}
          tableBody={technicianList.technicianData}
          category={"Technician Name"}
          SeletctType={"Technician Image"}
        />
      )}
    </Box>
  );
};

export default Technician;
