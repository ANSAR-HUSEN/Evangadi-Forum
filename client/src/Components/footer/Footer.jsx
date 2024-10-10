import React from 'react'
import "./footer.css"
import evangadiTransLogo from "../../assets/images/evangadiTransparentLogo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="icons__container">
          <div>
            <img src={evangadiTransLogo} alt="Evangadi Logo" target="_blank" />
          </div>

          <div className="icons">
            <a href="https://www.facebook.com/evangaditech" target="_blank">
              <FacebookOutlinedIcon />
            </a>
            <a href="https://www.instagram.com/evangaditech/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@EvangadiTech" target="_blank">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div className="links__container">
          <h2>Useful Links</h2>
          <ul className="list">
            <li>
              <a href="https://www.evangadi.com/legal/terms/" target="_blank">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="https://www.evangadi.com/legal/privacy/" target="_blank">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="contact__container">
          <h2>Contact Info</h2>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer