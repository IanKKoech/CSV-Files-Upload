# Generated by Django 5.0.1 on 2024-01-10 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0007_alter_funeralpolicy_id_search_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funeralpolicy',
            name='ID_search',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='principal_id',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='reference_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='spouse_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]