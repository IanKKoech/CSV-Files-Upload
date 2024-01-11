from django import forms
from .models import FuneralPolicy, IndluLoanData, SmartAdvanceCredit

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

class CSVSmartAdvanceCredit(forms.ModelForm):
    csv_file = forms.FileField(label='Upload Smart Advance Credit CSV file')

    class Meta:
        model = SmartAdvanceCredit
        fields = '__all__'