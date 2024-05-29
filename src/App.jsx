import Counter from "./components/Counter"
import ShowHideButton from "./components/ShowHideButton"
import StopWatchTimer from "./components/StopWatchTimer"

function App() {


  return (
    <div style={{ border: "2px solid black", padding: "10px", width: "60%", margin: "2rem  auto" }}>
      <ShowHideButton />
      <StopWatchTimer />
      <Counter />
    </div>
  )
}

export default App
