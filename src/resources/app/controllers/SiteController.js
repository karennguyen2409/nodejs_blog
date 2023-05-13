const db = require('../models/Courses');

class SiteController {
  // [GET]  /
  index(req, res, next) {

    db.getCourses()
      .then( courses => res.render("home", {courses}) )
      .catch(next);

  }

  // [GET]  /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
