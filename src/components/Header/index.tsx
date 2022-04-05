import { useState } from "react";

import logo from "../../assets/logo.svg";
import Home from "../../assets/home-solid.svg";
import Documents from "../../assets/draft.svg";
import PowerOff from "../../assets/power-off-solid.svg";

import * as S from './styled';
import { Link } from "react-router-dom";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <S.Container>
      <S.Button clicked={click} onClick={() => handleClick()}>
        Click
      </S.Button>
      <S.SidebarContainer clicked={click}>
        <S.Logo>
          <img src={logo} alt="logo" />
        </S.Logo>
        <S.SlickBar clicked={click}>
          <S.Item
            onClick={() => setClick(false)}
            className={(props) => props.isActive ? 'active' : ''}
            to="/home"
          >
            <img src={Home} alt="Home" />
            <S.Text clicked={click}>Home</S.Text>
          </S.Item>
          <S.Item
            onClick={() => setClick(false)}
            className={(props) => props.isActive ? 'active' : ''}
            to="/projects"
          >
            <img src={Documents} alt="Documents" />
            <S.Text clicked={click}>Projects</S.Text>
          </S.Item>
        </S.SlickBar>

        <S.Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <S.Details clicked={profileClick}>
            <S.Name>
              <h4>Jhon&nbsp;Doe</h4>
              <Link to="/profile" onClick={() => setprofileClick(false)}>view&nbsp;profile</Link>
            </S.Name>

            <S.Logout>
              <img src={PowerOff} alt="logout" />
            </S.Logout>
          </S.Details>
        </S.Profile>
      </S.SidebarContainer>
    </S.Container>
  );
}