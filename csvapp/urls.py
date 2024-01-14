from django.urls import path
from .views import add_funeral_policy, funeral_policy_list, add_indlu_loan_data, indlu_data_list, smart_credit_data_list, add_smart_credit_data_list, FuneralPolicyList, IndluLoanDataList, SmartAdvanceCreditList

urlpatterns = [
    path('policy_list/', funeral_policy_list, name='policy_list'),
    path('add_funeral_policy/', add_funeral_policy, name='add_funeral_policy'),
    path('indlu_list/', indlu_data_list, name='indlu_list'),
    path('add_indlu_loan_data/', add_indlu_loan_data, name='add_indlu_loan_data'),
    path('add_smart_credit/', add_smart_credit_data_list, name='add_smart_credit_data_list'),
    path('smart_credit_list/', smart_credit_data_list, name='smart_credit_list'),
    path('api/funeral_policies/', FuneralPolicyList.as_view(), name='funeral_policy_api'),
    path('api/indlu_loan_data_list/', IndluLoanDataList.as_view(), name='indlu_data_api'),
    path('api/smart_credit_info_list/', SmartAdvanceCreditList.as_view(), name='smart_credit_api')
]