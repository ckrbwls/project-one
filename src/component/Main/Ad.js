import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 300px;
  font-size: 14px;
  margin: 8px;
  text-align: left;
  cursor: pointer;
`;

const ImageArea = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 10px;
`;

const Barogagi = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: rgb(255, 255, 255, 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div`
  color: black;
`;

const Detail = styled.div`
  color: grey;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  color: grey;
  gap: 10px;
`;

const Tag = styled.div`
  display: flex;
  background-color: #fbbf2c;
  border-radius: 3px;
  width: 30px;
  height: 18px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Channel = styled.div``;

const Ad = () => {
  const [isHovering, setIsHovering] = useState(0);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://3.38.67.46:8080/advertise/");
        setData(response.data);
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
    return <div>데이터없음!</div>;
  }

  return (
    <a href={data.url}>
      <Wrapper
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
      >
        <ImageArea>
          <Thumbnail src={data.thumbnail} />
          <Icon src="assets_header/clickIcon.png" />
          {isHovering ? (
            <Barogagi>
              <p className="text">자세히 알아보기</p>
            </Barogagi>
          ) : (
            ""
          )}
        </ImageArea>
        <TextArea>
          <Title>{data.title}</Title>
          <Detail>{data.detail}</Detail>
          <Info>
            <Tag>광고</Tag>
            <Channel>{data.company}</Channel>
          </Info>
        </TextArea>
      </Wrapper>
    </a>
  );
};

export default Ad;
