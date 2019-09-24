
<!DOCTYPE html>
<html>
  <head>
    <title>Raspberry Pi - Monitoring Stats</title>
    <style type="text/css">
      #chart-container {
        width: 640px;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div id="chart-container">
      <canvas id="temperature"></canvas>
    </div>
    <div id="chart-container">
      <canvas id="memory-usage"></canvas>
    </div>
    <div id="chart-container">
      <canvas id="cpu-usage"></canvas>
    </div>
    <!-- javascript -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/moment.min.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
  </body>
</html>

