<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
              <?php include_once 'header.php'; ?>
            </div>

        </div>
        <div class="row">
            <div class="col-md-12">
              <?php include_once 'content.php'; ?>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
              <?php include_once 'sidebar.php'; ?>
            </div>
            <div class="col-md-4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
            </div>
        </div>
    </div>
    <script src="js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
