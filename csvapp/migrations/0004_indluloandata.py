# Generated by Django 5.0.1 on 2024-01-09 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0003_rename_funeralpolicies_funeralpolicy'),
    ]

    operations = [
        migrations.CreateModel(
            name='IndluLoanData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_data', models.DateField()),
                ('client_ref', models.BigIntegerField()),
                ('loan_ref_Id', models.IntegerField()),
                ('status', models.CharField(max_length=250)),
                ('close_date', models.DateField()),
                ('NT', models.CharField(max_length=250)),
                ('payment_method', models.CharField(max_length=250)),
                ('merchant', models.CharField(max_length=250)),
                ('province', models.CharField(max_length=250)),
                ('disbursment_date', models.DateField()),
                ('disbursement_month', models.IntegerField()),
                ('application_score', models.IntegerField()),
                ('risk_band', models.IntegerField()),
                ('debt_book', models.CharField(max_length=250)),
                ('agency', models.CharField(max_length=250)),
                ('special_circumstance', models.CharField(blank=True, max_length=250, null=True)),
                ('sector', models.CharField(max_length=250)),
                ('job_description', models.CharField(max_length=250)),
                ('last_payment_date', models.DateField()),
                ('last_payment_month', models.IntegerField()),
                ('gender', models.CharField(choices=[('Male', 'male'), ('Female', 'female')], max_length=250)),
                ('employer', models.CharField(max_length=250)),
                ('loan_amount', models.FloatField()),
                ('int_rate', models.FloatField()),
                ('loan_term', models.IntegerField()),
                ('remaining_term', models.IntegerField()),
                ('CD_move', models.IntegerField()),
                ('CD_current_month', models.IntegerField(blank=True, null=True)),
                ('CD_Oct_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Sep_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Aug_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Jul_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Jun_2023', models.IntegerField(blank=True, null=True)),
                ('CD_May_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Apr_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Mar_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Feb_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Jan_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Dec_2023', models.IntegerField(blank=True, null=True)),
                ('CD_Nov_2023', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]