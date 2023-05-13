const db = require("../models/Courses");
const Courses = require('../models/index');
const slugify = require('slug');  //Convert to Slug
const { render } = require("node-sass");

class CourseController {

  // [GET]  /courses/:slug
  show(req, res, next) {
    db.getCourse_slug(req.params.slug)
      .then(course => {
        res.render("courses/show", {course});
      })
      .catch(next);
  }

  // [GET]  /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST]  /courses/store
  store(req, res, next) {

    const formData = req.body;
    formData.image = 'https://img.youtube.com/vi/' +formData.videoId+ '/sddefault.jpg';
    const course = new Courses(
      formData.id, formData.name, formData.description, formData.image,
      slugify(formData.name), formData.videoId
    );

    db.addCourse(course)  //Add data to database
    .then( () => res.redirect("/") )
    .catch(next => {});
  }

  // [GET]  /courses/:id/edit
  edit(req, res, next) {
    db.getCourse(req.params.id)
    .then( course => res.render('courses/edit', {course}) )
    .catch(next);
  }

  // [POST]  /courses/:id
  update(req, res, next) {

    const id = req.params.id; //Get course's id

    const formData = req.body;
    formData.image = 'https://img.youtube.com/vi/' +formData.videoId+ '/sddefault.jpg';
    const course = new Courses(
      formData.id, formData.name, formData.description, formData.image,
      slugify(formData.name), formData.videoId
    );

    db.updateCourse(course, id) //Update data course
    .then( () => res.redirect("/me/stored/courses") )
    .catch(next);
  }

  // [GET]  /courses/:id/delete
  /* delete(req, res, next) {
    db.deleteCourse(req.params.id)
    .then( () => res.redirect("/me/stored/courses") )
    .catch(next => {});
  } */

  // [GET]  /courses/:id/delete
  destroy(req, res, next){
    db.deleteCourse(req.params.id)
    .then( () => res.redirect("back") )
    .catch(next => {});
  }
}

module.exports = new CourseController();
