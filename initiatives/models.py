from django.db import models

# Create your models here.
class ORMInitiative(models.Model):
    acronym = models.CharField(max_length=10, null=True)
    full_name = models.CharField(max_length=30, null=True)
   
    def __str__(self):
        return "{} - {}".format(str(self.acronym), str(self.full_name))

