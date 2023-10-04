import styled from "styled-components"
import { useTheme } from "../../contexts/useTheme";

const Header2 = styled.h2`
  color: pink;
  font-size: 32px;
  text-decoration: underline;
`;

const HeaderSpecial = styled.h2`
color:green;
text-transform: uppercase;
text-decoration: bold;
`

const Home = () => {
  const {themeToggle} = useTheme();


  return (
      <div className={`wrapper ${themeToggle ? "dark" : "light"}`}>
          <Header2>This is the Home component</Header2>
          <HeaderSpecial>I am not styled</HeaderSpecial>
      </div>
  );
};

export default Home;