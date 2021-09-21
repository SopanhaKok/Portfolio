import React from "react";
import styled from "styled-components";
import CustomButton from "./Button";

const Portfolio = ({
  title,
  content,
  technologyImages,
  links,
  projectImages,
}) => {
  return (
    <StyledListContainer>
      <StyledContent>
        <h3>{title}</h3>
        <StyledText>{content}</StyledText>
        <StyledListTechnology>
          {technologyImages.map((img, index) => (
            <StyledTechnologyImage key={index} src={img} />
          ))}
        </StyledListTechnology>
        <StyledButtonContainer>
          {links.map((url, index) => (
            <a
              key={index}
              href={url.src}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", marginRight: "1rem" }}
            >
              <CustomButton>{url.title}</CustomButton>
            </a>
          ))}
        </StyledButtonContainer>
      </StyledContent>
      <StyledImageContainer>
        <StyledImageBorder>
          {projectImages.map((img, index) => (
            <StyledImage key={index} src={img} />
          ))}
        </StyledImageBorder>
      </StyledImageContainer>
    </StyledListContainer>
  );
};

const StyledListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
`;

const StyledContent = styled.div`
  flex: 3;
  margin-right: 2rem;
  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

const StyledImageContainer = styled.div`
  flex: 2;
  @media (max-width: 800px) {
    max-width: 100%;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  transform: translate(0, 8px);
  max-width: 100%;
  @media (max-width: 800px) {
    width: 230px;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-right: 0;
  }
`;

const StyledText = styled.p`
  margin: 0.5rem 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const StyledImageBorder = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? `rgba(255, 255, 255, 0.08)` : `rgba(0, 0, 0, 0.08)`};
  border-radius: 4px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: min(0.8vw, 10px);
  grid-auto-flow: row;
  overflow: hidden;
`;

const StyledListTechnology = styled.div`
  margin-bottom: 1rem;
  max-width: 25rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }
`;

const StyledTechnologyImage = styled.img`
  margin: 0.3rem 0.3rem 0 0;
`;

export default Portfolio;
