
<?php

$to = "web@navigaresrl.com"; // Scegli tu

$ogg = "Iscrizione Mailing List"; // Scegli tu

$msg = "Dati dal form del sito:\n\n\nNome: ".$_POST['name']."\nCittà: ".$_POST['city']."\nMail: ".$_POST['mail'];



// E qui che php manda l'email

mail($to,$ogg,$msg);

?>