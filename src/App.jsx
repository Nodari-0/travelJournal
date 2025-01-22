import "./App.css";
import Entry from "./Entry.jsx";
import Header from "./Header.jsx";
import { travelEntries } from './data'  // Import the data

function App() {
  const mappedEntries = travelEntries.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ));

  return (
    <>
      <Header />
      <main>
        {mappedEntries}
      </main>
    </>
  );
}

export default App;
