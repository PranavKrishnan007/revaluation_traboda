from django.db import models


# Create your models here.

class Pokemon(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    type = models.CharField(max_length=200, blank=True, default='normal')

    def __str__(self):
        return self.name
