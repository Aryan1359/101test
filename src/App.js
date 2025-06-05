import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Use semantic heading structure */}
        <h1>Aryan Yaghobi</h1>
        <h2>Software Engineer & Full Stack Web Developer</h2>

        {/* Use <section> or <main> for content blocks */}
        <section>
          <p>
            This site is a live demonstration of automated deployment using GitHub Actions and GitHub Pages.
          </p>
          <p>
            Need help setting up your own web project, or want advice on CI/CD, deployment, or React? <br />
            I’m happy to share what I know—reach out for a quick consultation!
          </p>
        </section>

        {/* Use a <footer> for copyright/disclaimer type info */}
        <footer style={{ fontSize: '0.9em', color: '#888', marginTop: '20px' }}>
          <p>(This is a sample project for learning, not a portfolio.)</p>
        </footer>

      </header>
    </div>
  );
}

export default App;