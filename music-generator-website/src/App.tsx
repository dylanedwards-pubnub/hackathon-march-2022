import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import styled from "styled-components";
import CountryIcon from "./assets/CountryIcon";
import MetalIcon from "./assets/MetalIcon";
import PopIcon from "./assets/PopIcon";
import RockIcon from "./assets/RockIcon";
import SongModal from "./components/SongModal";
import ISongData from "./types/songData";

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

const SubHeading = styled.p`
  margin: 0;
  color: #5943b1;
  font-size: 18px;
`;

const Spacing = styled.div`
  padding: 16px;
`;

const SmallSpacing = styled.div`
  padding-left: 8px;
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

function App() {
  const [songFetched, setSongFetched] = useState(false);
  const [songGenre, setSongGenre] = useState("");
  const [genreRequested, setGenreRequested] = useState("country");
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState("");

  const fetchSong = async (genre: string) => {
    try {
      setLoading(true)
      const requestUrl = `${process.env.REACT_APP_API_SERVER}/${genre}`
      const songResponse = await axios.get(requestUrl);
      const songData: ISongData = songResponse.data;
      setSongGenre(songData.genre);
      setSong(songData.song);
      setSongFetched(true);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert(error);
    }
  };

  return (
    <Root>

      <Heading><a target="_blank" style={{color: "#5943B1"}} href="https://github.com/dylanedwards-pubnub/hackathon-march-2022">Lyric.generation</a></Heading>
      <Spacing />
      <SubHeading>generate lyrics from the genres below using an LSTM model trained with GloVe Embeddings</SubHeading>
      <Spacing />
      <Button
        style={{ backgroundColor: "#5943B1" }}
        size="lg"
        variant="primary"
        onClick={() => fetchSong(genreRequested)}
      >
        <ButtonRow>
          <div>Generate Song</div>
          {loading && (
            <>
              <SmallSpacing />
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </>
          )}
        </ButtonRow>
      </Button>
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
