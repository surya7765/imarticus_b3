import Home from "./components/home/Home.js";
import React from "react";
import ThemeProvider from "./context/ThemeProvider.js";

// const App = () => ( // App component is parent component
  // <div>
  //   <Home navbar={true} /> {/* Home is child component */}
  // </div>
// );

class App extends React.Component {
  render() {
    return (
      <ThemeProvider> {/* Theme Context */}
        <Home navbar={true} /> {/* Home is child component */}
      </ThemeProvider>
    );
  }
}
export default App;
