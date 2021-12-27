from pymongo import MongoClient
#change OO -> your nickname of the mongoDB
client = MongoClient('mongodb+srv://test:OO@mycluster.aq6co.mongodb.net/myCluster?retryWrites=true&w=majority') 

# prac -> branch name
db = client.prac

'''
# 저장 - 예시 #Save
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시 # Find one thing
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력) # Find a few things
all_users = list(db.users.find({},{'_id':False})) -> 조건을 넣지 않으면 모두 가져옴
all_users = list(db.users.find({조건},{'_id':False}))

# 바꾸기 - 예시 # Revise the data
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시 # Remove the data
db.users.delete_one({'name':'bobby'})
'''
