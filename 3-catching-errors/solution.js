const url = "https://jsonplaceholder.typicode.com/todos/x";
fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    }
  })

  //   .then((data) => {
  //     console.log(data);
  //   })
  .catch((error) => {
    console.log(error.toString());
    console.log(error);
  });
