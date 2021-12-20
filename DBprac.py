from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:kassid@mycluster.aq6co.mongodb.net/myCluster?retryWrites=true&w=majority')
db = client.prac

db.users.delete_one({'name':'bobby'})

# all_users = list(db.users.find({},{'_id':False}))
# for  user in all_users:
#     print(user)

# user = db.users.find_one({'name':'bobby'})
# print(user)
# print(user['age'])

# db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
# db.users.update_one(조건,{'$set':바꿀 내용})

# db.users.delete_one({'name':'bobby'})

'''
# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_users = list(db.users.find({},{'_id':False})) -> 조건을 넣지 않으면 모두 가져옴
all_users = list(db.users.find({조건},{'_id':False}))

{'_id':False}는 쓸 데 없으면 

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})
'''