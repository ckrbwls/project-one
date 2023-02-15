import Ad from "./Ad";
import Video from "./Video";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const VideoList = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://3.38.67.46:8080/user/1/video/list/recommend"
        );
        setVideos(response.data);
        console.log(videos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </Wrapper>
    );
  }

  if (!videos) {
    return (
      <div>
        사이트설정(url창의 자물쇠)>안전하지 않은 콘텐츠>허용 으로 바꿔주세요!
      </div>
    );
  }

  return (
    <Wrapper>
      <Ad />
      {videos.map((i) => (
        <Video index={i.videoIdx} />
      ))}
      {videos.map((i) => (
        <Video index={i.videoIdx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default VideoList;
