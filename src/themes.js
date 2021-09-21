import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  h: "#3C3F44",
  span: "#0077CC",
  navBar: "#0077CC",
  fontColor: "#3C3F44",
  buttonColor: "#519DFF",
  stickNavBar: "#FFFFFF",
  backgroundButton: "#FFFFFF",
  boxShadow: "inset 0 0 0 0 #0077CC",
  border: "2px solid #519DFF",
  hoverBorderButton: "2px solid #0077CC",
  hoverBoxShadowButton: "inset 300px 0 0 0 #0077CC",
  hoverBackgroundButton: "#519DFF",
};

export const darkTheme = {
  body: "#0E192D",
  h: "#CED6F3",
  span: "#0ACF83",
  navBar: "#0ACF83",
  fontColor: "#CED6F3",
  buttonColor: "#0ACF83",
  stickNavBar: "#FFFFFF",
  backgroundButton: "#0e192d",
  boxShadow: "inset 0 0 0 0 #0ACF83",
  border: "2px solid #0ACF83",
  hoverBorderButton: "2px solid #64f9b2",
  hoverBoxShadowButton: "inset 300px 0 0 0 #0ACF83",
  hoverBackgroundButton: "#64f9b2",
};

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}
#root {
    background-color:  ${(props) => props.theme.body};
      font-family: 'Poppins', sans-serif;
}

div {
    color: ${(props) => props.theme.fontColor};
}

span {
    color: ${(props) => props.theme.span};
}

h3,h2 {
    color: ${(props) => props.theme.h};
}

button {
    color: ${(props) => props.theme.buttonColor};
    background-color: ${(props) => props.theme.backgroundButton};
    border: ${(props) => props.theme.border};
    box-shadow:  ${(props) => props.theme.boxShadow};
    transition: all ease 0.7s ;
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem 2rem;
    cursor: pointer;
    &:hover {
        border: ${(props) => props.theme.hoverBorderButton};
        box-shadow:  ${(props) => props.theme.hoverBoxShadowButton};
        background-color: ${(props) => props.theme.hoverBackgroundButton};
        color:  #FFFFFF ;
    }
}
.Home {
    color: #64F9B2;
    @media (max-width: 800px) {
        width:100%;
        max-width:100%;
      }
}

.icon {
    color: ${(props) => props.theme.fontColor};
}

nav {
    background-color: ${(props) => props.theme.body};
}

.navbar {
    left: 0;
    right: 0;
    position: fixed;
    height: 56px;
    transition: all 0.25s ease;
    width: 100%;
    z-index: 99;
    h3,div{
        color:  ${(props) => props.theme.navBar};
    }   
}

.active {
    box-shadow: 10px 5px 5px #00000025;
    height: 100px;
    div,h3,s {
        // color:  ${(props) => props.theme.stickNavBar};
    }
}

.education  {
    span,div{
        color:  ${(props) => props.theme.fontColor};
    }

    h6:nth-child(2) {
        color:  ${(props) => props.theme.navBar};
    }

    .line {
        span {
            border-color: ${(props) => props.theme.navBar};
            color:${(props) => props.theme.fontColor};
        }
        
    }
}

.Typewriter {
    display: inline-block;
}


`;
