# --- Build Stage ---
FROM python:3.7 AS base

WORKDIR /opt/dylanedwards/song-generator

RUN python3 -m venv ./venv

COPY . .
RUN pip install -r ./requirements.txt

EXPOSE 5000
CMD [ "python", "main.py" ]