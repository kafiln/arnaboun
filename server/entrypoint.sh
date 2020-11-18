#!/usr/bin/env bash
echo "Starting the server"
echo "Waiting for postgres..."
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 0.1
done
echo "PostgreSQL started"

python manage.py db upgrade 2> /dev/null
python run.py