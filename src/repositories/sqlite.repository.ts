import connection from "../db/index-sqlite";

const xxx_TABLE = 'xx';

class SQLiteRepository {

      getAll(): Promise<boolean> {

        return new Promise((resolve, reject) => {
            connection.all(
              `SELECT * FROM ${xxx_TABLE}`,
              (err: any, res: any) => {
                if (err) reject(err);
                else resolve(res);
              }
            );
          });
        }

        
    save(name: string, email: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            connection.run(`INSERT INTO  ${xxx_TABLE} (name, email) VALUES (?, ?)`, [name, email],
            (err: any, res: any) => {
                if (err) reject(err);
                resolve(true);
            }
            );
        });
        }

};

export default new SQLiteRepository();