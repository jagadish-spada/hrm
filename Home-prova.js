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
  console.log("Connesso!");
});

//inserimento dati registrazione nel db qui inserisco io
con.connect(function(err) {
    if (err) throw err;
    console.log("Connesso!");
    var sql = "INSERT INTO Tabella_Utenti (Email, Username, Password) VALUES ($Email,$Username,$Password)";
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
exit('Email già in uso!' ); 
}
