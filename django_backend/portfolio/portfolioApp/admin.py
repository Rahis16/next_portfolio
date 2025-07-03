from django.contrib import admin
from .models import Profile, Project, Skill, SociAccounts, ContactInfo, About

# Register your models here.
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'intro')
    
    

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "desc", )   
    
    
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ("title", )     
    
    
@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name",)    
    
    
@admin.register(ContactInfo)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("phone",)    
    
    

@admin.register(SociAccounts)
class SociAdmin(admin.ModelAdmin):
    list_display = ("account", )    