const fs = require("fs");

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

  checkItemNameDuplicate(req, res) {
    const { name } = req.body;
    this.pool.query(
      `select * from ITEM where ITEM_NAME=?`,
      [name],
      (error, results) => {
        if (error) {
          res.send({ message: "db not connected" });
          throw error;
        } else {
          res.send({ message: "success", data: results.length });
        }
      }
    );
  }

  addItem(req, res) {
    const itemImage = req.file;
    const { name, category, summary } = req.body;
    this.pool.query(
      `insert into ITEM values (?, ?, ?, ?)`,
      [itemImage.originalname, name, category, summary],
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

  getItemInfoList(req, res) {
    const { categoryName } = req.body;
    this.pool.query(
      `select * from ITEM where ITEM_CATEGORY=?`,
      [categoryName],
      (error, results) => {
        if (error) {
          res.send({ message: "db not connected" });
          throw error;
        } else {
          res.send({ message: "success", data: results });
        }
      }
    );
  }
}

module.exports = Model;
