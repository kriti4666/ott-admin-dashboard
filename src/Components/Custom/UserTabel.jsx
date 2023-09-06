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

const UserTable = ({ tableHead, tableBody, page }) => {
  const navigate = useNavigate();
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
              <Td border="1px solid grey">{item.name}</Td>

              <Td border="1px solid grey" textAlign="center">
                {item.email}
              </Td>

              {item.analytic ? (
                <Td border="1px solid grey" textAlign="center">
                  <Button bg="#FFA41B" color="white">
                    {item.analytic}
                  </Button>
                </Td>
              ) : (
                ""
              )}
              {item.phone ? (
                <Td border="1px solid grey" textAlign="center">
                  {item.phone}
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

              <Td border="1px solid grey" textAlign="center">
                <Button bg="#07BA36" color="white">
                  {item.status}
                </Button>
              </Td>
              <Td border="1px solid grey">
                <Flex gap="10px" justifyContent="center">
                  {item.history ? (
                    <Button
                      onClick={() => navigate("/users/user_history")}
                      bg="#FF9EAA"
                      color="white"
                    >
                      {item.history}
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button bg="#07BA36" color="white">
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

export default UserTable;
