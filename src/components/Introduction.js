import React from "react";
import styled from "styled-components";
import CustomButton from "./Button";
import { fadeIn } from "../animations";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { introductionData } from "../datas/Introduction";

const Introduction = () => {
  return (
    <StyledContainer
      variants={fadeIn}
      initial="hidden"
      animate="show"
      transition={{ type: "spring", delay: 0.4, bounce: 0.3 }}
    >
      <div>
        <h1>
          Hi, I'm&nbsp;
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(introductionData.name)
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <h2 style={{ fontWeight: "lighter" }}>{introductionData.position}</h2>
      </div>
      <StyledTextContainer>
        {/* <p>{introductionData.description}</p> */}
        <p>
          Developing cross-platform mobile applications. Expoloring in Computer
          Science Field at{" "}
          <a href="https://cadt.edu.kh/" target="_blank">
            {" "}
            Cambodia Academy of Digital Technology
          </a>
          . Based in Phnom Penh, Cambodia📍
        </p>
      </StyledTextContainer>
      <StyledButtonContainer>
        <a style={{ textDecoration: "none" }} href={introductionData.cvUrl}>
          <CustomButton>CV</CustomButton>
        </a>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 164px;
  text-align: center;
`;

const StyledTextContainer = styled.div`
  margin-top: 1.5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default Introduction;
