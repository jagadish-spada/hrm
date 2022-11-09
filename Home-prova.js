//creazione connessione
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "JD",
  password: "Jagadishmysql123",
  database: "hrmdemo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//inserimento dati registrazione nel db
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO Tabella_Utenti (Email, Username, Password) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Iserimento dati avvenuto con successo");
    });
  });
//verifica se il dato è presente
 /* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM Tabella_Utenti WHERE Email = '”. $_POST['Email'].”'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Account già esistente");
    });
  });*/

$select = mysqli_query($conn, "SELECT * FROM users WHERE email = '”. $_POST['email'].”'" );
if(mysqli_num_rows($select)) {
exit('This email address is already used!' );
}
