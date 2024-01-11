from django.db import models

# Create your models here.
class FuneralPolicy(models.Model):

    gender_choices = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    policy_search = models.CharField(max_length=250,null=True, blank=True)
    ID_search = models.CharField(max_length=250,null=True, blank=True)
    time_stamp = models.CharField(max_length=250,blank=True, null=True)
    report_period_start = models.CharField(max_length=250,blank=True, null=True)
    report_period_end = models.CharField(max_length=250,blank=True, null=True)
    administrator = models.CharField(max_length=100, blank=True, null=True)  
    insurer_name = models.CharField(max_length=200, blank=True, null=True)
    client_identifier = models.CharField(max_length=250, blank=True, null=True)
    division_identifier = models.CharField(max_length=250, blank=True, null=True)
    sub_scheme_name = models.CharField(max_length=200, blank=True, null=True)
    policy_number = models.CharField(max_length=200, blank=True, null=True)
    product_name = models.CharField(max_length=200, blank=True, null=True)
    product_option = models.CharField(max_length=250, blank=True, null=True)
    policy_commencement_date = models.CharField(max_length=250,blank=True, null=True)
    policy_expiry_date = models.CharField(max_length=250,blank=True, null=True)
    term_of_policy = models.CharField(max_length=250, blank=True, null=True)
    policy_status = models.CharField(max_length=200, blank=True, null=True)
    policy_status_date = models.CharField(max_length=250,blank=True, null=True)
    new_policy_indicator = models.CharField(max_length=250, blank=True, null=True)
    sales_channel = models.CharField(max_length=200, blank=True, null=True)
    cancelled_by = models.CharField(max_length=250, blank=True, null=True)
    death_indicator = models.CharField(max_length=200, blank=True, null=True)
    premium_frequency = models.CharField(max_length=250, blank=True, null=True)
    premium_type = models.CharField(max_length=200, blank=True, null=True)
    death_original_sum_insured = models.CharField(max_length=250,blank=True, null=True)
    death_cover = models.CharField(max_length=200, blank=True, null=True)
    death_current_sum_insured = models.CharField(max_length=250,blank=True, null=True)
    reinsurer_name = models.CharField(max_length=200, blank=True, null=True)
    death_current_ri_sum_insured = models.CharField(max_length=250,blank=True, null=True)
    death_ri_premium = models.CharField(max_length=250,blank=True, null=True)
    death_ri_percent = models.CharField(max_length=250,blank=True, null=True)
    total_premium_collected = models.CharField(max_length=250, blank=True, null=True)
    total_premium_payable = models.CharField(max_length=250,blank=True, null=True)
    total_premium_subsidy = models.CharField(max_length=250,blank=True, null=True)
    total_reinsurance_premium = models.CharField(max_length=250,blank=True, null=True)
    total_reinsurance_premium_payable = models.CharField(max_length=250,blank=True, null=True)
    total_financial_reinsurance_cashflows = models.CharField(max_length=250,blank=True, null=True)
    total_financial_reinsurance_payable = models.CharField(max_length=250,blank=True, null=True)
    commission_frequency = models.CharField(max_length=250, blank=True, null=True)
    commission = models.CharField(max_length=250,blank=True, null=True)
    binder_fees = models.CharField(max_length=250,blank=True, null=True)
    outsourcing_fees = models.CharField(max_length=250,blank=True, null=True)
    marketing_fees = models.CharField(max_length=250,blank=True, null=True)
    management_fees = models.CharField(max_length=250,blank=True, null=True)
    claims_handling_fees = models.CharField(max_length=250,blank=True, null=True)
    total_gross_claim_amount = models.CharField(max_length=250,blank=True, null=True)
    gross_claim_paid = models.CharField(max_length=250,blank=True, null=True)
    reinsurance_recoveries = models.CharField(max_length=250, blank=True, null=True)
    principal_surname = models.CharField(max_length=200, blank=True, null=True)
    principal_firstname = models.CharField(max_length=200, blank=True, null=True)
    principal_initials = models.CharField(max_length=200, blank=True, null=True)
    principal_id = models.CharField(max_length=250, blank=True, null=True)
    principal_gender = models.CharField(max_length=200, choices=gender_choices, blank=True, null=True)
    principal_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    principal_physical_address = models.CharField(max_length=255, blank=True, null=True)
    principal_postal_code = models.CharField(max_length=250, blank=True, null=True)
    principal_email = models.EmailField(blank=True, null=True)
    income_group = models.CharField(max_length=250, blank=True, null=True)
    spouse_indicator = models.CharField(max_length=200, blank=True, null=True)
    number_adult_dependants = models.CharField(max_length=250, blank=True, null=True)
    number_child_dependants = models.CharField(max_length=250, blank=True, null=True)
    number_extended_family = models.CharField(max_length=250, blank=True, null=True)
    spouse_surname = models.CharField(max_length=200,blank=True, null=True)
    spouse_firstname = models.CharField(max_length=200,blank=True, null=True)
    spouse_initials = models.CharField(max_length=200, blank=True, null=True)
    spouse_id = models.CharField(max_length=250, blank=True, null=True)

    spouse_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)

    spouse_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    spouse_cover_amount = models.CharField(max_length=250,blank=True, null=True)
    spouse_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_1_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_1_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_1_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_1_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_1_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_2_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_2_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_2_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_2_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_2_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_3_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_3_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_3_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_3_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_3_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_4_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_4_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_4_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_4_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_4_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_5_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_5_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_5_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_5_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_5_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_6_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_6_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_6_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_6_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_6_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_7_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_7_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_7_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_7_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_7_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_8_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_8_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_8_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_8_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_8_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dependent_9_gender = models.CharField(max_length=10, choices=gender_choices, blank=True, null=True)
    dependent_9_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    dependent_9_type = models.CharField(max_length=200, blank=True, null=True)
    dependent_9_cover_amount = models.CharField(max_length=250, blank=True, null=True)
    dependent_9_cover_commencement_date = models.CharField(max_length=250,blank=True, null=True)

    dpip = models.CharField(max_length=200, blank=True, null=True)
    reference_number = models.CharField(max_length=250, blank=True, null=True)
    policy_start_date = models.CharField(max_length=250,blank=True, null=True)

    def __str__(self):
        return f"{self.policy_number} - {self.insurer_name} - {self.policy_start_date}"

class IndluLoanData(models.Model):

    gender_choices = [
        ('Male', 'male'),
        ('Female', 'female')
    ]

    report_data = models.CharField(max_length=250, null=True, blank=True)
    client_ref = models.CharField(max_length=250, null=True, blank=True)
    loan_ref_Id = models.CharField(max_length=250, null=True, blank=True)
    status = models.CharField(max_length=250, null=True, blank=True)
    close_date = models.CharField(max_length=250, null=True, blank=True)
    NT = models.CharField(max_length=250, null=True, blank=True)
    payment_method = models.CharField(max_length=250, null=True, blank=True)
    merchant = models.CharField(max_length=250, null=True, blank=True)
    province = models.CharField(max_length=250, null=True, blank=True)
    disbursment_date = models.CharField(max_length=250, null=True, blank=True)
    disbursment_month = models.CharField(max_length=250, null=True, blank=True)
    application_score = models.CharField(max_length=250,null=True, blank=True )
    risk_band = models.CharField(max_length=250,null=True, blank=True )
    debt_book = models.CharField(max_length=250, null=True, blank=True)
    agency = models.CharField(max_length=250, null=True, blank=True)
    special_circumstance = models.CharField(max_length=250, null=True, blank=True)
    sector = models.CharField(max_length=250,null=True, blank=True)
    job_description = models.CharField(max_length=250,null=True, blank=True)
    last_payment_date = models.CharField(max_length=250, null=True, blank=True)
    last_payment_month = models.CharField(max_length=250,null=True, blank=True )
    gender = models.CharField(max_length=250, choices = gender_choices, null=True, blank=True)
    employer = models.CharField(max_length=250,null=True, blank=True)
    loan_amount = models.CharField(max_length=250,null=True, blank=True)
    int_rate = models.CharField(max_length=250,null=True, blank=True)
    loan_term = models.CharField(max_length=250, null=True, blank=True)
    remaining_term = models.CharField(max_length=250,null=True, blank=True )
    CD_move = models.CharField(max_length=250, null=True, blank=True)
    CD_current_month = models.CharField(max_length=250, null=True, blank=True)
    CD_Oct_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Sep_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Aug_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Jul_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Jun_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_May_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Apr_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Mar_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Feb_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Jan_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Dec_2023 = models.CharField(max_length=250, null=True, blank=True)
    CD_Nov_2023 = models.CharField(max_length=250, null=True, blank=True)
    account_balance_active_charge_off = models.CharField(max_length=250, null=True, blank=True)
    

    def __str__(self):
        return f"{self.client_ref} - {self.loan_ref_Id} - {self.status}"

class SmartAdvanceCredit(models.Model):

    gender_choices = [
        ('Male', 'male'),
        ('female', 'Female')
    ]

    refId = models.CharField(max_length=250, unique=True, blank=True, null=True)
    batch_number = models.CharField(max_length=250, blank=True, null=True)
    create_date = models.CharField(max_length=250,blank=True, null=True)
    transmission_date = models.CharField(max_length=250,blank=True, null=True)
    file_name = models.CharField(max_length=250, blank=True, null=True)
    loan_ref = models.CharField(max_length=250,blank=True, null=True )
    policy_status = models.CharField(max_length=250, blank=True, null=True)
    policy_commencement_date = models.CharField(max_length=250,blank=True, null=True)
    policy_expiry_date = models.CharField(max_length=250,blank=True, null=True)
    term_of_policy = models.CharField(max_length=250, blank=True, null=True)
    policy_status_date = models.CharField(max_length=250,blank=True, null=True)
    new_policy_indicator = models.CharField(max_length=250, blank=True, null=True)
    sales_channel = models.CharField(max_length=250,blank=True, null=True)
    death_premium = models.CharField(max_length=250,blank=True, null=True)
    ptd_premium = models.CharField(max_length=250,blank=True, null=True )
    retrenchment_premium = models.CharField(max_length=250, blank=True, null=True)
    death_original_sum_assured = models.CharField(max_length=250,blank=True, null=True)
    death_current_sum_assured = models.CharField(max_length=250,blank=True, null=True)
    PTD_current_sum_assured = models.CharField(max_length=250,blank=True, null=True)
    retrenchment_current_sum_assured = models.CharField(max_length=250,blank=True, null=True)
    total_policy_premium_collected = models.CharField(max_length=250,blank=True, null=True)
    total_policy_premium_payable = models.CharField(max_length=250,blank=True, null=True)
    original_loan_balance = models.CharField(max_length=250,blank=True, null=True)
    current_outstanding_balance = models.CharField(max_length=250,blank=True, null=True)
    installment_amount = models.CharField(max_length=250,blank=True, null=True)
    principal_surname = models.CharField(max_length=250, blank=True, null=True)
    principal_first_name = models.CharField(max_length=250, blank=True, null=True)
    principal_initials = models.CharField(max_length=50, blank=True, null=True)
    principal_ID = models.CharField(max_length=250, unique=True, blank=True, null=True)
    principal_gender = models.CharField(max_length=250, choices=gender_choices, blank=True, null=True)
    principal_date_of_birth = models.CharField(max_length=250,blank=True, null=True)
    principal_member_physical_address = models.CharField(max_length=250, blank=True, null=True)
    principal_member_email_address = models.EmailField(blank=True, null=True)
    principal_telephone_number = models.CharField(max_length=250, blank=True, null=True)
    postal_code = models.CharField(max_length=250, blank=True, null=True)
    PTD_original_sum_assured = models.CharField(max_length=250, blank=True, null=True)
    retrenchment_original_sum_assured = models.CharField(max_length=250, blank=True, null=True)
    income_group = models.CharField(max_length=250, blank=True, null=True)
    admin_binder_fees = models.CharField(max_length=250, blank=True, null=True)
    commission = models.CharField(max_length=250, blank=True, null=True)
    old_provider = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return f"{self.refId} - {self.create_date}"