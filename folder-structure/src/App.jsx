import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import explorer from "./data/data";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  function handleInsert(item, folderId, isFolder) {
    const finalTree = insertNode(explorerData, item, folderId, isFolder);
    setExplorerData(finalTree)
  }
  return (
    <>
      <Folder explorer={explorerData} handleInsert={handleInsert}/>
    </>
  );
}

export default App;
