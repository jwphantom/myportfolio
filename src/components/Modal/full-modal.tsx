import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function FullModal({ isOpen, onClose, selectedProject }: any) {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ marginBottom: "2rem" }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {selectedProject?.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedProject?.description}
                    </Typography>
                </div>
                <Button
                    onClick={onClose}
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: "#385a64", color: "white" }}
                >
                    Fermer
                </Button>
            </Box>
        </Modal>
    );
}

const style = {
    position: "absolute",
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
};
