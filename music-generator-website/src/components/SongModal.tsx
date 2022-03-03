import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const synth = window.speechSynthesis;

function speak(input: string) {
  const voices = synth.getVoices();
  const voice = voices[0];
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (input !== "") {
    var utterThis = new SpeechSynthesisUtterance(input);
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };
    utterThis.voice = voice;
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

type ISongModalProps = {
  genre: string;
  song: string;
  songFetched: boolean;
  setSongFetched: React.Dispatch<React.SetStateAction<boolean>>;
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
          <Button variant="secondary" onClick={() => speak(props.song)}>
            Sing the Song
          </Button>
          <Button variant="secondary" onClick={() => synth.cancel()}>
            Stop Singing
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SongModal;
