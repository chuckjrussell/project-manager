import json
import jsonpickle
from model import *

dict_a = [{'name': 'python', 'points': 10}, {'name': 'java', 'points': 8}]

filtered = filter(lambda x : x['name'] == 'python', dict_a)

print(filtered)
