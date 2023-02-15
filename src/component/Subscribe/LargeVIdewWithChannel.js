import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LargeVideo from "../Finder/LargeVideo";
import axios from "axios";
import Loading from "../Main/Loading";
import youtubeData from "../youtubeData.json";

const LargeVideoWithChannel = ({ index }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://3.38.67.46:8080/video/get/${index}`
        );
        setData(response.data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <Wrapper>데이터없다</Wrapper>;
  }

  return (
    <Wrapper>
      <Channel>
        <img
          className="channel-icon"
          src={youtubeData["data"][index + 28].channelThumbnail}
        />
        <div className="channel-name">{data.videoChannel}</div>
      </Channel>
      <LargeVideo index={index} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 230px;
  flex-direction: row;
  border-bottom: solid 1px lightgray;

  width: 70vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  .channel-icon {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
  .channel-name {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export default LargeVideoWithChannel;
