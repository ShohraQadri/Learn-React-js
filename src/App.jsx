import Counter from "./components/Counter"
import ShowHideButton from "./components/ShowHideButton"
import StopWatchTimer from "./components/StopWatchTimer"
import ToDo from "./components/ToDo"

function App() {


  return (
    <div style={{ border: "2px solid black", padding: "10px", width: "60%", margin: "2rem  auto" }}>
      <ShowHideButton />
      <StopWatchTimer />
      <Counter />
      <ToDo />
    </div>
  )
}

export default App
