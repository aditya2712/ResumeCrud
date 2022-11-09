backend_base_url = config.backend_api_url;

// fetch the profile data from the backend
function getProfileData() {
  var url = `${backend_base_url}/profile/list/`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((profiles) => {
      console.log(profiles);

      // create table rows for each profile
      profiles.forEach((profile) => {
        var row = document.createElement("tr");

        var id = document.createElement("td");
        var name = document.createElement("td");
        var country = document.createElement("td");
        var date_of_birth = document.createElement("td");
        var created_at = document.createElement("td");
        var resume = document.createElement("td");

        id.innerHTML = profile.id;
        id.id = `id-${profile.id}`;
        name.innerHTML = profile.name;
        name.id = `name-${profile.id}`;
        country.innerHTML = profile.country;
        country.id = `country-${profile.id}`;
        date_of_birth.innerHTML = profile.date_of_birth;
        date_of_birth.id = `date_of_birth-${profile.id}`;
        created_at.innerHTML = profile.createdAt;
        created_at.id = `created_at-${profile.id}`;

        resume_file = `${backend_base_url}/utils/get_file/${profile.resume}`;
        fetch(resume_file, {
          method: "GET",
        })
          .then((response) => response.blob())
          .then((blob) => {
            var url = window.URL.createObjectURL(blob);
            resume.innerHTML = `<a href=${resume_file} target="_blank">View Resume</a><br>
			<a href=${url} download>Download</a>`;
            resume.id = `resume-${profile.id}`;
          });

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(country);
        row.appendChild(date_of_birth);
        row.appendChild(created_at);
        row.appendChild(resume);

        const profile_table = document.getElementById("profile-table");
        const tbody = profile_table.getElementsByTagName("tbody")[0];
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getProfileData();
