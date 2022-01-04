import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# 引用私密金鑰
# path/to/serviceAccount.json 請用自己存放的路徑
cred = credentials.Certificate('serviceAccount.json')

# 初始化firebase，注意不能重複初始化
firebase_admin.initialize_app(cred)

# 初始化firestore
db = firestore.client()

a = 1
doc = {
  '1': "n",
  'email': "abc@gmail.com"
}

doc1 ={
    'file': a
}
# 語法
# doc_ref = db.collection("集合名稱").document("文件id")

doc_ref = db.collection("pyradise_students").document("student_01")

# doc_ref提供一個set的方法，input必須是dictionary

doc_ref.set(doc)

doc2_re1 = db.collection("1")
doc2_re1.add(doc1)
