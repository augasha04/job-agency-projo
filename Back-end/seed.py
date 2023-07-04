from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from faker import Faker
from models import Employer, Employee, Job,employee_job_association, db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  
db.init_app(app)

fake = Faker()


def create_employers(num_employers):
    for _ in range(num_employers):
        name = fake.company()
        email = fake.email()
        phone_number = fake.phone_number()
        employer = Employer(name=name, email=email, phone_number=phone_number)
        db.session.add(employer)
    db.session.commit()


def create_employees(num_employees, num_employers):
    for _ in range(num_employees):
        name = fake.name()
        email = fake.email()
        job_title = fake.job()
        phone_number = fake.phone_number()
        employer_id = fake.random_int(min=1, max=num_employers)
        employee = Employee(name=name, email=email, job_title=job_title, phone_number=phone_number,
                            employer_id=employer_id)
        db.session.add(employee)
    db.session.commit()


def create_jobs(num_jobs, num_employers):
    for _ in range(num_jobs):
        company_name = fake.company()
        job_title = fake.job()
        location = fake.city()
        paye = fake.random_int(min=1000, max=5000)
        description = fake.paragraph()
        responsibility = fake.text()
        qualification = fake.text()
        employer_id = fake.random_int(min=1, max=num_employers)
        job = Job(company_name=company_name, job_title=job_title, location=location, paye=paye,
                  description=description, responsibility=responsibility, qualification=qualification,
                  employer_id=employer_id)
        db.session.add(job)
    db.session.commit()


def create_associations(num_associations, num_employees, num_jobs):
    for _ in range(num_associations):
        employee_id = fake.random_int(min=1, max=num_employees)
        job_id = fake.random_int(min=1, max=num_jobs)
        db.session.execute(
            employee_job_association.insert().values(employee_id=employee_id, job_id=job_id)
        )
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        num_employers = 5
        num_employees = 10
        num_jobs = 20
        num_associations = 15

        create_employers(num_employers)
        create_employees(num_employees, num_employers)
        create_jobs(num_jobs, num_employers)
        create_associations(num_associations, num_employees, num_jobs)
