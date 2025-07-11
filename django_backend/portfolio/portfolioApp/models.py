from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=255, default="Mohammad Rahish Shekh")
    photo = models.ImageField(upload_to="profile_photo/")
    intro = models.TextField()
    
    def __str__(self):
        return f"profile of {self.name}"


class About(models.Model):
    photo = models.ImageField(upload_to="about/", null=True, blank=True)
    title = models.CharField(max_length=255, default="My Journey")
    about_p1 = models.TextField(default="paragraph1")
    about_p2 = models.TextField(default="paragraph2")
    project_count = models.IntegerField(default=5)
    years_exp = models.IntegerField(default=1)
    clients_count = models.IntegerField(default=2)
    
    def __str__(self):
        return f"about {self.title}"
    
    
    
class Project(models.Model):
    image = models.ImageField(upload_to="projects/")
    title = models.CharField(max_length=255, default="Project Title")    
    desc = models.TextField()
    tech_used = models.TextField()
    git_link = models.CharField(max_length=300, default="git link")
    live_link = models.CharField(max_length=300, default="live link")
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    

    def __str__(self):
        return f"Project title: {self.title}"
    
    

class Skill(models.Model):
    name = models.CharField(max_length=255, default="django")
    icon = models.CharField(max_length=255)
    level = models.IntegerField() #value in percentage like 50%
    color = models.CharField(max_length=255, default="bg-blue-500")
    order = models.IntegerField(default=1)
    
    def __str__(self):
        return f"Skill: {self.name}"
    
    

class ContactInfo(models.Model):
    desc = models.TextField()
    phone = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    
    def __str__(self):
        return f"contact info"    
    


class SociAccounts(models.Model):
    account = models.CharField(default="facebook", max_length=255)
    icon = models.CharField(max_length=255)
    link = models.CharField(max_length=300)    
    
    def __str__(self):
        return f"{self.account} media"