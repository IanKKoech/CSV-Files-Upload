# Generated by Django 5.0.1 on 2024-01-09 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0004_indluloandata'),
    ]

    operations = [
        migrations.CreateModel(
            name='SmartAdvanceCredit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('refId', models.IntegerField(unique=True)),
                ('batch_number', models.IntegerField()),
                ('create_date', models.DateField()),
                ('transmission_date', models.DateField()),
                ('file_name', models.CharField(max_length=250)),
                ('loan_ref', models.IntegerField()),
                ('policy_status', models.IntegerField()),
                ('policy_commencement_date', models.DateTimeField()),
                ('policy_expiry_date', models.DateField()),
                ('term_of_policy', models.IntegerField()),
                ('policy_status_date', models.DateTimeField()),
                ('new_policy_indicator', models.CharField(max_length=250)),
                ('sales_channel', models.CharField(max_length=250)),
                ('death_premium', models.FloatField()),
                ('ptd_premium', models.IntegerField()),
                ('retrenchment_premium', models.IntegerField()),
                ('death_original_sum_assured', models.FloatField()),
                ('death_current_sum_assured', models.FloatField()),
                ('PTD_current_sum_assured', models.FloatField()),
                ('retrenchment_current_sum_assured', models.FloatField()),
                ('total_policy_premium_collected', models.FloatField()),
                ('total_policy_premium_payable', models.FloatField()),
                ('original_loan_balance', models.FloatField()),
                ('current_outstanding_balance', models.FloatField()),
                ('installment_amount', models.FloatField()),
                ('principal_surname', models.CharField(max_length=250)),
                ('principal_first_name', models.CharField(max_length=250)),
                ('principal_initials', models.CharField(max_length=50)),
                ('principal_ID', models.BigIntegerField(unique=True)),
                ('principal_gender', models.CharField(choices=[('Male', 'male'), ('female', 'Female')], max_length=250)),
                ('principal_date_of_birth', models.DateField()),
                ('principal_member_physical_address', models.CharField(max_length=250)),
                ('principal_member_email_address', models.EmailField(max_length=254)),
                ('principal_telephone_number', models.CharField(max_length=250)),
                ('postal_code', models.CharField(max_length=250)),
                ('PTD_original_sum_assured', models.IntegerField()),
                ('retrenchment_original_sum_assured', models.IntegerField()),
                ('income_group', models.CharField(max_length=250)),
                ('admin_binder_fees', models.IntegerField()),
                ('commission', models.IntegerField()),
                ('old_provider', models.CharField(blank=True, max_length=250, null=True)),
            ],
        ),
    ]
