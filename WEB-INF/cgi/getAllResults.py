#!/usr/bin/python

import MySQLdb
import cgi

print "Content-type: application/json\n";

db = MySQLdb.connect("localhost","gate","Saradhi@2","gate2016" )


cursor = db.cursor()

sql = "SELECT * FROM transaction_tbl"

cursor.execute(sql)

results = cursor.fetchall()
rows = cursor.rowcount

count = 0;
json = "["
for row in results:
    json += '{"id":%d ,' % (row[0])
    json +=' "ticketId":"%s",' %(row[1])
    json +=' "phoneNumber":"%s",' %(row[2])
    json +='"registrationNumber":"%s",' %(row[3])
    json +='"inTime":"%s",' %(row[4])
    json +='"outTime":"%s"}' %(row[5])   
    count = count+1;
    if count != rows:
        json += ','
json +=']'
print json


db.close()