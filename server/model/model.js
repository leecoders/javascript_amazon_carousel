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

  getAllUsers(req, res) {
    this.pool.query(`select * from USER`, (error, results) => {
      if (error) {
        res.send({ message: "db not connected" });
        throw error;
      } else {
        res.send({ message: "success", data: results });
      }
    });
  }

  changeUserGrade(req, res) {
    const { id, destGrade } = req.body;
    this.pool.query(
      `update USER set USER_GRADE=? where USER_ID=?`,
      [destGrade, id],
      (error, results) => {
        if (error) {
          res.send({ message: "db not connected" });
          throw error;
        } else {
          res.send({ message: "success" });
        }
      }
    );
  }
}

module.exports = Model;
