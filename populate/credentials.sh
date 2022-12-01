#!/usr/bin/env bash
sleep 2
echo "Creating mongo users..."
mongo admin --host localhost --eval "db.createUser({user: 'productListUser', pwd: 'productListPassword', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
echo "Mongo users created."
echo "Populating..."
bash -c "/app/populate/import.sh localhost /app/populate"
echo "POPULATE!"
kill -2 `pgrep mongod`