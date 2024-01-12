from rest_framework import serializers
from .models import FuneralPolicy

class FuneralPolicySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FuneralPolicy
        fields = '__all__'