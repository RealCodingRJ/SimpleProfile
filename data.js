function displayNone() {
  return "none";
}

class App {
  getExperience() {
    return (
      "I am a Developer for " + (new Date().getFullYear() - 2020) + " Years"
    );
  }

  getIKnow() {
    const apps = ["React", "Vue", "C#", "TypeScript", "C++", "Rust"];
    return apps;
  }
}

function linkHeaderChange() {
  const link = document.querySelectorAll("#projectsId");
  return link;
}

function getData() {
  const linksHeaderChnage = linkHeaderChange();

  const button = document.querySelectorAll("button");
  button.forEach((e) => {
    e.addEventListener("click", () => {
      getButtonStacked("https://avatars.githubusercontent.com/u/198405425?v=4");
      e.style.display = displayNone();

      const app = new App();

      const ul = document.getElementById("ul");

      const apps = app.getIKnow();

      for (let i = 0; i < apps.length; i++) {
        const list = document.getElementById("listsDesktop");
        const li1 = document.createElement("li");
        list.appendChild(li1);
        li1.textContent = apps[i];

        const date = document.getElementById("date");
        date.textContent = app.getExperience();
      }

      for (let i = 0; i < apps.length; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);

        const img = document.getElementById("img");
        const wrapper = document.getElementById("wrapper");
        img.addEventListener("click", () => {
          wrapper.style.backgroundColor = "white";
          wrapper.style.width = 1600 / 2 + "px";
          wrapper.style.margin = "0 auto";
          li.textContent = `|  ${apps[i]}  |`;
          // li.style.backgroundColor = "white";
          wrapper.style.height = 2 * 350 + "px";
          li.addEventListener("click", () => {
            const main = document.getElementById("main");
            li.textContent = `|  ${apps[i]}  |`;
            li.style.border = "3px solid #101010";
          });

          if (wrapper.style.display === "none") {
            li.style.display = "flex";
            wrapper.style.display = "block";
            wrapper.style.backgroundColor = "white";
          }

          const date = document.getElementById("date");
          date.addEventListener("click", (e) => {
            e.preventDefault();
            li.textContent = apps[i];
          });
        });
      }
    });
  });
}

function getButtonStacked(src) {
  document.querySelector("#img").src = src;
}

getData();
