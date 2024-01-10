from django import forms
from .models import FuneralPolicy

class CSVFuneralPolicyUpload(forms.ModelForm):
    csv_file = forms.FileField(label='Upload funeral policy CSV file')

    class Meta:
        model = FuneralPolicy
        fields = '__all__'