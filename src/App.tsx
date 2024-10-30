import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Tokyo", "San Francisco", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVis] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVis(false)}> Swag </Alert>}
      <Button onClick={() => setAlertVis(true)}>Swag Button</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
