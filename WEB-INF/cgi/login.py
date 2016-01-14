#!/usr/bin/python

import MySQLdb
import cgi

print "Content-type: application/json\n";

form = cgi.FieldStorage()
phoneNumber = form.getvalue('mobileNumber')
password = form.getvalue('password')
mallName = form.getvalue('mallName')

db = MySQLdb.connect("localhost","gate","Saradhi@2","gate2016" )


cursor = db.cursor()

sql = "SELECT role FROM login_tbl where phone_number = '%s' and password = '%s' and mall_name = '%s'" % (phoneNumber,password,mallName)

cursor.execute(sql)

results = cursor.fetchall()

if cursor.rowcount == 0:
    print '{"error":1}'

else:
    for row in results:
        if(row[0] == 'in'):
            print '{"error":0,"role":"in"}'
        elif(row[0] == 'out'):
            print '{"error":0,"role":"out"}'
        else:
            print '{"error":0,"role":"manager"}'
            
        
db.close()