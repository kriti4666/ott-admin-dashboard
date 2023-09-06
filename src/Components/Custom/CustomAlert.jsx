import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import React from "react";
import {
  deleteArtist,
  deleteEpisodeRequest,
  deleteGenre,
  deleteLanguage,
  deleteMovie,
  deleteSeasonRequest,
  deleteShowAction,
  deleteTechnician,
} from "../../redux/admin/action";
import { useDispatch } from "react-redux";

const CustomAlert = ({ isOpen, onOpen, onClose, category, id }) => {
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const handelDelete = () => {
    if (category === "Language Title") {
      dispatch(deleteLanguage(id));
      onClose();
    }
    if (category === "Genre Title") {
      dispatch(deleteGenre(id));
      onClose();
    }
    if (category === "Artist Name") {
      dispatch(deleteArtist(id));
      onClose();
    }
    if (category === "Technician Name") {
      dispatch(deleteTechnician(id));
      onClose();
    }
    if (category === "Movie") {
      dispatch(deleteMovie(id));
      onClose();
    }
    if (category === "Shows") {
      dispatch(deleteShowAction(id));
      onClose();
    }
    if (category === "Season") {
      dispatch(deleteSeasonRequest(id));
      onClose();
    }
    if (category === "Episode") {
      dispatch(deleteEpisodeRequest(id));
      onClose();
    }
  };
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {category}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handelDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CustomAlert;
