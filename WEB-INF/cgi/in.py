#!/usr/bin/python

import MySQLdb
import cgi
import random


print "Content-type: application/json\n";
dummy = "ABWER"
ticketNumber =dummy + str(random.randint(0,99999))
form = cgi.FieldStorage()
phoneNumber = form.getvalue('mobileNumber')
registrationNumber = form.getvalue('registrationNumber')


# Open database connection
db = MySQLdb.connect("localhost","gate","Saradhi@2","gate2016" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

sql = "select * from usr_reg_tbl where phone_number = '%s'" % (phoneNumber)

cursor.execute(sql)
results = cursor.fetchall()
if cursor.rowcount == 0:
    sql = "insert into usr_reg_tbl(phone_number,registration_numbers,registration_count) values ('%s','%s',1)" % (phoneNumber,registrationNumber)
    cursor.execute(sql);
    db.commit();

else:
    sql = "SELECT registration_numbers FROM usr_reg_tbl where phone_number = '%s'" % (phoneNumber)
    cursor.execute(sql)
    results = cursor.fetchall()
    for row in results:
        registrationNumbers = row[0]
    arrayreg = registrationNumbers.split(',')
    count = 0;
    for i in arrayreg:
        if registrationNumber == i:
            count = 1
    if count != 1:
        registrationNumbers += ","+registrationNumber
        sql="update usr_reg_tbl set registration_numbers = '%s' where phone_number = '%s'" % (registrationNumbers,phoneNumber)
        cursor.execute(sql)
        db.commit() 
   
sql = "insert into transaction_tbl(ticket_number,phone_number,registration_number,out_time) values \
             ('%s','%s','%s','%s')" % (ticketNumber,phoneNumber,registrationNumber,'')

cursor.execute(sql)
db.commit()
  

print '{"error":0}'


# disconnect from server
db.close()