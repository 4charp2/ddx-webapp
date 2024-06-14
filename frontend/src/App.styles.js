import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
    font-family: 'Montserrat';
    src: url('/fonts/montserrat/Montserrat-SemiBold.ttf');
    font-style: normal;
}
 
@font-face {
    font-family: 'Inter';
    src: url('/fonts/inter/Inter-Regular.ttf');
    font-style: normal;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

body {
  font-family: 'Montserrat', sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;  
}

input,
button,
a {
    font-family: 'Montserrat', sans-serif;
}

input,
button {
  border: none;
  outline: none;
}
 button {
   cursor: pointer;
 }

ul li {
  list-style: none;
}
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  max-width: 390px;
  padding: 9px 16px 24px 16px;
`

// Переиспользуемые компоненты

// export const ButtonBlue = styled.button`
//   color: #2c3531;
//   border: 2px #afeeee solid;
//   background-color: #afeeee;
//   font-size: 16px;
//   align-self: center;
//   justify-self: flex-end;
//   cursor: pointer;

//   transition: all 0.3s ease-out;
//   padding: 10px 15px;
//   border-radius: 2px;
//   font-weight: bold;

//   &:hover {
//     background-color: #437c7e;
//     border: 2px #437c7e solid;
//   }
// `

// export const ButtonWithBorder = styled(ButtonBlue)`
//   width: 145px;
//   height: 45px;
//   color: #afeeee;
//   background-color: #2c3531;

//   &:hover {
//     color: #437c7e;
//     background-color: #2c3531;
//   }
// `

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.4px;
`

export const Heading = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
`
