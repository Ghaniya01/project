# Author : Nemuel Wainaina

from datetime import datetime
from flask import Flask, jsonify, request
from random import randint
import hashlib
from pkg_resources import require
import psycopg2 as psy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# return connections and cursor objects to our database


def dbConnect():
    conn = psy.connect(
        database="digismart",
        user="postgres",
        password="Adebimpe@1"
    )
    curs = conn.cursor()
    return conn, curs

# generate 128-character password hash for the user passwords


def hashPasswd(passwd):
    passwd = passwd.encode()
    hash = hashlib.sha512(passwd)
    return hash.hexdigest()

# return current date and time


def currentDateTime():
    dt = datetime.now("%x")
    tm = datetime.now("%X")
    return dt, tm

# Generating unique ID for parent, vendor, student, transaction


class IdGenerator:
    def __init__(self):
        self.conn, self.curs = dbConnect()
        self.rand = randint(1000, 9999)

    def parent(self):
        q = 'SELECT parentId FROM parents'
        self.curs.execute(q)
        self.ids = self.curs.fetchall()
        self.ids = [id[1:] for id in self.ids]
        if self.rand in self.ids:
            self.parent()
        self.genId = 'P' + str(self.rand)
        return self.genId

    def sTransaction(self):
        q = 'SELECT transactionId FROM student_transactions'
        self.curs.execute(q)
        self.ids = self.curs.fetchall()
        self.ids = [id[1:] for id in self.ids]
        if self.rand in self.ids:
            self.sTransaction()
        self.genId = 'T' + str(self.rand)
        return self.genId

    def pTransaction(self):
        q = 'SELECT transactionId FROM parent_transactions'
        self.curs.execute(q)
        self.ids = self.curs.fetchall()
        self.ids = [id[1:] for id in self.ids]
        if self.rand in self.ids:
            self.pTransaction()
        self.genId = 'P' + str(self.rand)
        return self.genId

    def debits(self):
        q = 'SELECT transaction_id FROM parent_debits;'
        self.curs.execute(q)
        self.ids = self.curs.fetchall()
        self.ids = [id[1:] for id in self.ids]
        if self.rand in self.ids:
            self.debits()
        self.genId = 'T' + str(self.rand)
        return self.genId

# Admin log in


@app.route('/alogin/', methods=['POST', 'GET'])
def alogin():
    usrnm = request.json['usrnm']
    passwd = request.json['passwd']
    passwd = hashPasswd(passwd)

    q = 'SELECT usrnm, passwd FROM admins;'
    conn, curs = dbConnect()
    curs.execute(q)
    admins = curs.fetchall()
    usrnms = [admin[0] for admin in admins]
    passwds = [admin[1] for admin in admins]
    curs.close()
    conn.close()

    if usrnm in usrnms:
        if hashPasswd(passwd) == passwds[usrnms.index(usrnm)]:
            return {'msg': 'success'}
        else:
            return {'msg': 'Invalid credentials'}
    else:
        return {'msg': 'Invalid credentials'}


@app.route('/addparent/', methods=['POST', 'GET'])
def addparent():
    fname = request.json['fname']
    lname = request.json['lname']
    mobile = request.json['mobile']
    email = request.json['email']
    students = request.json['students']
    # generated from first name and first 4 digits of the mobile number
    passwd = fname + mobile[:4]
    p = IdGenerator()
    parentId = p.parent()

    conn, curs = dbConnect()
    q0 = 'SELECT mobile FROM parents;'
    q1 = 'SELECT email FROM parents;'
    q2 = 'INSERT INTO parents VALUES(%s, %s, %s, %s, %s, %s, %s);'

    curs.execute(q0)
    mobiles = curs.fetchall()
    curs.execute(q1)
    emails = curs.fetchall()
    curs.close()
    conn.close()

    if mobile in mobiles:
        return {'msg': 'The mobile number already exists!'}
    elif email in emails:
        return {'msg': 'The email address already exists!'}

    curs.execute(q2, (parentId, fname, lname,
                 mobile, email, students,  passwd))
    return {'msg': 'success'}


@app.route('/addstudent/', methods=['POST', 'GET'])
def addstudent():
    studentId = request.json['studentId']
    fname = request.json['fname']
    lname = request.json['lname']
    grade = request.json['grade']
    stream = request.json['stream']
    pMobile = request.json['pMobile']

    conn, curs = dbConnect()
    q0 = 'SELECT studentId FROM students;'
    q1 = 'INSERT INTO students VALUES(%s, %s, %s, %s, %s, %s);'

    curs.execute(q0)
    studentIds = curs.fetchall()
    curs.close()
    conn.close()

    if studentId in studentIds:
        return {'msg': 'Student Admission Number already exists in the System'}

    curs.execute(q1, (studentId, fname, lname, grade, stream, pMobile))
    return {'msg': 'success'}


@app.route('/vendors/')
def vendors():
    q = 'SELECT * FROM vendors;'
    conn, curs = dbConnect()
    curs.execute(q)
    vendors = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(vendors)


@app.route('/parents/')
def parents():
    q = 'SELECT * FROM parents;'
    conn, curs = dbConnect()
    curs.execute(q)
    parents = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(parents)


@app.route('/students/')
def students():
    q = 'SELECT * FROM students;'
    conn, curs = dbConnect()
    curs.execute(q)
    students = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(students)


@app.route('/transactions/')
def transactions():
    q = 'SELECT * from transactions;'
    conn, curs = dbConnect()
    curs.execute(q)
    transactions = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(transactions)


@app.route('/transaction/')
def transaction():
    transaction_id = request.json['transaction_id']

    q = 'SELECT * from transactions WHERE transaction_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q, (transaction_id,))
    transaction = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(transaction)

# Vendor log in


@app.route('/vlogin/', methods=['POST', 'GET'])
def vlogin():
    usrnm = request.json['usrnm']
    passwd = request.json['passwd']
    passwd = hashPasswd(passwd)

    q = 'SELECT usrnm, passwd FROM vendors;'
    conn, curs = dbConnect()
    curs.execute(q)
    vendors = curs.fetchall()
    usrnms = [vendor[0] for vendor in vendors]
    passwds = [vendor[1] for vendor in vendors]
    curs.close()
    conn.close()

    if usrnm in usrnms:
        if hashPasswd(passwd) == passwds[usrnms.index(usrnm)]:
            return {'msg': 'success'}
        else:
            return {'msg': 'failed'}
    else:
        return {'msg': 'failed'}


@app.route('/products/')
def products():
    q = 'SELECT * FROM products;'
    conn, curs = dbConnect()
    curs.execute(q)
    products = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(products)

# record details about a transaction to the database


@app.route('/exectransaction/', methods=['POST', 'GET'])
def exectransaction():
    t = IdGenerator()
    transactionId = t.sTransaction()
    dt, tm = currentDateTime()
    vendorId = request.json['vendorId']
    studentId = request.json['studentId']
    cart = request.json['cart']
    amtDue = request.json['totalAmt']

    conn, curs = dbConnect()
    q0 = 'SELECT total_spent,acct_balance FROM student_accounts WHERE student_id=%s;'
    curs.execute(q0)
    total_spent, acct_balance = curs.fetchone()
    if int(amtDue) > acct_balance:
        return {'msg': 'Insufficient funds in the account !'}
    else:
        if int(amtDue) + acct_balance > 30000:
            max_more = 30000 - acct_balance
            return {'msg': f'Limit reached, you can only spend {max_more} more !'}
        else:
            q = 'ALTER TABLE student_accounts SET total_spent=%s, acct_balance=%s, max_increment=%s WHERE student_id=%s;'
            total_spent = total_spent + amtDue
            acct_balance = acct_balance - amtDue
            max_increment = 30000 - total_spent - acct_balance
            curs.execute(q, (total_spent, acct_balance, max_increment))

            q = 'INSERT INTO transactions VALUES(%s, %s, %s, %s, %s, %s, %s);'
            curs.execute(q, (transactionId, dt, tm,
                         vendorId, studentId, cart, amtDue))
            return {'msg': 'success'}

    # curs.close()
    # conn.close()


@app.route('/vtransactions/')
def vtransactions():
    vendor_id = request.json['vendor_id']

    q = 'SELECT * from transactions WHERE vendor_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q)
    vtransactions = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(vtransactions)


@app.route('/vtransaction/')
def vtransaction():
    transaction_id = request.json['transaction_id']

    q = 'SELECT * from transactions WHERE transaction_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q)
    vtransaction = curs.fetchone()
    curs.close()
    conn.close()

    return jsonify(vtransaction)

# Parent log in


@app.route('/plogin/', methods=['POST', 'GET'])
def plogin():
    mobile = request.json['mobile']
    passwd = request.json['passwd']
    passwd = hashPasswd(passwd)

    q = 'SELECT mobile, passwd FROM parents;'
    conn, curs = dbConnect()
    curs.execute(q)
    parents = curs.fetchall()
    mobiles = [parent[0] for parent in parents]
    passwds = [admin[1] for admin in parents]

    if mobile in mobiles:
        if hashPasswd(passwd) == passwds[mobiles.index(mobile)]:
            return {'msg': 'success'}
        else:
            return {'msg': 'failed'}
    else:
        return {'msg': 'failed'}


@app.route('/stransactions/')
def stransactions():
    student_id = request.json['student_id']

    q = 'SELECT * from transactions WHERE student_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q)
    stransactions = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(stransactions)


@app.route('/stransaction/')
def stransaction():
    transaction_id = request.json['transaction_id']

    q = 'SELECT * from transactions WHERE transaction_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q)
    stransaction = curs.fetchone()
    curs.close()
    conn.close()

    return jsonify(stransaction)


@app.route('/addamount/', methods=['POST', 'GET'])
def addamount():
    parent_id = request.json['parent_id']
    student_id = request.json['student_id']
    amount = request.json['amount']

    d = IdGenerator()
    transaction_id = d.debits()
    dt, tm = currentDateTime()

    conn, curs = dbConnect()
    q = 'SELECT max_increment FROM student_accounts WHERE student_id=%s;'
    curs.execute(q)
    max_increment = int(curs.fetchone())
    if amount > max_increment:
        return {'msg': f'Maximum increment is {max_increment} !'}
    else:
        max_increment -= amount
        q = 'ALTER TABLE student_accounts SET max_increment=%s WHERE student_id=%s;'
        curs.execute(q, (max_increment, student_id))
        q = 'INSERT INTO parent_debits VALUES(%s, %s, %s, %s, %s, %s);'
        curs.execute(q, (transaction_id, dt, tm,
                     parent_id, student_id, amount))
        return {'msg': 'success'}


@app.route('/debits/')
def debits():
    parent_id = request.json['parent_id']

    q = 'SELECT * from debits WHERE parent_id=%s;'
    conn, curs = dbConnect()
    curs.execute(q)
    debits = curs.fetchall()
    curs.close()
    conn.close()

    return jsonify(debits)


if __name__ == "__main__":
    app.run(debug=True)
