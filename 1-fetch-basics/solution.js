const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
