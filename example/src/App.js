import useWindowSize from "use-window-size-v2";
import "./App.css";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="box">
      <h1>useWindowSize() Hook</h1>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  );
}
