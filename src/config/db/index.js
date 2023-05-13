const sql = require("mssql");

function connect() {

  // config for your database
  const config = {
    user: "sa",
    password: "123",
    server: "localhost\\SQLEXPRESS",
    database: "my_blog_dev",
    options: {
      trustServerCertificate: true,
    },
  };

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    const request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Courses", function (err, result) {
      if (err) console.log(err);

      // send records as a response
      // res.send(result);
      // console.dir(result); // cmd log
      console.log('Connect Successfully!!!');
    });
  });
}

module.exports = { connect }