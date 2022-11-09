function create_profile(event) {
  event.preventDefault();

  // Get the form data
  var form_data = new FormData(document.getElementById("profile_form"));
  var new_form_data = new FormData();
  for (const [key, value] of form_data) {
    console.log(`${key}: ${value}\n`);
    new_form_data.append(key, value);
  }
  // Send the data to backend
  fetch(`${config.backend_api_url}/profile/create`, {
    method: "POST",
    body: new_form_data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   Redirect to the profile list page
      window.open("profiles.html", "_self");
    })
    .catch((error) => {
      console.log(error);
    });
}
