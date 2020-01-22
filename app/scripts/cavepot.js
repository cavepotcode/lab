function init() {
  if ("serviceWorker" in navigator) {
    console.log("CLIENT: service worker registration in progress.");
    navigator.serviceWorker.register("scripts/service-worker.js").then(
      function () {
        console.log("CLIENT: service worker registration complete.");
      },
      function () {
        console.log("CLIENT: service worker registration failure.");
      }
    );
  } else {
    console.log("CLIENT: service worker is not supported.");
  }

  document.addEventListener("touchstart", onTouchAndMouse, {
    passive: true
  });
  document.addEventListener("mousewheel", onTouchAndMouse, {
    passive: true
  });
  document.addEventListener("wheel", onTouchAndMouse, {
    passive: true
  });
  document.addEventListener("touchmove", onTouchAndMouse, {
    passive: true
  });
}
