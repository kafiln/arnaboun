import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(console.log);
  }, []);
  return <div>Hello</div>;
}

export default App;
