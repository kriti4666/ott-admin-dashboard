import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import CustomModal from '../../../Components/Custom/CustomModal'
import CustomTable from '../../../Components/Custom/CustomTable'
import { HomeSectionTableBody, HomeSectionTableHead } from '../../../Constants/HomeSecConstant'
import { useNavigate } from 'react-router-dom'

const HomeSection = () => {
  const navigate = useNavigate();
    return (
      <Box bg="#1C1C1E" w="100%">
        <Button
          onClick={() => navigate("/home/section/add_Section")}
          bg="#07BA36"
          color="white"
          fontSize="10px"
          mx="50px"
          mt="30px"
        >
          <span style={{ fontSize: "30px", marginBottom: "8px" }}>+</span> Add
          Section
        </Button>
        <CustomTable tableHead={HomeSectionTableHead} tableBody={HomeSectionTableBody} />
      </Box>
  )
}

export default HomeSection
