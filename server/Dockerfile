# TODO: use a user instead of root
FROM python:3.9.0-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/

COPY requirements.txt ./

RUN pip install  -r requirements.txt --quiet
RUN apt-get update && apt-get install -y netcat

RUN useradd -ms /bin/bash user
USER user
COPY --chown=user:user . ./

RUN chmod u+x entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
