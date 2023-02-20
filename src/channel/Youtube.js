import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";
import Filter from "../component/Main/Filter";
import { useState } from "react";
import VideoList from "../component/Main/VideoList";
import { Link } from 'react-router-dom';


const FilterTag = [
  "Total",
  "music",
  "movie",
  "cooking",
  "mix",
  "makeup",
  "mathematics",
  "rap",
  "trend",
  "pokemon",
  "cooking",
  "fashion",
  "interior",
];

const Youtube = () => {
  const [clicked, setClicked] = useState("전체");

  const filterMap = (name) => {
    return (
      <Filter name={name} filterFunc={() => setClicked("{name}")}></Filter>
    );
  };

  return (
    <>
    <Wrapper>
      <Filters>{FilterTag.map(filterMap)}</Filters>
      <VideoList />
      
    </Wrapper>
    <Link to="/Chating" className='link'>일단</Link>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;

  width: 75vw;
  @media (max-width: 1300px) {
    width: 100vw;
  }

  height: 60px;
  gap: 10px;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  overflow-x: auto;

  .no-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export default Youtube;