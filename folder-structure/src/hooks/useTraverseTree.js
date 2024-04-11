import React from "react";

const useTraverseTree = () => {
  function insertNode(tree, item, folderId, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: item,
        items: [],
      });
      return tree;
    } else {
      let latestNode = [];
      latestNode = tree.items.map((obj) => {
        return insertNode(obj, item, folderId, isFolder);
      });

      return { ...tree, items: latestNode };
    }
  }
  return { insertNode };
};

export default useTraverseTree;
