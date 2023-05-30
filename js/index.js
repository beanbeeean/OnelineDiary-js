document.addEventListener("DOMContentLoaded", function () {
  console.log("DOCUMENT READY!!");
  init();
});

const init = () => {
  console.log("init() CALLED!!");

  initViews();
  addEvents();
};

const initViews = () => {
  console.log("initViews() CALLED!!");
};

const addEvents = () => {
  console.log("addEvents() CALLED!!");
};
