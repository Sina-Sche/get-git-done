import "./App.css";
import FormElement from "./components/Form";
import ListElement from "./components/List";
import { useState } from "react";
import { getToDos } from "./utils/storage";

function App() {
  const [currentToDos, setCurrentToDos] = useState(getToDos());

  return (
    <main>
      <h1>GetGitDone</h1>
      <FormElement setCurrentToDos={setCurrentToDos} />
      <ListElement toDoItems={currentToDos} setCurrentToDos={setCurrentToDos} />
    </main>
  );
}
export default App;
