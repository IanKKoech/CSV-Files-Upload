# Generated by Django 5.0.1 on 2024-01-09 07:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0002_alter_funeralpolicies_principal_gender'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='FuneralPolicies',
            new_name='FuneralPolicy',
        ),
    ]
