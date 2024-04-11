const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "assets",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "sample1.txt",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "sample2.txt",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "components",
          isFolder: true,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "package.json",
      isFolder: false,
      items: [],
    },
    {
      id: "9",
      name: "package-lock.json",
      isFolder: false,
      items: [],
    },
    {
      id: "8",
      name: "index.html",
      isFolder: false,
      items: [],
    },
    {
      id: "10",
      name: "Main File",
      isFolder: true,
      items: [],
    },
  ],
};
export default explorer