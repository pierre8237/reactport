import "./App.css";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <h1>Pierre Calmels</h1>
      <h2>Web Developer</h2>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
      <Projects />
    </div>
  );
}

export default App;
