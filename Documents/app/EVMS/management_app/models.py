from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=300)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    fee_free = models.BooleanField(default=False)

    def __str__(self):
        return self.title


