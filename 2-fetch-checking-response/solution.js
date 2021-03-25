const url = "https://jsonplaceholder.typicode.com/todos/x";
fetch(url).then((res) => {
  if (res.ok) {
    return res.json();
  } else {
    console.log(res.status);
  }
});
