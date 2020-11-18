# TODO: use a user instead of root
FROM python:3.9.0-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/

COPY requirements.txt ./

RUN pip install  -r requirements.txt

COPY . ./
# install system dependencies
RUN apt-get update && apt-get install -y netcat


RUN chmod u+x entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
