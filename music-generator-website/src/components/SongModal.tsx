import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type ISongModalProps = {
    genre: string
    song: string
    songFetched: boolean
    setSongFetched: React.Dispatch<React.SetStateAction<boolean>>

};

const SongModal = (props: ISongModalProps) => {
    const handleClose = () => props.setSongFetched(false);

  return (
    <div>
      {" "}
      <Modal size="lg" centered show={props.songFetched} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Generated {props.genre} Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.song}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SongModal;
