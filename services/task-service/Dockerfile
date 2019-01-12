FROM chuckjrussell/python-flask:latest

# We copy just the requirements.txt first to leverage Docker cache
COPY ./src /app

WORKDIR /app
CMD ["python", "main.py"]