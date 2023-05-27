const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'restoreview'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Выполнение запросов к базе данных и сохранение результатов
connection.query('SELECT * FROM restouran', (error, results) => {
  if (error) {
    console.error('Error executing the query:', error);
    return;
  }
  const data = JSON.stringify(results);
  const code = `const data = ${data};\n\nexport default data;`;
  fs.writeFileSync('./src/Data/data.js', code, 'utf-8');
});

connection.query('SELECT * FROM review', (error, results) => {
  if (error) {
    console.error('Error executing the query:', error);
    return;
  }
  const data = JSON.stringify(results);
  const code = `const comment = ${data};\n\nexport default comment;`;
  fs.writeFileSync('./src/Data/comment.js', code, 'utf-8');
});

connection.query('SELECT * FROM user', (error, results) => {
  if (error) {
    console.error('Error executing the query:', error);
    return;
  }

  // Генерация оператора присваивания или вызова функции
  const data = JSON.stringify(results);
  const code = `const users = ${data};\n\nexport default users;`;

  fs.writeFileSync('./src/Data/users.js', code, 'utf-8');
});

// Закрытие соединения с базой данных
connection.end();
