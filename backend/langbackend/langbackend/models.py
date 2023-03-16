from django.db import models

# Create your models here.
class MyRestApi(models.Model):
    name = models.CharField(max_length=255)
    content=models.TextField()
    created_at = models.DateField()



def __str__(self):
    return self.name

    