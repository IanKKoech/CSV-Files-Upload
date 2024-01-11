from django.urls import path
from .views import add_funeral_policy, funeral_policy_list, add_indlu_loan_data, indlu_data_list

urlpatterns = [
    path('policy_list/', funeral_policy_list, name='policy_list'),
    path('add_funeral_policy/', add_funeral_policy, name='add_funeral_policy'),
    path('indlu_list/', indlu_data_list, name='indlu_list'),
    path('add_indlu_loan_data/', add_indlu_loan_data, name='add_indlu_loan_data')
]