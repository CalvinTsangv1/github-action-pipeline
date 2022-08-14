import mysql.connector
from faker import Faker

database = mysql.connector.connect(
    host='localhost',
    user='root',
    password='root',
    database='mydatabase'
)


cursor = database.cursor()
numberOfRecord = 0
fake = Faker()
Faker.seed(0)

for numberOfRecord in range(20000):
    firstName = fake.first_name()
    lastName = fake.last_name()
    phoneNumber = fake.random_number(digits=8, fix_len=True)
    countryNationalId = fake.random_number(digits=3, fix_len=True)
    distributionStatus = 'SUCCESS'
    sql = "INSERT INTO CLIENT (firstName, lastName, phoneNumber, countryNationalId, distributionStatus) VALUES (%s, %s, %s, %s, %s)"
    value = (firstName, lastName, phoneNumber, countryNationalId, distributionStatus)
    cursor.execute(sql, value)
    database.commit()
    print(cursor.rowcount, "record inserted")