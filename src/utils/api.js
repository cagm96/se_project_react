const baseUrl = "http://localhost:3001";

// All clothing items should be fetched and placed into
// the application state. Make a GET request:

//GET http://localhost:3001/items
export const item = () => {
  const items = fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      console.log("its working?");
      console(res);
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });

  return console.log("it works");
};
