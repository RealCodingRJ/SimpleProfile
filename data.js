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

function getData() {
  const button = document.querySelectorAll("button");
  button.forEach((e) => {
    e.addEventListener("click", () => {
      getButtonStacked("https://avatars.githubusercontent.com/u/198405425?v=4");
      e.style.display = displayNone();

      const app = new App();

      const ul = document.getElementById("ul");

      const apps = app.getIKnow();

      for (let i = 0; i < apps.length; i++) {
        const li = document.createElement("li");

        li.style.border = "1px solid #101010";
        li.style.margin = "0.3rem";
        li.style.width = `${880 / 2}px`;
        li.style.textAlign = "center";

        if (app.getIKnow()[0] == "React") {
          const date = document.getElementById("date");

          document.querySelectorAll("#img").forEach((e) => {
            ul.appendChild(li);
            e.addEventListener("click", () => {
              li.textContent = apps[i];
              li.addEventListener("click", () => {
                li.style.backgroundColor = "red";
              });
            });
          });
        }
      }
    });
  });
}

function getButtonStacked(src) {
  document.querySelector("#img").src = src;
}

getData();
