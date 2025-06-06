import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header-pro">
        <img src={logo} className="Pro-logo" alt="logo" />
        <div className="Pro-main">
          <h1>
            Aryan Yaghobi
            <span className="accent-bar"></span>
          </h1>
          <h2>Software Engineer &amp; Full Stack Web Developer</h2>
          <hr className="divider" />
          <div className="Pro-about">
            <p>
              Welcome! This is a live demo of automated deployment using <b>GitHub Actions</b> &amp; <b>GitHub Pages</b>.
              <br /><br />
              I help people and teams launch, improve, and automate web projects.
            </p>
          </div>
          <div className="Pro-card">
            <h3>Need a hand with your web app or CI/CD?</h3>
            <p>
              If you want to deploy your own project or automate builds, reach out—I'm glad to help with setup or quick consulting!
            </p>
                  <a href="mailto:Aryanedu80@gmail.com" className="Pro-btn">Contact Me</a>
          </div>
          <div className="Pro-footer">
            <small>
              (This is a sample project for learning. Not a portfolio.)
            </small>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
