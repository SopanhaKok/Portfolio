import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#ffffff',
  h: '#3C3F44',
  span: '#0077CC',
  navBar: '#0077CC',
  fontColor: '#3C3F44',
  buttonColor: '#519DFF',
  backgroundButton: '#FFFFFF',
  border: '2px solid #519DFF',
  hoverBorderButton: '2px solid #519DFF',
  hoverBackgroundButton: '#519DFF',
}

export const darkTheme = {
  body: '#0E192D',
  h: '#CED6F3',
  span: '#0ACF83',
  navBar: '#0ACF83',
  fontColor: '#CED6F3',
  buttonColor: '#0ACF83',
  backgroundButton: '#0e192d',
  border: '2px solid #0ACF83',
  hoverBorderButton: '2px solid #64f9b2',
  hoverBackgroundButton: '#64f9b2',
}

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
    border:${(props) => props.theme.border};
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem 2rem;
    cursor: pointer;
    &:hover {
        border: ${(props) => props.theme.hoverBorderButton};
        background-color: ${(props) => props.theme.hoverBackgroundButton};
        font-family: 'Poppins', sans-serif;
        color:  #FFFFFF ;
    }
}
.Home {
    max-width: 800px;
    margin: 0 auto;
    color: #64F9B2;
    @media (max-width: 800px) {
        width:100%;
        max-width:100%;
      }
}

.icon {
    color: ${(props) => props.theme.fontColor};
}

.navbar {
    h3,div{
        color:  ${(props) => props.theme.navBar};
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


`
