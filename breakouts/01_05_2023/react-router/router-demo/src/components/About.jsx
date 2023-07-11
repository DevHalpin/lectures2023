import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const About = () => {  

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=> {
      navigate('/')
    }, 3000)
  }, [navigate])
  
    return (
        <div>
            <h2>This is the About component</h2>
        </div>
    );
};

export default About;