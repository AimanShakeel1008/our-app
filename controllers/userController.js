exports.login = function () {};

exports.logout = function () {};

exports.register = function (req, res) {
  res.send("thanks for trying to resgiter");
};

exports.home = function (req, res) {
  res.render("home-guest");
};
