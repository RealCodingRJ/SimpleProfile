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

        li.textContent = apps[i];

        li.style.border = "1px solid #101010";
        li.style.margin = "1rem";
        li.style.width = `${360 / 2}px`;
        li.style.textAlign = "center";
        ul.appendChild(li);
      }
    });
  });
}

function getButtonStacked(src) {
  document.querySelector("#img").src = src;
}

getData();
