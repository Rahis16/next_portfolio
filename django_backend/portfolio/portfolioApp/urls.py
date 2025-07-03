from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('api/profile/', views.profile_api, name="profile"),
    path('api/about/', views.about_api, name="about"),
    path('api/projects/', views.projects_api, name="projects"),
    path('api/skills/', views.skill_api, name="skills"),
    path('api/contact/', views.contact_api, name="contact"),    
    path('api/soci/', views.soci_api, name="sociaccounts"),

    
]
