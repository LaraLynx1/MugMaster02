import landingPage from "./screens/Landingpage.js"
import tutorialPage from "./screens/tutorial.js"
import loadPage from "./screens/Loadpage.js"
import gamePage from "./screens/Gamepage.js"
import winPage from "./screens/Winpage.js"
import losePage from "./screens/Losepage.js"
import qrPage  from "./screens/Qrpage.js"

import socket from "./socket.js";

export let Screen;

const router = new Router({ // check this for more features with Router: https://github.com/Graidenix/vanilla-router
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

router.add("/", async () => {
  Screen = 'landingPage';
  console.log(Screen);
  clearScripts();
  landingPage();
});


router.add("/tutorialPage", async () => {
  Screen = 'tutorialPage';
  console.log(Screen);
  clearScripts();
  tutorialPage();
});

router.add("/loadPage", async () => {
  Screen = 'loadPage';
  console.log(Screen);
  clearScripts();
  loadPage();
});

router.add("/gamePage", async () => {
  clearScripts();
  gamePage();
});

router.add("/winPage", async () => {
  clearScripts();
  winPage();
});

router.add("/losePage", async () => {
  clearScripts();
  losePage();
});

router.add("/qrPage", async () => {
  clearScripts();
  qrPage();
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

router.check();

export { router, socket };
