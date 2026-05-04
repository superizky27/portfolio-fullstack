const container = document.getElementById("project-list");

fetch("http://localhost:3000/projects")
  .then(res => res.json())
  .then(data => {
    data.forEach(project => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));