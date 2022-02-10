import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 25px;
  font-weight: 500;
  line-height: 1.3;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.2;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;


export const ShadowDiv = styled.div`
box-shadow: inset 0 0 1em #1af0ea, 0 0 1em #56f1ec;
border: solid;
border-radius: 20px;
display: flex;
flex: ${({ flex }) => (flex ? flex : 0)};
flex-direction: ${({ fd }) => (fd ? fd : "column")};
justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
align-items: ${({ ai }) => (ai ? ai : "flex-start")};
background-color: ${({ test }) => (test ? "pink" : "none")};
width: 100%;
background-image: ${({ image }) => (image ? `url(${image})` : "none")};
background-size: cover;
background-position: center;
color: white;
`;

export const MiddlePart = styled.div`
// you can change middle part background color
background-color: white;
color: lightpurple;
width: 100%;
height: 150px;
margin-top: 50px
`;

export const ButtonPart = styled.div`
// you can change button part backgroundcolor
  background-color: #ff2462;
  width: 100%;
  padding: 7px;
`;



