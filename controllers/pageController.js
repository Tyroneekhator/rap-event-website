function renderHome(req, res) {
  res.render("pages/home", { pagetitle: "Line-up" });
}

function renderLineup(req, res) {
  res.render("pages/lineup");
}

function renderStages(req, res) {
  res.render("pages/stages");
}

function renderAdvice(req, res) {
  res.render("pages/advice");
}

function renderContact(req, res) {
  res.render("pages/contact");
}

function renderForm(req, res) {
  res.render("pages/form");
}

module.exports = {
  renderHome,
  renderLineup,
  renderStages,
  renderAdvice,
  renderContact,
  renderForm,
};
