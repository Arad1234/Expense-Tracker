import { Box, Modal } from "@mui/material";
import React from "react";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  setShowModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; modalStatus: string }>
  >;
}

const ModalComponent = ({ isOpen, setShowModal, children }: Props) => {
  const handleCloseModal = () => {
    setShowModal({ isOpen: false, modalStatus: "" });
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30rem",
          bgcolor: "background.paper",
          border: "1px solid #000",
          borderRadius: "20px",
          boxShadow: 24,
          p: 4,
          gap: "20px",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
