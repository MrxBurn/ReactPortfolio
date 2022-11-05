import styled from 'styled-components';
import './styling/firstPage.css';

const Greet = styled.h1`

    text-align: center;
    margin: 0;
    padding: 10rem 0 0;
    color: white;
    font-size: 64px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;


`

const Role = styled.h2`
    position: absolute;
    bottom: 5rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0;
    padding: 10rem 0 0;
    color: white;
    font-size: 48px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    

`


function IntroPage() : JSX.Element {
    return  <div>
        <Greet>Hi, I'm Alex</Greet>
        <Role>Software Developer</Role>
    </div>
    

    
 
}

export default IntroPage;