import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

export default function FullModal({ isOpen, onClose, selectedProject }: any) {
    const truncatedUrl = selectedProject?.url
        ? selectedProject.url.slice(0, 20) +
          (selectedProject.url.length > 20 ? "..." : "")
        : "";

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ marginBottom: "2rem" }}>
                    <section
                        id="portfolio-details"
                        className="portfolio-details"
                    >
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-8">
                                    <div className="portfolio-details-slider swiper">
                                        <div className="swiper-wrapper align-items-center">
                                            <div className="">
                                                <Image
                                                    width={1000}
                                                    height={350}
                                                    src={
                                                        selectedProject?.img[0]
                                                    }
                                                    alt={selectedProject?.alt}
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="portfolio-info">
                                        <h3>Project information</h3>
                                        <ul>
                                            <li>
                                                <strong>Category</strong>:{" "}
                                                {selectedProject?.type}
                                            </li>
                                            <li>
                                                <strong>Client</strong>:{" "}
                                                {selectedProject?.client}
                                            </li>
                                            <li>
                                                <strong>Project date</strong>:{" "}
                                                {selectedProject?.date}
                                            </li>
                                            <li>
                                                <strong>Project URL</strong>:{" "}
                                                <a
                                                    target="_blank"
                                                    href={selectedProject?.url}
                                                >
                                                    {truncatedUrl}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
