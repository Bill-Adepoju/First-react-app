import Twitter from "./assets/Twitter.png"
import Facebook from "./assets/Facebook.png"
import Github from "./assets/GitHub.png"
import Instagram from "./assets/Instagram.png"

export default function(){
    return(
        <div className="foot">
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Github} alt="Facebook" />
        </div>
    );
};