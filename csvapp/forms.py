from django import forms
from .models import FuneralPolicy

class FuneralPoliciesForm(forms.ModelForm):
    class Meta:
        model = FuneralPolicy
        fields = '__all__'