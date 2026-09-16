/*
    Purpose: Fetch from a third party api and print out the results
*/

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => {
    return res.json();
  })
  .then((dataJSON) => {
    console.log(dataJSON);
  })
  .catch((error) => {
    console.log(error);
  });
