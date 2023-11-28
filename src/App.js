import Home from "./components/home/Home.js";

const App = () => ( // App component is parent component
  <div>
    <Home name="Sunny" age="19" >
      <p>Sunny</p>
    </Home> {/* Home is child component */}
  </div>
);

export default App;
