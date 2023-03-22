import React from 'react';
// import logo from './logo.svg';
import './App.css';

const bandNames = [
  { name: 'The Beastie Boys', members: 'Add Rock, MCA, Mike D', formed: 1979 },
  {
    name: 'Wolfmother',
    members: 'Andrew Stockdale, Chris Ross, Myles Heskett',
    formed: 2004,
  },
  {
    name: 'Cream',
    members: 'Eric Clapton, Jack Bruce, Ginger Baker',
    formed: 1966,
  },
  {
    name: 'ZZ Top',
    members: 'Billy Gibbons, Dustoy Will, Frank Beard',
    formed: 1969,
  },
];

function Welcome() {
  return <h1>The Best Music Trios Ever (according to Spencer)</h1>;
}

class Band extends React.Component<{
  name: string;
  members: string;
  formed: number;
}> {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map((oneBand) => (
        <Band {...oneBand} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <BandList />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to Ben's website</h1>

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('mountNode'));

export default App;
