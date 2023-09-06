import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CustomUserPlanTabel = ({ tableHead, tableBody, page }) => {
  const navigate = useNavigate();


  const handelEditBtn = (data) => {
    if(page === "Slider"){
      navigate("/home/slider/edit_slider", {state: {data}})
    }
  }
  return (
    <TableContainer mt="30px" pb="30px">
      <Table
        w="95%"
        // mx="30px"
        m="auto"
        align="center"
        justifyContent="center"
        color="white"
        border="1px solid grey"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Thead>
          <Tr border="1px solid grey">
            {tableHead?.map((item, i) => (
              <Th
                key={i}
                border="1px solid grey"
                textAlign="center"
                color="white"
              >
                {item.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableBody?.map((item, i) => (
            <Tr key={i}>
              {page === "Slider" ? (
                item.sliderName ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.sliderName}
                  </Td>
                ) : (
                  <Td border="1px solid grey" textAlign="center">
                    -
                  </Td>
                )
              ) : (
                ""
              )}

              {page === "Slider" ? (
                item.image ? (
                  <Td border="1px solid grey" alignItems='center'>
                    <img
                      width="220px"
                      height="90px"
                      style={{ margin: "auto"}}
                      src={`data:image/jpeg;base64,${item.image}`}
                      alt="img-url"
                    />
                  </Td>
                ) : (
                  <Td border="1px solid grey" textAlign="center">
                    -
                  </Td>
                )
              ) : (
                ""
              )}
              {item.PlanName ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.PlanName}
                </Td>
              ) : (
                ""
              )}
              {item.couponCode ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.couponCode}
                </Td>
              ) : (
                ""
              )}
              {item.Plan ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.Plan}
                </Td>
              ) : (
                ""
              )}

              {item.duration ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.duration}
                </Td>
              ) : (
                ""
              )}
              {item.NoOfUsersAllow ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.NoOfUsersAllow}
                </Td>
              ) : (
                ""
              )}
              {item.couponsUsed ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.couponsUsed}
                </Td>
              ) : (
                ""
              )}
              {item.expiryDate ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.expiryDate}
                </Td>
              ) : (
                ""
              )}

              {item.price ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.price}
                </Td>
              ) : (
                ""
              )}
              {item.adminType ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.adminType}
                </Td>
              ) : (
                ""
              )}
              {item.isactive ? (
                <Td border="1px solid grey" textAlign="center">
                  Active
                </Td>
              ) : (
                <Td border="1px solid grey" textAlign="center">
                  InActive
                </Td>
              )}

              {/* <Td border="1px solid grey" textAlign="center"></Td> */}
              <Td border="1px solid grey">
                <Flex gap="10px" justifyContent="center">
                  <Button bg="#07BA36" color="white" onClick={() => handelEditBtn(item)}>
                    <FaEdit />
                  </Button>
                  <Button bg="red" color="white">
                    <MdDelete />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomUserPlanTabel;
