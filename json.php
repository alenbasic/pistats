<?php 

header('Content-Type: application/json');
$pdo = new PDO('sqlite:pi_stats.db');

$stm = $pdo->query("SELECT * FROM stats WHERE date >= date('now','-1 day')");
$rows = $stm->fetchAll(PDO::FETCH_NUM);
$data = array();

foreach($rows as $row) {
	$data[] = $row;
}
	print json_encode($data);
?> 
