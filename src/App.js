import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeOut,
  FadeIn,
  Fade,
  Sticky,
  MoveOut,
  MoveIn,
} from "react-scroll-motion";
import "./App.css";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import RecentWork from "./Components/RecentWork";

function App() {
  return (
    <ScrollContainer>
      <div className="App position-fixed w-100 vh-100 top-0">
        <div className="upper-div"></div>
        <div className="lower-div"></div>
      </div>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(-1000, 0))}>
          <Home />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Sticky(), Fade(), MoveIn(1000, 0))}>
          <Skill />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Sticky(), Fade())}>
          <RecentWork />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
