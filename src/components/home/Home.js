// Named export 
// export const Home = (props) => {
    // <div>
    //     <h1 className='heading'>Hello {props.name}</h1>
    //     <p>{props.age}</p>
    // </div>
// };

import Navbar from "../navbar/Navbar";


const Home = (props) => (
    // Without using JSX
    // React.createElement("h1",{style:{color:"red"}},"Hello World")
    // Using JSX
    <div>
        <Navbar />
        {props.children}
        <h1 className='heading'>Hello {props.name}</h1>
        <p>{props.age}</p>
    </div>
);

export default Home;  // default export
