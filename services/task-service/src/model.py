class Category:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class Status:
    def __init__(self, id, name):
        self.id = id
        self.name = name

class Task:
    def __init__(self, id, item, dueDate, assignee, category, status):
        self.id = id
        self.item = item
        self.dueDate = dueDate
        self.assignee = assignee
        self.category = category
        self.status = status
