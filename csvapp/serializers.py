from rest_framework import serializers
from .models import FuneralPolicy, IndluLoanData, SmartAdvanceCredit

class FuneralPolicySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FuneralPolicy
        fields = '__all__'

class IndluLoanDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = IndluLoanData
        fields = '__all__'

class SmartAdvanceCreditSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SmartAdvanceCredit
        fields = '__all__'