class Model {
  constructor(pool) {
    this.pool = pool;
  }

  checkLogin(req, res) {
    const { id, password } = req.body;
    this.pool.query(
      `select * from USER where USER_ID=? and USER_PASSWORD=?`,
      [id, password],
      (error, results) => {
        if (error) {
          res.send({ message: "db not connected" });
          throw error;
        } else {
          if (results.length) {
            res.send({ message: "success" });
          } else {
            res.send({ message: "failure" });
          }
        }
      }
    );
  }
}

module.exports = Model;
