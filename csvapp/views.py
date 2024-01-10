import csv
import io
import openpyxl
from django.shortcuts import render, redirect
from .models import FuneralPolicy
from .forms import CSVFuneralPolicyUpload

def policy_list(request):
    policies = FuneralPolicy.objects.all()
    return render(request, 'funeral_policy_list.html', {'policies': policies})

def add_funeral_policy(request):
    if request.method == 'POST':
        form = CSVFuneralPolicyUpload(request.POST, request.FILES)
        if form.is_valid():
            handle_uploaded_file(request.FILES['csv_file'])
            print('File upload successful')
            return redirect('policy_list')
        else:
            print("Form uploaded is invalid:", form.errors)
    else:
        form = CSVFuneralPolicyUpload()
    return render(request, 'add_funeral_policy.html', {'form': form})

def handle_uploaded_file(file):
    print(type[file])
    wb = openpyxl.load_workbook(file)
    worksheet = wb["Funeral Policies"]

    for row in worksheet.iter_rows(values_only=True):
        policy_search = row[0]
        ID_search = row[1]
        time_stamp = row[2]
        report_period_start = row[3]
        report_period_end = row[4]
        administrator = row[5]
        insurer_name = row[6]
        client_identifier = row[7]
        division_identifier = row[8]
        sub_scheme_name = row[9]
        policy_number = row[10]
        product_name = row[11]
        product_option = row[12]
        policy_commencement_date = row[13]
        policy_expiry_date = row[14]
        term_of_policy = row[15]
        policy_status = row[16]
        policy_status_date = row[17]
        new_policy_indicator = row[18]
        sales_channel = row[19]
        cancelled_by = row[20]
        death_indicator = row[21]
        premium_frequency = row[22]
        premium_type = row[23]
        death_original_sum_insured = row[24]
        death_cover = row[25]
        death_current_sum_insured = row[26]
        reinsurer_name = row[27]
        death_current_ri_sum_insured = row[28]
        death_ri_premium = row[29]
        death_ri_percent = row[30]
        total_premium_collected = row[31]
        total_premium_payable = row[32]
        total_premium_subsidy = row[33]
        total_reinsurance_premium = row[34]
        total_reinsurance_premium_payable = row[35]
        total_financial_reinsurance_cashflows = row[36]
        total_financial_reinsurance_payable = row[37]
        commission_frequency = row[38]
        commission = row[39]
        binder_fees = row[40]
        outsourcing_fees = row[41]
        marketing_fees = row[42]
        management_fees = row[43]
        claims_handling_fees = row[44]
        total_gross_claim_amount = row[45]
        gross_claim_paid = row[46]
        reinsurance_recoveries = row[47]
        principal_surname = row[48]
        principal_firstname = row[49]
        principal_initials = row[50]
        principal_id = row[51]
        principal_gender = row[52]
        principal_date_of_birth = row[53]
        principal_physical_address = row[54]
        principal_postal_code = row[55]
        principal_email = row[56]
        income_group = row[57]
        spouse_indicator = row[58]
        number_adult_dependants = row[59]
        number_child_dependants = row[60]
        number_extended_family = row[61]
        spouse_surname = row[62]
        spouse_firstname = row[63]
        spouse_initials = row[64]
        spouse_id = row[65]
        spouse_gender = row[66]
        spouse_date_of_birth = row[67]
        spouse_cover_amount = row[68]
        spouse_cover_commencement_date = row[69]
        dependent_1_gender = row[70]
        dependent_1_date_of_birth = row[80]
        dependent_1_type = row[81]
        dependent_1_cover_amount = row[82]
        dependent_1_cover_commencement_date = row[83]
        dependent_2_gender = row[84]
        dependent_2_date_of_birth = row[85]
        dependent_2_type = row[86]
        dependent_2_cover_amount = row[87]
        dependent_2_cover_commencement_date = row[88]
        dependent_3_gender = row[89]
        dependent_3_date_of_birth = row[90]
        dependent_3_type = row[91]
        dependent_3_cover_amount = row[92]
        dependent_3_cover_commencement_date = row[93]
        dependent_4_gender = row[94]
        dependent_4_date_of_birth = row[95]
        dependent_4_type = row[96]
        dependent_4_cover_amount = row[97]
        dependent_4_cover_commencement_date = row[98]
        dependent_5_gender = row[99]
        dependent_5_date_of_birth = row[100]
        dependent_5_type = row[101]
        dependent_5_cover_amount = row[102]
        dependent_5_cover_commencement_date = row[103]
        dependent_6_gender = row[104]
        dependent_6_date_of_birth = row[105]
        dependent_6_type = row[106]
        dependent_6_cover_amount = row[107]
        dependent_6_cover_commencement_date = row[108]
        dependent_7_gender = row[109]
        dependent_7_date_of_birth = row[110]
        dependent_7_type = row[111]
        dependent_7_cover_amount = row[112]
        dependent_7_cover_commencement_date = row[113]
        dependent_8_gender = row[114]
        dependent_8_date_of_birth = row[115]
        dependent_8_type = row[116]
        dependent_8_cover_amount = row[117]
        dependent_8_cover_commencement_date = row[118]
       
        funeral_policy = FuneralPolicy(
            policy_search = policy_search,
            ID_search = ID_search,
            time_stamp = time_stamp,
            report_period_start = report_period_start,
            report_period_end = report_period_end,
            administrator = administrator,
            insurer_name = insurer_name,
            client_identifier = client_identifier,
            division_identifier = division_identifier,
            sub_scheme_name = sub_scheme_name,
            policy_number = policy_number,
            product_name = product_name,
            product_option = product_option,
            policy_commencement_date = policy_commencement_date,
            policy_expiry_date = policy_expiry_date,
            term_of_policy = term_of_policy,
            policy_status = policy_status,
            policy_status_date = policy_status_date,
            new_policy_indicator = new_policy_indicator,
            sales_channel = sales_channel,
            cancelled_by = cancelled_by,
            death_indicator = death_indicator,
            premium_frequency = premium_frequency,
            premium_type = premium_type,
            death_original_sum_insured = death_original_sum_insured,
            death_cover = death_cover,
            death_current_sum_insured = death_current_sum_insured,
            reinsurer_name = reinsurer_name,
            death_current_ri_sum_insured = death_current_ri_sum_insured,
            death_ri_premium = death_ri_premium,
            death_ri_percent = death_ri_percent,
            total_premium_collected = total_premium_collected,
            total_premium_payable = total_premium_payable,
            total_premium_subsidy = total_premium_subsidy,
            total_reinsurance_premium = total_reinsurance_premium,
            total_reinsurance_premium_payable = total_reinsurance_premium_payable,
            total_financial_reinsurance_cashflows = total_financial_reinsurance_cashflows,
            total_financial_reinsurance_payable = total_financial_reinsurance_payable,
            commission_frequency = commission_frequency,
            commission = commission,
            binder_fees = binder_fees,
            outsourcing_fees = outsourcing_fees,
            marketing_fees = marketing_fees,
            management_fees = management_fees,
            claims_handling_fees = claims_handling_fees,
            total_gross_claim_amount = total_gross_claim_amount,
            gross_claim_paid = gross_claim_paid,
            reinsurance_recoveries = reinsurance_recoveries,
            principal_surname = principal_surname,
            principal_firstname = principal_firstname,
            principal_initials = principal_initials,
            principal_id = principal_id,
            principal_gender = principal_gender,
            principal_date_of_birth =  principal_date_of_birth,
            principal_physical_address = principal_physical_address,
            principal_postal_code = principal_postal_code,
            principal_email = principal_email,
            income_group = income_group,
            spouse_indicator = spouse_indicator,
            number_adult_dependants = number_adult_dependants,
            number_child_dependants = number_child_dependants,
            number_extended_family = number_extended_family,
            spouse_surname = spouse_surname,
            spouse_firstname = spouse_firstname,
            spouse_initials = spouse_initials,
            spouse_id = spouse_id,
            spouse_gender = spouse_gender,
            spouse_date_of_birth = spouse_date_of_birth,
            spouse_cover_amount = spouse_cover_amount,
            spouse_cover_commencement_date = spouse_cover_commencement_date,

            dependent_1_gender = dependent_1_gender,
            dependent_1_date_of_birth = dependent_1_date_of_birth,
            dependent_1_type =  dependent_1_type,
            dependent_1_cover_amount = dependent_1_cover_amount,
            dependent_1_cover_commencement_date = dependent_1_cover_commencement_date,    

            dependent_2_gender = dependent_2_gender,
            dependent_2_date_of_birth = dependent_2_date_of_birth,
            dependent_2_type =  dependent_2_type,
            dependent_2_cover_amount = dependent_2_cover_amount,
            dependent_2_cover_commencement_date = dependent_2_cover_commencement_date,

            dependent_3_gender = dependent_3_gender,
            dependent_3_date_of_birth = dependent_3_date_of_birth,
            dependent_3_type =  dependent_3_type,
            dependent_3_cover_amount = dependent_3_cover_amount,
            dependent_3_cover_commencement_date = dependent_3_cover_commencement_date,

            dependent_4_gender = dependent_4_gender,
            dependent_4_date_of_birth = dependent_4_date_of_birth,
            dependent_4_type =  dependent_4_type,
            dependent_4_cover_amount = dependent_4_cover_amount,
            dependent_4_cover_commencement_date = dependent_4_cover_commencement_date,

            dependent_5_gender = dependent_5_gender,
            dependent_5_date_of_birth = dependent_5_date_of_birth,
            dependent_5_type =  dependent_5_type,
            dependent_5_cover_amount = dependent_5_cover_amount,
            dependent_5_cover_commencement_date = dependent_5_cover_commencement_date,

            dependent_6_gender = dependent_6_gender,
            dependent_6_date_of_birth = dependent_6_date_of_birth,
            dependent_6_type =  dependent_6_type,
            dependent_6_cover_amount = dependent_6_cover_amount,
            dependent_6_cover_commencement_date = dependent_6_cover_commencement_date,

            dependent_7_gender = dependent_7_gender,
            dependent_7_date_of_birth = dependent_7_date_of_birth,
            dependent_7_type =  dependent_7_type,
            dependent_7_cover_amount = dependent_7_cover_amount,
            dependent_7_cover_commencement_date = dependent_7_cover_commencement_date,  

            dependent_8_gender = dependent_8_gender,
            dependent_8_date_of_birth = dependent_8_date_of_birth,
            dependent_8_type =  dependent_8_type,
            dependent_8_cover_amount = dependent_8_cover_amount,
            dependent_8_cover_commencement_date = dependent_8_cover_commencement_date,      
        )

        try:
            funeral_policy.save()
        except Exception as e:
            print(f"Error saving funeral policy instance :{e}")

    # doc = file.read().decode("UTF-8")
    # io_string = io.StringIO(doc)
    # next(io_string)
    # result = []
    # reader = csv.reader(file.read().decode('utf-8').splitlines()) 
    # data = [row for row in reader]
    # print(data)
    # file_content = io.TextIOWrapper(file, encoding='ISO-8859-1').read().replace('\x00', '')
    # lines = file_content.splitlines()

    # if not lines:
    #     print('The CSV file is empty.')
    #     return

    # header = next(csv.reader([lines[0]]))

    # for index, row in enumerate(csv.reader(lines[1:]), start=2):  # Start index from 2 to match line numbers
    #     cleaned_row = [field.replace('\x00', '') if isinstance(field, str) else field for field in row]
    #     data = dict(zip(header, cleaned_row))

    #     valid_data = {}
    #     problematic_data = {}
    #     for key, value in data.items():
    #         try:
    #             key = key.encode('latin-1').decode('utf-8', 'replace')
    #             value = value.encode('latin-1').decode('utf-8', 'replace')
    #             valid_data[key] = value
    #         except UnicodeDecodeError:
    #             problematic_data[key] = value

    #     if problematic_data:
    #         print(f"Error decoding data at line {index}: {problematic_data}")
    #         continue  # Skip the current line

    #     try:
    #         print("Decoded data")
    #         print(valid_data)
    #         # funeral_policy = FuneralPolicy(**valid_data)
    #         # funeral_policy.save()
    #     except TypeError as e:
    #         print(f"Error creating FuneralPolicy instance at line {index}: {e}")
    #         print(f"Problematic data: {valid_data}")

    # file.close()
