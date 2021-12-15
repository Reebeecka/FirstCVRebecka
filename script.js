let root = document.getElementById("root");

fetch("https://api.github.com/users/reebeecka/repos")
    // Den första .then som körs efter att fetch har lyckats hämta adressen kör en parse på strängen vi fått som resultat och skapar en json array
    .then(response => response.json())
    // Den parsade json arrayn har vi sedan tillgång till i vår sista then där vi kan börja använda vår data.
    .then(data => {
        console.log(data);

        // Vi tar våran data och skickar det vidare till en funktion. 
        printRepos(data);
    });

function printRepos(repoList) {
    for (repo in repoList) {

        let div = document.createElement("div");
        div.className = "RepoDiv"

        let name = document.createElement("h3");
        name.innerHTML = repoList[repo].name;

        let repoUrl = document.createElement("a");
        repoUrl.innerHTML = repoList[repo].html_url;
        repoUrl.href = repoList[repo].html_url;

        let pagesUrl = document.createElement("a");

        div.append(name, repoUrl);


        if (repoList[repo].has_pages) {
            pagesUrl.innerHTML = "https://reebeecka.github.io/" + repoList[repo].name;
            pagesUrl.href = "https://reebeecka.github.io/" + repoList[repo].name;

            div.append(pagesUrl);
        }


        root.append(div);
    }
}