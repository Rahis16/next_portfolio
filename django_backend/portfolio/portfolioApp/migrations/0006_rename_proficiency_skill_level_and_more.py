# Generated by Django 5.2.3 on 2025-07-03 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0005_about_photo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skill',
            old_name='proficiency',
            new_name='level',
        ),
        migrations.RenameField(
            model_name='skill',
            old_name='tech',
            new_name='name',
        ),
        migrations.AddField(
            model_name='skill',
            name='color',
            field=models.CharField(default='bg-blue-500', max_length=255),
        ),
    ]
