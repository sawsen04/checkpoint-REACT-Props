import "./App.css";
import HeroSection from "./components/HeroSection";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div>
        <PlayerList />
        <audio controls autoPlay>
          <source src="/audio.mp3" type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
}

export default App;
