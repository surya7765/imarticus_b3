// Named export
// export const Home = (props) => {
// <div>
//     <h1 className='heading'>Hello {props.name}</h1>
//     <p>{props.age}</p>
// </div>
// };

import ResponsiveAppBar from "../navbar/Navbar";
import Button  from "../buttons/Button";
import Counter from "./Counter";
import Forms from "./Forms";
import ListItem from './ListItem';

// import ... from '../../../public/index.html'

function Item({ name, isPacked }) {
//     if(isPacked)
//         return <li className="item" style={{color:"red"}}>{name}</li>
    return <li className="item">{name} {isPacked && '✔'}</li>;
}

const Home = (props) => {
    // <ButtonBase
  // Without using JSX
  // React.createElement("h1",{style:{color:"red"}},"Hello World")
  // Using JSX
  function HandleEvent(){
    console.log("Clicked on the event...");
  }
  
  return (
    <div>
        {props.navbar ? <ResponsiveAppBar /> : null}
        <h1 className="heading">Hello World</h1>
        <section>
            <ul>
                <Item isPacked={true} name="Space suit" /> 
                <Button title="Edit" message="Edit Message"/>
                <Button style={{backgroundColor:"red"}} title="Delete" message="Delete Message"/>
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
        <Counter/>
        <Forms/>
        <ListItem/>
    </div>
  );
}



export default Home; // default export
