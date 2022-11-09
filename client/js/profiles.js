backend_base_url = config.backend_api_url;

function deleteProfile(profile_id) {
  var url = `${backend_base_url}/profile/delete/${profile_id}/`;

  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Reload the table
      getProfileData();
    })
    .catch((error) => {
      console.log(error);
    });
}

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
        var delete_btn = document.createElement("td");

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
            resume.innerHTML = `<a href=${backend_base_url}/utils/get_file/${profile.resume} target="_blank">View Resume</a><br>
			<a href=${url} download>Download</a>`;
            resume.id = `resume-${profile.id}`;
          });

        delete_btn.innerHTML = `<button class="btn btn-danger" onclick="deleteProfile(${profile.id})"><img width=18px src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/></button>`;

        // row.appendChild(id);
        row.appendChild(name);
        row.appendChild(country);
        row.appendChild(date_of_birth);
        row.appendChild(created_at);
        row.appendChild(resume);
        row.appendChild(delete_btn);

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
