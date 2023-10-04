// import { useTheme } from "../../contexts/useTheme";
import {themeContext} from "../../contexts/useTheme"
import * as React from 'react'

const About = () => {  
  const context = React.useContext(themeContext);
  // const { themeToggle } = useTheme();
  
    return (
        <div className ={`wrapper ${context.themeToggle ? "dark": "light"}`}>
            <h2>This is the About component</h2>
        </div>
    );
};

export default About;