import useWindowSize from "@jasonjin220/use-window-size";
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
