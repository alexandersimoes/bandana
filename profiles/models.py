from django.db import models
import datetime

class Band(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=50)
    email = models.EmailField(max_length=75)
    bandana = models.URLField(verify_exists=False)
    since = models.DateTimeField('date band was established')
    location = models.CharField(max_length=200)
    
    def __unicode__(self):
        return self.name

class Module(models.Model):
    TYPE_CHOICES = (
        ('c', 'calendar'),
        ('i', 'image'),
        ('j', 'jukebox'),
        ('t', 'text'),
        ('v', 'video'),
    )
    band = models.ForeignKey(Band)
    title = models.CharField(max_length=200)
    type = models.CharField(max_length=1, choices=TYPE_CHOICES)
    order = models.PositiveSmallIntegerField()
    
    def __unicode__(self):
        return self.title
    
class Item(models.Model):
    module = models.ForeignKey(Module)
    title = models.CharField(max_length=200, null=True)
    url = models.URLField(verify_exists=False, null=True)
    meta = models.CharField(max_length=200, null=True)
    date = models.DateTimeField(null=True)
    text = models.TextField(null=True)
    
    def __unicode__(self):
        return self.title