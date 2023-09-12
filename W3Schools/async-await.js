async function fetchUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
