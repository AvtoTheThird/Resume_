const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};
const target = window.document.getElementsByTagName("h1")[0];
