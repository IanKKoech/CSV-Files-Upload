# Generated by Django 5.0.1 on 2024-01-10 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0005_smartadvancecredit'),
    ]

    operations = [
        migrations.AddField(
            model_name='indluloandata',
            name='account_balance_active_charge_off',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
