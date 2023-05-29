const mysql = require('mysql');
const readline = require('readline');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'restoreview'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Запрос
  rl.question('Введите SQL запрос: ', (query) => {
    if (query === 'update') {
      connection.query('SELECT * FROM restouran', (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        const data = JSON.stringify(results);
        const code = `const data = ${data};\n\nexport default data;`;
        fs.writeFileSync('./data.js', code, 'utf-8');

        console.log('Данные обновлены успешно.');
      });

      connection.query('SELECT * FROM review', (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        const data = JSON.stringify(results);
        const code = `const comment = ${data};\n\nexport default comment;`;
        fs.writeFileSync('./comment.js', code, 'utf-8');
      });

      connection.query('SELECT * FROM user', (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        const data = JSON.stringify(results);
        const code = `const users = ${data};\n\nexport default users;`;

        fs.writeFileSync('./users.js', code, 'utf-8');
      });
    } else if (query === 'close') {
      connection.end();
      rl.close();
    } else {
      // Выполнение обычного запроса
      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        console.log('Результаты запроса:');
        console.log(results);
      });
    }

    // Закрытие readline после выполнения запроса
    rl.close();
  });
});
