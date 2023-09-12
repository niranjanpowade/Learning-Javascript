function* fetchUser() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

const userFetcher = fetchUser();
const promise = userFetcher.next(); // Start the generator
promise.value.then((response) => userFetcher.next(response));
