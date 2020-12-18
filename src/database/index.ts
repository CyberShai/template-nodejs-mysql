import config from '../config';
import { createPool, Pool } from "mysql";

let pool: Pool;

const getPool = () => {
  if (pool)
    return pool;

  pool = createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
  });
  
  return pool;
};


export default { getPool };