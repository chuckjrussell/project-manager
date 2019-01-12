from flask import Flask, make_response, request, current_app, jsonify
from flask_cors import CORS, cross_origin
from model import *
import json
import jsonpickle

app = Flask(__name__)
CORS(app)

@app.route("/task", methods=['GET'])
def get_tasks():
    global arr
    return jsonpickle.encode(task_arr)
    
@app.route("/tasks", methods=['POST'])
def update_task():
    req_data = request.get_json()
    received_task = Task(0, req_data["item"], req_data["dueDate"], req_data["assignee"], req_data["category"], req_data["status"])
    if("id" in req_data):
        print("update task request")
        received_task.id = req_data["id"]
    else:
        print("New task request")
        received_task.id = max(task.id for task in task_arr) + 1
        task_arr.append(received_task)
    return jsonpickle.encode(received_task)

@app.route("/statuses")
def get_statuses():
    global status_arr
    return jsonpickle.encode(status_arr)

@app.route("/categories")
def get_categories():
    global category_arr
    return jsonpickle.encode(category_arr)

task_arr = [
        Task(1, "Duis aute irure dolor in reprehenderit", "11-8-2018", "Cassie", 2, 1), 
        Task(2, "Duis aute irure dolor in reprehenderit", "11-8-2018", "Cassie", 2, 1)
]

status_arr = [
    Status(1, "In Progress"),
    Status(2, "Blocked"),
    Status(3, "To Do"),
    Status(4, "Done")
]

category_arr = [
    Category(1, "Photography"),
    Category(2, "Decorations"),
    Category(3, "Ceremony2")
]

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')