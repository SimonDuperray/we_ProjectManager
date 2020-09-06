<?php
$data = $_POST['data'];
if(isset($_POST['mailform']))

$header="MIME-Version: 1.0\r\n";
$header.='From:"PMBot.com"<support@primfx.com>'."\n";
$header.='Content-Type:text/html; charset="uft-8"'."\n";
$header.='Content-Transfer-Encoding: 8bit';

$message='
<html>
	<body>
          <h1>Attention !</h1>
          <p>Quelqu\'un a voulu supprimer un de vos projets !</p>
	</body>
</html>
';

mail("simon.duperray4949@gmail.com", "Project Deletion Request", $message, $header);
?>

<!-- <form method="POST" action="">
	<input type="submit" value="Recevoir un mail !" name="mailform"/>
</form> -->