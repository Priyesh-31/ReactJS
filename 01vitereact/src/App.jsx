
import Chai from "./chai.jsx";

function App() {
  const username = "Priyesh Raj";
  return (
    <>
    <h1>
      Hello, React! I'm your first React+vite App made by {username}.
    </h1> 
    {/*  username variable called inside {} -- JSX  evaluated expression */}
    <h2>Happy Learning!</h2>
    <Chai /> 
    {/* function call to chai component */}
    </>
  )
}

export default App
