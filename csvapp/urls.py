from django.urls import path
from .views import add_funeral_policy, policy_list

urlpatterns = [
    path('policy_list/', policy_list, name='policy_list'),
    path('add_funeral_policy/', add_funeral_policy, name='add_funeral_policy')
]