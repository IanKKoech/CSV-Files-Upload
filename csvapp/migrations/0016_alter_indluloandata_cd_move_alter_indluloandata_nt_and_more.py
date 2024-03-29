# Generated by Django 5.0.1 on 2024-01-11 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csvapp', '0015_alter_funeralpolicy_binder_fees_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='indluloandata',
            name='CD_move',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='NT',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='agency',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='application_score',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='client_ref',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='debt_book',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='disbursement_month',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='employer',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='gender',
            field=models.CharField(blank=True, choices=[('Male', 'male'), ('Female', 'female')], max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='int_rate',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='job_description',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='last_payment_month',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='loan_amount',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='loan_ref_Id',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='loan_term',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='merchant',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='payment_method',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='province',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='remaining_term',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='risk_band',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='sector',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='indluloandata',
            name='status',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
