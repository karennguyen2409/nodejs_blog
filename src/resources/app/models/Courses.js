const config = require("../../../config/db/dbconfig");
const sql = require("mssql");

async function getCourses() {
  try {
    let pool = await sql.connect(config);
    let courses = await pool.request().query("SELECT * from Courses");
    // console.dir(courses.recordset); // cmd log
    return courses.recordset;
  } catch (error) {
    console.log(error);
  }
}

async function getCourse(Id) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, Id)
      .query("SELECT * from Courses where Id = @input_parameter");
    // console.dir(course.recordset); // cmd log
    return course.recordset;
  } catch (error) {
    console.log(error);
  }
}

async function getCourse_slug(slug) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.VarChar, slug)
      .query("SELECT * from Courses where slug = @input_parameter");
    // console.dir(course.recordset); // cmd log
    return course.recordset;
  } catch (error) {
    console.log(error);
  }
}

async function addCourse(course) {
  try {
    let pool = await sql.connect(config);
    let insertCourse = await pool
      .request()
      .input("course_name", course.Name)
      .input("course_description", course.Description)
      .input("course_image", course.Image)
      .input("course_slug", course.Slug)
      .input("course_videoid", course.VideoId)
      .execute("addCourse");
    // console.dir(insertCourse.recordset); // cmd log
    return insertCourse.recordset;
  } catch (err) {
    console.log(err);
  }
}

async function updateCourse(course, id) {
  try {
    let pool = await sql.connect(config);
    let updateCourse = await pool
      .request()
      .input("course_id", sql.Int, id)
      .input("course_name", course.Name)
      .input("course_description", course.Description)
      .input("course_image", course.Image)
      .input("course_slug", course.Slug)
      .input("course_videoid", course.VideoId)
      .execute("updateCourse");
    // console.dir(updateCourse.recordset); // cmd log
    return updateCourse.recordset;
  } catch (err) {
    console.log(err);
  }
}

async function deleteCourse(id) {
  try {
    let pool = await sql.connect(config);
    let deleteCourse = await pool
      .request()
      .input("course_id", id)
      .execute("deleteCourse");
    // console.dir(deleteCourse.recordset); // cmd log
    return deleteCourse.recordset;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCourses,
  getCourse,
  getCourse_slug,
  addCourse,
  updateCourse,
  deleteCourse,
};
