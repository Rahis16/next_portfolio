from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import Profile, About, Project, Skill, ContactInfo, SociAccounts
from .serializers import ProfileSerializer, AboutSerializer, ProjectSerializer , SkillSerializer, ContactInfoSerializer, SociAccountsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
def home(request):
    return render(request, 'index.html')


@api_view(['GET'])
def profile_api(request):
    profile = Profile.objects.first()
    
    serializer = ProfileSerializer(profile, many=False, context={'request': request})
    
    return Response(serializer.data)


@api_view(['GET'])
def about_api(request):
    about = About.objects.first()
    
    serializer = AboutSerializer(about, many=False, context={'request': request})
    
    return Response(serializer.data)



@api_view(['GET'])
def projects_api(request):
    projects =  Project.objects.all().order_by('-created_at')
    
    serializer = ProjectSerializer(projects, many=True, context={'request': request})
    
    return Response(serializer.data)



@api_view(['GET'])
def skill_api(request):
    skill = Skill.objects.all().order_by('order')
    serializer = SkillSerializer(skill, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def contact_api(request):
    contact = ContactInfo.objects.first()   
    serializer = ContactInfoSerializer(contact, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def soci_api(request):
    soci_accounts = SociAccounts.objects.all()
    serializer = SociAccountsSerializer(soci_accounts, many=True)
    return Response(serializer.data)







    
    
    