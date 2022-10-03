const theInput = document.querySelector(".get-repos input");
const getButton = document.querySelector(".get-button");
const reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        reposData.innerHTML = "";
        repos.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
          mainDiv.append(repoName);
          let theUrl = document.createElement("a");
          let theUrlTxt = document.createTextNode("Visit");
          theUrl.append(theUrlTxt);
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
          theUrl.setAttribute("target", "_blank");
          mainDiv.append(theUrl);
          let starsSpan = document.createElement("span");
          let starsTxt = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );
          starsSpan.append(starsTxt);
          mainDiv.append(starsSpan);
          mainDiv.className = "repo-box";
          reposData.append(mainDiv);
        });
      });
  }
}
