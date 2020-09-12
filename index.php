<?php
$page = isset($_GET['page']) ? $_GET['page'] : '';
$className = '';


    if($page==''){
        $page = 'main';
        $className = 'main-page';
    }
    else {
        $className = 'dark-theme';
    }

//    if($page=='speaker/geff-gothelf' || $page=='speaker/david-m-hogue' || $page=='speaker/ani-avanian'
//    || $page=='speaker/manuel-lima' || $page=='speaker/vitaly-friedman' || $page=='speaker/amanda-stockwell'
//    || $page=='speaker/anna-vasyukova' || $page=='speaker/rafayel-mkrtchyan'
//    || $page=='workshop/vitaly-friedman' || $page=='workshop/amanda-stockwell'
//        || $page=='purchase'  || $page=='code-of-conduct' || $page=='terms-and-conditions') {
//        $className = 'dark-theme';
//    }


    if($page=='speaker/geff-gothelf' || $page=='speaker/david-m-hogue' || $page=='speaker/ani-avanian'
        || $page=='speaker/manuel-lima' || $page=='speaker/vitaly-friedman' || $page=='speaker/amanda-stockwell'
        || $page=='speaker/anna-vasyukova' || $page=='speaker/rafayel-mkrtchyan') {
        $headerTitle = 'Speakers';
    }
    elseif ( $page=='workshop/vitaly-friedman' || $page=='workshop/amanda-stockwell') {
        $headerTitle = 'Workshops';
    }
    elseif ($page=='code-of-conduct') {
        $headerTitle = 'Code of conduct';
    }
    elseif ($page=='terms-and-conditions') {
        $headerTitle = 'Terms and conditions';
    }
    elseif ($page=='privacy-policy') {
        $headerTitle = 'Privacy policy';
    }
    elseif ($page=='purchase') {
        $headerTitle = 'Purchase';
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>design2science</title>
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="fonts/icomoon/style.css" type="text/css">
        <link rel="stylesheet" href="css/global.css" type="text/css">

        <link rel="stylesheet" type="text/css" href="libs/slick/slick.css"/>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" type="text/css" media="all" />

    </head>
    <body id="body">
        <div class="page-wrapper <?=$className?>">
            <div class="cursor" id=cursor></div>
            <?php include('inc/header.php'); ?>
            <?php include('inc/navigation.php'); ?>
            <?php include('inc/content.php'); ?>
        </div>

        <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="libs/slick/slick.min.js"></script>

        <script src="js/main.js"></script>
        <script src="js/scroll.js"></script>
        <script src="js/carousel.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init({
            duration: 1300,
            offset: 20,
            once: true
          });
        </script>

    </body>
</html>
