!(function () {
  var a = localStorage["dark-mode"],
    r = !1;
  if (null === a) r = window.matchMedia("(prefers-color-scheme: dark)").matches;
  else
    try {
      r = JSON.parse(a).darkMode;
    } catch (e) {
      return (
        console.warn("Error initializing angular-dark-mode"),
        void console.warn(e)
      );
    }
  document.body.classList.add(
    "dark-mode-preloading",
    r ? "dark-mode" : "light-mode",
  );
})();
