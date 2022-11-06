import { RefObject } from 'react';
import './styling/secondPage.css'

//images
import dsuk from './assets/dsuk.gif';
import unityPlatformer from './assets/2dPlatformer.gif';
import cyberApp from './assets/dissertation.png';
import phoney from './assets/phoney.gif';
import snake from './assets/snake.gif';
import iot from './assets/iot.jpg';
import HorizontalScroll from 'react-scroll-horizontal';
function SecondPage(): JSX.Element {
    return (
        <>
           
            <div id='container'>


                <div id='project'>
                    <h1>DSUK App</h1>
                    <img id='image' src={dsuk} />
                    <p>This was a group project which involved Durham Constabulary as being the client. For this project, I had to learn how to develop mobile applications and this is when I found Flutter. The app relates to information about drugs, areas in the North East that consume drugs the most, a live chat, a reporting system and many more! This project ended up in winning first place out of 5 other teams. I was the one responsible with coding the whole project</p>
                </div>
                <div id='project'>
                    <h1>2D Unity Platformer</h1>
                    <img id='image' src={unityPlatformer} />
                    <p>This game has been developed as part of a module in my second year at the university. I taught myself how to use Unity along with C# to develop a 2D Platformer. This game includes complex mechanics such as movement, enemy AI and a combat system</p>
                </div >
                <div id='project'>
                    <h1>Cyber Training App</h1>
                    <img id='image' src={cyberApp} />
                    <p>As part of my dissertation, I had to develop a web application that allows any student to learn more about cybersecurity and online threats and to be able to assess their knowledge by taking a quiz</p>
                </div>
                <div id='project'>
                    <h1>Adventure of Phoney</h1>
                    <img id='image' src={phoney} />
                    <p>This is a 2D Platformer that I want to develop to learn a new skill which is developing games in Godot. This engine makes use of its own programming language, GD Script, which is similar to Python. This is still a work in progress. The idea behind it is that you are a phone that has to fight with social media to prevent your battery from being drained</p>
                </div>
                <div id='project'>
                    <h1>Automated Snake</h1>
                    <img id='image' src={snake} />
                   <p>This project has been done during the Artificial Intelligence module. This is an automated snake game that plays itself and gets better by each generation because it makes use of a deep neural network</p>
                </div>
                <div id='project'>
                    <h1>Internet of Things</h1>
                    <img id='image' src={iot} />
                   <p>This project was about two AdaFruit Micro-Controllers that were connected through WiFi and one of them acted like a door locking system and the other one recorded data on the temperature and humidity inside a room</p>
                </div>


            </div>
        </>







    )
}


export default SecondPage;