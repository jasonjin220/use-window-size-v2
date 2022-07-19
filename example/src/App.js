import useWindowSize from "use-window-size-v2";
import "./App.css";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="box">
      <h1>useWindowSize() Hook</h1>
      <p>
        height: {height}
        <br />
        width: {width}
      </p>
    </div>
  );
}
