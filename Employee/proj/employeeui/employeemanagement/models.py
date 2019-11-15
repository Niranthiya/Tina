from django.db import models

# Create your models here.
class EmployeeManagement(models.Model):
    id = models.AutoField(blank=False, primary_key=True)
    name = models.CharField(max_length=45)
    employee_code = models.IntegerField()
    email_id = models.EmailField(blank=True, max_length=45)
    contact_no = models.CharField(max_length=10)
    salary = models.CharField(max_length=12, null=True)

    class Meta:
        db_table = "EmployeeManagement"
