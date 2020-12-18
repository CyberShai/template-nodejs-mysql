import config from '../config';
import { createConnection } from "mysql";

const sqlConnection = createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
});

const connect = () => {
  sqlConnection.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connect");
    testSQLQuery();
  });
};

const testSQLQuery = () => {
  const query = "";
  sqlConnection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

export default { connect };