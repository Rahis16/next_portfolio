from rest_framework import serializers
from .models import Profile, About, Project, Skill, ContactInfo, SociAccounts


class ProfileSerializer(serializers.ModelSerializer):
    # photo = serializers.ImageField(use_url = True)
    class Meta:
        model = Profile
        fields = '__all__'
        
        
        
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
       model = About
       fields = '__all__'        
       
       
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'       


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'    


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'
        
        
        
class SociAccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SociAccounts
        fields = '__all__'
        