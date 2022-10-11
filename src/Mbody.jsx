import MailLogo from "./assets/Mail.png"
import Linkdln from "./assets/linkedin.png"

export default function Body(){
    return(
        <div className="mainBody">
            <div className='nametag'>
                <h1 className='name'>Laura Smith</h1>
                <h4 className='role'>Frontend Developer</h4>
                <a className='webLink' href="https://google.com">laurasmith.website</a>
            </div>
            <div className="buttons">
                <button className="mail-button btn">
                    <div><img src={MailLogo} alt="mail logo" /></div>
                    <div><p>Email</p></div>
                </button>
                <button className="link-button btn">
                    <div><img src={Linkdln} alt="linkdin logo" /></div>
                    <div><p>Linkedln</p></div>
                </button>
            </div>
            <div className="about">
                <h2 className="smallHead">About</h2>
                <p className="smallPara">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interest">
                <h2 className="smallHead">Interests</h2>
                <p className="smallPara">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    );
};