<?php
  echo 'test';
  $_CONFIG['datadir'] = '/home/ubuntu/enderhosting/Servers/server4720/plugins/Legendchat/logs/';
  //$data = exec("cd " . $_CONFIG['datadir'] . " & cat 2017-07-02.txt | grep -i '\[g\].*'", $ar);
  $data = shell_exec("sudo cat /home/ubuntu/2017-07-02.txt");
  echo $data;
 ?>
