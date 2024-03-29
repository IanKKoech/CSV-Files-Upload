# Generated by Django 5.0.1 on 2024-01-10 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0011_alter_funeralpolicy_policy_search'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funeralpolicy',
            name='ID_search',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='cancelled_by',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='client_identifier',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='commission_frequency',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_1_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_2_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_3_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_4_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_5_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_6_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_7_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_8_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='dependent_9_cover_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='division_identifier',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='income_group',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='new_policy_indicator',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='number_adult_dependants',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='number_child_dependants',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='number_extended_family',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='premium_frequency',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='principal_id',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='principal_postal_code',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='product_option',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='reference_number',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='reinsurance_recoveries',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='spouse_id',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='term_of_policy',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='funeralpolicy',
            name='total_premium_collected',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Apr_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Aug_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Dec_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Feb_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Jan_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Jul_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Jun_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Mar_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_May_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Nov_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Oct_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_Sep_2023',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_current_month',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_move',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='application_score',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='client_ref',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='disbursement_month',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='last_payment_month',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='loan_ref_Id',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='loan_term',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='remaining_term',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='risk_band',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='PTD_current_sum_assured',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='PTD_original_sum_assured',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='admin_binder_fees',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='batch_number',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='commission',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='create_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='current_outstanding_balance',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='death_current_sum_assured',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='death_original_sum_assured',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='death_premium',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='file_name',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='income_group',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='installment_amount',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='loan_ref',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='new_policy_indicator',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='original_loan_balance',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='policy_commencement_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='policy_expiry_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='policy_status',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='policy_status_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='postal_code',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_ID',
            field=models.CharField(blank=True, max_length=250, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_first_name',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_gender',
            field=models.CharField(blank=True, choices=[('Male', 'male'), ('female', 'Female')], max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_initials',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_member_email_address',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_member_physical_address',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_surname',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='principal_telephone_number',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='ptd_premium',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='refId',
            field=models.CharField(blank=True, max_length=250, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='retrenchment_current_sum_assured',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='retrenchment_original_sum_assured',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='retrenchment_premium',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='sales_channel',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='term_of_policy',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='total_policy_premium_collected',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='total_policy_premium_payable',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='smartadvancecredit',
            name='transmission_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
