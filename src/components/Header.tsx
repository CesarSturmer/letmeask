import { useTheme } from '../hooks/theme';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logoDark.svg';
import { useState } from 'react';

export function Header() {

  const { toggleTheme } = useTheme();
  const [logos, setLogos] = useState(false)

  const handleToggleTheme = () => {
    toggleTheme();
    setLogos(!logos)
  }
  
  return (
    <div>
      <div>
        {/* {logos === true ? (
          <img  src={logoDark} alt="Logo"/>
        ) 
          : (
            <img  src={logo} alt="Logo"/>
          )
        } */}

        
      </div>
      <div>
      
      </div>
      <button onClick={handleToggleTheme}>Mudar de cor</button>
    </div>
  )
}