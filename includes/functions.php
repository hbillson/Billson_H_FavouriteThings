<?php

    //include the file we just wrote - connect 

    include("connect.php") ; // like a JS import statement

    $query = "SELECT * FROM tbl_favthings";

    $runQuery = $pdo->query($query);

    $result = array();

    while($row = $runQuery->fetch(PDO::FETCH_ASS0C)) {
        $result[] = $row;
    }

    return $result;