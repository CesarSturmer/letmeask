import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root { 
  --background: ${props => props.theme.colors.background};
  --background-aside: ${props => props.theme.colors.backgroundAside};
  --border-input: ${props => props.theme.colors.borderInput};
  --paragraph-text:  ${props => props.theme.colors.paragraphText};
  --title: ${props => props.theme.colors.title};
  --paragraph-text-join: ${props => props.theme.colors.title};
  --paragraph-room: ${props => props.theme.colors.paragraphRoom};
  --button-login-room:  ${props => props.theme.colors.paragraphRoom};
  
  

  --paragraph: #f8f8f8; 
  
  
  
  --red: #E83F5B;
  --body-color: ${props => props.theme.colors.bodyColor};
  --gray-line: ${props => props.theme.colors.grayLine};
  --text-highlight: ${props => props.theme.colors.textHighlight};
  --blue: #5965E0;
  --blue-dark: #4953B8;
  --blue-twitter: #2AA9E0;
  --invert-white: ${props => props.theme.colors.invertWhite};
  --invert-black: ${props => props.theme.colors.invertBlack};
  --overlay: ${props => props.theme.colors.overlay};
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }



`

