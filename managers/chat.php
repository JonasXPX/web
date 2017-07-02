<?php
  $_CONFIG['datadir'] = '';
  $data = exec("cd " . $_CONFIG['datadir'] . " & grep -i '\[G\].*'");
  echo $data;
 ?>
