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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomAlert from "./CustomAlert";

const CustomeMovieTable = ({ tableHead, tableBody, category }) => {
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handelEditOpen = (data) => {
    if (category === "Movie") {
      navigate("/movie/edit_movie", { state: { data } });
    }
    if (category === "Shows") {
      navigate("/shows/edit_show", { state: { data } });
    }
    if (category === "Season") {
      navigate("/season/edit_season", { state: { data } });
    }
    if (category === "Episode") {
      navigate("/episodes/edit_episode", { state: { data } });
    }
  };
  return (
    <>
      <TableContainer mt="30px" pb="30px">
        <Table
          w="90%"
          mx="30px"
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
                {/* <Td border="1px solid grey">{item.name}</Td> */}
                {item.showName ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.showName}
                  </Td>
                ) : (
                  ""
                )}

          
                {item.seasonName ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.seasonName}
                  </Td>
                ) : (
                  ""
                )}
                {item.title ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.title}
                  </Td>
                ) : (
                  ""
                )}

                <Td
                  border="1px solid grey"
                  display="flex"
                  justifyContent="center"
                >
                  <img
                    width="100%"
                    src={`data:image/jpeg;base64,${item.posterUrl}`}
                    alt="img-url"
                  />
                </Td>
                
                {item.isPaid ? (
                  <Td border="1px solid grey" textAlign="center">
                    {"Paid"}
                  </Td>
                ) : (
                  <Td border="1px solid grey" textAlign="center">
                    {"Free"}
                  </Td>
                )}
                {category === "Movie" ? (
                  <Td border="1px solid grey" textAlign="center">
                    <Button bg="#FFA41B" color="white">
                      <TbDeviceAnalytics />
                    </Button>
                  </Td>
                ) : (
                  ""
                )}

                {category === "Movie" || category === "Shows" ? (
                  item.isUpcoming ? (
                    <Td border="1px solid grey" textAlign="center">
                      {"Yes"}
                    </Td>
                  ) : (
                    <Td border="1px solid grey" textAlign="center">
                      {"No"}
                    </Td>
                  )
                ) : (
                  ""
                )}

                {item.isActive ? (
                  <Td border="1px solid grey" textAlign="center">
                    <Button bg="#07BA36" color="white">
                      {"Active"}
                    </Button>
                  </Td>
                ) : (
                  <Td border="1px solid grey" textAlign="center">
                    <Button bg="#07BA36" color="white">
                      {"InActive"}
                    </Button>
                  </Td>
                )}
                <Td border="1px solid grey">
                  <Flex gap="10px" justifyContent="center">
                    <Button
                      bg="#07BA36"
                      color="white"
                      onClick={() => handelEditOpen(item)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      bg="red"
                      color="white"
                      onClick={() => {
                        onOpen();
                        return setId(item.id);
                      }}
                    >
                      <MdDelete />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CustomAlert
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        category={category}
        id={id}
      />
    </>
  );
};

export default CustomeMovieTable;
