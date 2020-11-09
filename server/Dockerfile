FROM python:3.9.0

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/

COPY requirements.txt ./requirements.txt

RUN pip install  -r requirements.txt

COPY . ./
