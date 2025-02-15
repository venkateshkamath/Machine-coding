import React, { useState } from "react";

const Folder = ({ handleInsert, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isFolder: null,
    isVisible: false,
  });

  function handleNewFolder(e, isFolder) {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isFolder,
      isVisible: true,
    });
  }
  function onAddFolder(e) {
    if (e.target.value && e.keyCode === 13) {
      //adding logic
      handleInsert(e.target.value, explorer.id, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  }
  if (explorer.isFolder) {
    return (
      <div>
        <div
          style={{
            // marginBottom: "2rem",
            padding: "5px",
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
          }}
          onClick={() => setExpand((c) => !c)}
        >
          <span> 📁{explorer.name}</span>
          <div style={{ display: "flex", gap: "3px" }}>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
          </div>
        </div>
        <div style={{ marginLeft: "25px", display: expand ? "block" : "none" }}>
          {showInput.isVisible && (
            <div className="input-container">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              />
            </div>
          )}

          {explorer.items.map((item) => {
            return (
              <div>
                <Folder handleInsert={handleInsert} explorer={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄FILE{explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
