import {
  Button,
  Flex,
  Image,
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
import { useDispatch } from "react-redux";
import CustomModal from "./CustomModal";
import {
  EditArtist,
  EditGenre,
  EditLanguage,
  EditTechnician,
} from "../../redux/admin/action";
import CustomAlert from "./CustomAlert";

const CustomTable = ({ tableHead, tableBody, category, SeletctType }) => {
    // useDisclosure to open Edit Modal
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  // useDisclosure to open Delate Alert Dialog
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();


  const [editdata, setEditData] = useState({});
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handelEditForm = (id) => {
    if (category === "Language Title") {
      dispatch(EditLanguage(id, editdata));
      onEditClose();
      setEditData({});
    }
    if (category === "Genre Title") {
      dispatch(EditGenre(id, editdata));
      onEditClose();
      setEditData({});
    }
    if (category === "Artist Name") {
      dispatch(EditArtist(id, editdata));
      onEditClose();
      setEditData({});
    }
    if (category === "Technician Name") {
      dispatch(EditTechnician(id, editdata));
      onEditClose();
      setEditData({});
    }
  };

  const sortedTableBody = [...tableBody].sort(
    (a, b) => new Date(b.createdon) - new Date(a.createdon)
  );

  return (
    <>
      <TableContainer mt="30px" pb="30px">
        <Table
          w="95%"
          // mx="30px"
          m="auto"
          align="center"
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
            {sortedTableBody?.map((item, i) => (
              <Tr key={i}>
                {item.language ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.language}
                  </Td>
                ) : (
                  ""
                )}
                {item.type ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.type}
                  </Td>
                ) : (
                  ""
                )}
                {item.name ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.name}
                  </Td>
                ) : (
                  ""
                )}
                {item.fullname ? (
                  <Td border="1px solid grey" textAlign="center">
                    {item.fullname}
                  </Td>
                ) : (
                  ""
                )}

                {item.image ? (
                  <Td
                    border="1px solid grey"
                    display="flex"
                    justifyContent="center"
                  >
                    <Image
                      w="100px"
                      h="100px"
                      borderRadius="50%"
                      src={`data:image/jpeg;base64,${item.image}`}
                      alt={item.fullname}
                    />
                  </Td>
                ) : (
                  ""
                )}

                {category === "Language Title" || category === "Genre Title" ? (
                  item.isactive ? (
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
                  )
                ) : (
                  ""
                )}

                <Td border="1px solid grey">
                  <Flex gap="15px" justifyContent="center">
                    <Button
                      bg="#07BA36"
                      color="white"
                      onClick={() => {
                        onEditOpen();
                        return setEditData(item);
                      }}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      colorScheme="red"
                      color="white"
                      onClick={() => {
                        onAlertOpen();
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
      <CustomModal
        data={editdata}
        setData={setEditData}
        isOpen={isEditOpen}
        onClose={onEditClose}
        category={category}
        type={"Edit"}
        SeletctType={SeletctType}
        handelFormSubmit={() => handelEditForm(editdata.id)}
      />
      <CustomAlert
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        onOpen={onAlertOpen}
        category={category}
        id={id}
      />
    </>
  );
};

export default CustomTable;
