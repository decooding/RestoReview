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
  rl.question('Введите SQL запрос (update,adduser,addrest): ', (query) => {
    if (query === 'update') {
      // код обновления данных
      connection.query('SELECT * FROM restouran', (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        const data = JSON.stringify(results);
        const code = `const data = ${data};\n\nexport default data;`;
        fs.writeFileSync('./data.js', code, 'utf-8');
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

      console.log('Данные обновлены успешно.');

    } else if (query === 'close') {
      connection.end();
      rl.close();
    } else if (query === 'adduser') {
      // Запрос на добавление пользователя
      rl.question('Введите имя пользователя: ', (username) => {
        rl.question('Введите адрес электронной почты: ', (email) => {
          rl.question('Введите пароль: ', (password) => {
            const img_url = 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png';
            const addUserQuery = `INSERT INTO user (name, email, password, img_url) VALUES ('${username}', '${email}', '${password}', '${img_url}')`;

            connection.query(addUserQuery, (error, results) => {
              if (error) {
                console.error('Ошибка при выполнении запроса:', error);
                return;
              }
              console.log('Пользователь успешно добавлен в базу данных.');
            });

            rl.close();
          });
        });
      });

    } else if (query === 'addrest') {
      // Запрос на добавление заведения
      rl.question('Введите тип заведения: ', (type) => {
        rl.question('Введите название заведения: ', (title) => {
          rl.question('Введите адрес заведения: ', (address) => {
            const kuh = 'Европейская';
            const time = 'ПН-ВС 12:00–00:00';
            const image = 'https://astana.restolife.kz/upload/information_system_30/2/5/9/item_25932/small_information_items_property_33529.jpg';
            const text = 'Приглашаем вас отведать изысканные блюда и насладиться атмосферой уюта в нашем ресторане/баре/кафе. Наше меню порадует вас разнообразием кулинарных шедевров, приготовленных из свежих и качественных ингредиентов. Наш внимательный персонал готов сделать ваше посещение незабываемым и удовлетворить самые изысканные вкусы. Приходите и насладитесь неповторимым гастрономическим опытом в нашем заведении.';
            const rating = '⭐️⭐️⭐️⭐️⭐️';
    
            const addRestaurantQuery = `INSERT INTO restouran (type, title, kuh, time, address, image, text, Rating) VALUES ('${type}', '${title}', '${kuh}', '${time}', '${address}', '${image}', '${text}', '${rating}')`;
    
            connection.query(addRestaurantQuery, (error, results) => {
              if (error) {
                console.error('Ошибка при выполнении запроса:', error);
                return;
              }
              console.log('Заведение успешно добавлено в базу данных.');
            });

          rl.close();
        });
      });
    });

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
      rl.close();
    }
  });
});
