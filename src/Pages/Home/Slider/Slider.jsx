import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../../Components/Custom/CustomTable'
import { sliderTableBody, sliderTableHead } from '../../../Constants/SliderConstant'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSliderList } from '../../../redux/admin/action'
import CustomUserPlanTabel from '../../../Components/Custom/CustomUserPlanTable'

// sliderListReducer,
//   addSliderReducer,
//   updateSliderReducer,
//   deleteSliderReducer,

const Slider = () => {
  const [alert, setAlert] = useState({ status: "success", message: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sliderList = useSelector(({sliderListReducer}) => sliderListReducer);
  const addSlider = useSelector(({addSliderReducer}) => addSliderReducer);
  
  
  const fetchUpdatedSliderList = () => {
    dispatch(getSliderList());
  };

  useEffect(() => {
    if (addSlider.error) {
      setAlert({
        status: "error",
        message: ` ${addSlider.error}`,
      });
    } else if (addSlider.result) {
      setAlert({
        status: "success",
        message: `${addSlider.result}`,
      });
      fetchUpdatedSliderList();
    }
  }, [addSlider.error, addSlider.result]);

  useEffect(() => {
    dispatch(getSliderList());
  }, [])

    return (
      <Box bg="#1C1C1E" w="100%">
        <Button
          onClick={() => navigate("/home/slider/add_slider")}
          bg="#07BA36"
          color="white"
          fontSize="10px"
          mx="50px"
          mt="30px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Slider
        </Button>
        {/* <CustomTable tableHead={sliderTableHead} tableBody={sliderTableBody} /> */}
        {sliderList.loading ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          Loading...!
        </Text>
      ) : sliderList.error ? (
        <Text color="white" fontSize="2xl" textAlign="center">
          {sliderList.error.message}
        </Text>
      ) : (
        <CustomUserPlanTabel
          tableHead={sliderTableHead}
          tableBody={sliderList.data}
          page={"Slider"}
        />
      )}
      </Box>
  )
}

export default Slider
