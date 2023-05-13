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

module.exports = config;
