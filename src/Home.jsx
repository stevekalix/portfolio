import { Link } from "react-router-dom";
import './App.css';
import './index.css';
import Education from "./Comp/Education";
import { Route, Routes } from "react-router-dom";
export default function Home() {
    return (
        <div id="root">

            <div id="home-one">

                <div className="home-one-1">
                    <h1>Portfolio Website</h1>

                </div>
                <div id="cards">

                    <div className="home-one-2">
                        <Link to="/contact">Contact</Link> <br />
                        <Link to="/experience">Experience</Link> <br />
                        <Link to="/Skils">Skills</Link> <br />
                        <Link to="/Extracurricular">Extracurricular</Link> <br />
                        <Link to="/Education">Education</Link>
                    </div>

                    <div id="cards-2">
                        <div className="hero">

                        </div>

                        <div id="text">
                            <h4>About me</h4>
                            <p>
                                Hello! I'm <strong>Manikandan</strong>, a third-year <strong>Computer Science Engineering</strong> student
                                with a strong passion for IT and technology. I am eager to pursue a career in the IT industry and
                                am continuously learning new technologies to improve my skills. So far, I have studied and gained
                                hands-on experience in areas like <strong>web development, programming languages, and software tools</strong>.
                                I enjoy exploring innovative solutions, building projects, and staying updated with the latest trends in technology.
                            </p>

                        </div>




                    </div>

                    <br />
                </div>
               <div id="footer">
  <footer>
    <p>© 2024 Manikandan. All rights reserved.</p>

    <div className="contact-info">
      <p>Email: <a href="mailto:manirevathi404@gmail.com">manirevathi404@gmail.com</a></p>
      <p>Phone: <a href="tel:+917094472460">+91 7094472460</a></p>
      <p>GitHub: <a href="https://github.com/stevekalix" target="_blank" rel="noopener noreferrer">stevekalix</a></p>
      <p>Instagram: <a href="https://www.instagram.com/innocent__child____/" target="_blank" rel="noopener noreferrer">@innocent__child____</a></p>
    </div>
  </footer>
</div>

            </div>

            

        </div>
    )
}