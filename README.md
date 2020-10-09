# Velkommen til React/CICD Kurs med Norkart!
Målet med dette kurset er å gi dere en enkel mal som dere kan bruke for å komme raskt i gang med utvikling av React-kartapplikasjoner. Applikasjonen skal 'deployes' kontinuerlig på github-pages slik at dere lett kan vise andre det kule dere lager.

Når dere er ferdige her skal dere ha deres egen lenke til en live react nettside slik som dette: https://thaikari.github.io/react-bedpress/.

---

## STEG 0: Forutsetninger
Før dere starter må dere ha noe programvare installert:

1. **Git**. Følg instruksjonene som gjelder for ditt OS her: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git. Sjekk at git er instalert: 
 ```
    git --version
 ```

2. **Github**. Lag deg en bruker her https://github.com/


3. **Node.js med npm**. Det annbefales å bruke node version manager for å installere node siden dette lar deg enkelt bytte mellom node versjoner. For **Windows**: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows. For **Mac/Linux**: 
https://www.stanleyulili.com/node/how-to-install-node-and-npm-on-mac-or-linux/. Sjekk at node er installert: 
 ```
    node --version
 ```

```
    npm --version
```

4. **En code editor (vs code annbefales)**. https://code.visualstudio.com/download


---


## STEG 1: Klon og Kjør Prosjektet
1. I terminalen. Finn fram til fillokasjonen hvor dere vil lagre prosjektet og klon dette repoet:

```
   git clone https://github.com/thaiKari/react-bedpress.git
```

2. Installer npm pakkene til prosjektet. De relevante pakkene kan sees i `package.json` filen i prosjektet. Vi bruker for eksempel `mapbox-gl` biblioteket til å vise kart på netsiden.
```
   npm install
```

3. Kjør opp prosjektet lokalt:
```
   npm start
```
Dette bør åpne browseren din på http://localhost:3000/react-bedpress.

---

HURRA! Du kan nå kalle deg for en React-utvikler!

## STEG 2 Push koden til ditt eget github repo

Du har nå en enkel mal som du kan bygge videre på. For å begynne å jobbe videre med prosjektet og for at du skal kunne deploye til din egen github-pages, trenger du å flytte koden over på ditt eget github repository. 

**1. Lag deg et nytt repository på https://github.com/. Gjerne gi repositoriet samme navn som kildekoden. Velg public (nødvendig for å kunne bruke github-pages). Ikke initialiser med README, .gitignore eller licence.
![alt text](public/Images/github_new_repo.png)

2. I terminalen. Sørg for at du er inni prosjektet som du klonet og kjørte i forrige steg. `ctrl c`for å stoppe appen hvis den fortsatt kjører. 

3. Endre git 'origin' til dit nye repository:

```
git remote set-url origin http://github.com/{{YOUR_GITHUB_USERNAME}}/{YOUR_REPO_NAME}}
```

4. Dytt koden opp til ditt repository:
```
git add .
```
```
git commit -m'initial commit'
```
(Github har endret navnet på det som tidligere het 'master' til 'main')
```
git push origin main
```
Koden din skal nå være 'pushet' til ditt nye repo.


