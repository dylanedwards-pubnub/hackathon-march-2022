import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import CountryIcon from "./assets/CountryIcon";
import MetalIcon from "./assets/MetalIcon";
import PopIcon from "./assets/PopIcon";
import RockIcon from "./assets/RockIcon";
import SongModal from "./components/SongModal";
import ISongData from "./types/songData"

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfe97;
`;

const Heading = styled.h1`
  margin: 0;
  color: #5943b1;
`;

const SubHeading = styled.h4`
  margin: 0;
  color: #5943b1;
`;

const Spacing = styled.div`
  padding: 16px;
`;

const BigSpacing = styled.div`
  padding: 26px;
`;

const IconRow = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

function App() {
  const [songFetched, setSongFetched] = useState(false);
  const [songGenre, setSongGenre] = useState("");
  const [genreRequested, setGenreRequested] = useState("");

  const [song, setSong] = useState("");

  const fetchSong = async (genre: string) => {
    try {
      const requestUrl = `${process.env.REACT_APP_API_SERVER}/${genre}`;
      const songResponse = await axios.get(requestUrl);
      const songData : ISongData = songResponse.data
      setSongGenre(songData.genre)
      setSong(songData.song)
      setSongFetched(true)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Root>
      <Heading>Lyric.generation</Heading>
      <Spacing />
      <SubHeading>generate lyrics from any of the genres below</SubHeading>
      <Spacing />
      <Button
        style={{ backgroundColor: "#5943B1" }}
        size="lg"
        variant="primary"
        onClick={()=> fetchSong(genreRequested)}
      >
        Generate Song
      </Button>{" "}
      <BigSpacing />
      <IconRow>
        <div onClick={() => setGenreRequested("country")}>
          <CountryIcon genre="country" selectedGenre={genreRequested} />
        </div>
        <BigSpacing />
        <div onClick={() => setGenreRequested("pop")}>
          <PopIcon genre="pop" selectedGenre={genreRequested} />
        </div>
        <BigSpacing />{" "}
        <div onClick={() => setGenreRequested("metal")}>
          <MetalIcon genre="metal" selectedGenre={genreRequested} />
        </div>
        <BigSpacing />{" "}
        <div onClick={() => setGenreRequested("rock")}>
          <RockIcon genre="rock" selectedGenre={genreRequested} />
        </div>
      </IconRow>
      {songFetched && (
        <SongModal
          genre={songGenre}
          song={song}
          songFetched={songFetched}
          setSongFetched={setSongFetched}
        />
      )}
    </Root>
  );
}

export default App;
