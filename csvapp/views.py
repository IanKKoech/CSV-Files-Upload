import csv

from django.shortcuts import render, redirect
from django.http import HttpResponse

from .models import FuneralPolicy
from .forms import CSVFuneralPolicyUpload

# Create your views here.
def policy_list(request):
    policies = FuneralPolicy.objects.all()
    return render(request, 'funeral_policy_list.html', {'policies': policies})

def add_funeral_policy(request):
    if request.method == 'POST':
        form = CSVFuneralPolicyUpload(request.POST, request.FILES)
        if form.is_valid:
            handle_uploaded_file(request.FILES['csv_file'])
            return redirect('policy_list')
    
    else:
        form = CSVFuneralPolicyUpload()
    
    return render(request, 'add_funeral_policy.html', {'form': form})

def handle_uploaded_file(file):
    reader = csv.reader(file)