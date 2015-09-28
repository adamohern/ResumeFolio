<?php

echo "trying to update..."."\n\n";

echo shell_exec('/usr/bin/git pull origin master 2>&1')."\n\n";
echo shell_exec('ls -al')."\n\n";

echo "success.\n\n";

?>
