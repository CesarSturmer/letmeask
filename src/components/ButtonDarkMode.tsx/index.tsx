import { useTheme } from '../../hooks/theme'
import sun from '../../assets/images/sun.svg'
import moon from '../../assets/images/moon.svg'
import Switch from 'react-switch';


import './style.scss'

export function ButtonDarkMode() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      checkedIcon={true}
      height={18}
      width={50}
      handleDiameter={20}
      //  offHandleColor={theme.colors.title}
      onHandleColor={theme.colors.textHighlight}
      offColor={theme.colors.grayLine}
      onColor={theme.colors.backgroundButtonDarkMode}
      uncheckedIcon={false}
      uncheckedHandleIcon={
        <div className="buttonMode">
          <img src={sun} alt="" />
        </div>
      }
      checkedHandleIcon={
        <div className="buttonModeTeste">
          <img src={moon} alt="" />
        </div>
      }
    />

  )
}