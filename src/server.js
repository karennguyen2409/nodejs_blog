var express = require("express");
var app = express();

app.get("/", function (req, res) {
  var sql = require("mssql");   // Dùng thư viện mssql

  // config for your database
  var config = {
    user: "sa",
    password: "123",
    server: "localhost\\SQLEXPRESS",  // Tên Server
    database: "my_blog_dev",
    options: {
      trustServerCertificate: true,  // Chạy mà bị lỗi thì chạy dòng này thử
    },
  };

  // connect to your database
  sql.connect(config, function (err) {  // Kết nối tới SQL
    if (err) console.log(err);    // Nếu lỗi thì xuất ra thông báo lỗi

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Courses", function (err, result) {   //Truy vấn tới CSDL
      if (err) console.log(err);  // Lỗi thì xuất ra

      // send records as a response
      res.send(result);   //Trả về Kết quả ở trang chủ
      console.dir(result); // cmd log   //Trả về Kết quả ở CMD
    });
  });
});

var server = app.listen(5000, function () {
  console.log("Server is running...");
});