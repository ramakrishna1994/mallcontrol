#!/usr/bin/python

import MySQLdb
import cgi

print "Content-type: application/json\n";
form = cgi.FieldStorage()
#print "The user entered %s" % form.getvalue("username")


# Open database connection
db = MySQLdb.connect("localhost","gate","Saradhi@2","gate2016" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

sql = "SELECT registration_numbers FROM usr_reg_tbl where phone_number = '%s'" % (form.getvalue("mobileNumber"))

       
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Fetch all the rows in a list of lists.
   results = cursor.fetchall()
   if cursor.rowcount == 0:
       print '{"error":1}'
   else:
       json = "["
       for row in results:
           registrationNumbers = row[0]
       arrayreg = registrationNumbers.split(',')
       count = 0;
       for i in arrayreg:
		  json +='{"number":"'+i+'"}'
		  count = count+1;
		  if count != len(arrayreg):
			json += ','
   
   json +=']'
   print json
except:
    print ""


# disconnect from server
db.close()