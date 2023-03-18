import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const items = ["Warszawa", "Bielsko-Biala", "Olkusz", "Kalisz", "Rzeszow"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert onClose={() => setAlertVisibility(false)}>Hello Sir.</Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          I am warning You!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>The Button</Button>
    </div>
  );
}

export default App;
