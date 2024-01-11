from django import forms
from .models import FuneralPolicy, IndluLoanData

class CSVFuneralPolicyUpload(forms.ModelForm):
    csv_file = forms.FileField(label='Upload funeral policy CSV file')

    class Meta:
        model = FuneralPolicy
        fields = '__all__'

class CSVIndluLoanDataUpload(forms.ModelForm):
    csv_file = forms.FileField(label='Upload Indlu loan data CSV file')

    class Meta:
        model = IndluLoanData
        fields = '__all__'