# --- Build Stage ---
FROM python:3.9-alpine AS base

WORKDIR /opt/dylanedwards/song-generator

RUN python3 -m venv ./venv

COPY . .
RUN pip install -r ./requirements.txt
    
CMD [ "python", "main.py" ]