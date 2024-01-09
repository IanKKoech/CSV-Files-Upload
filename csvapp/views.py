from django.shortcuts import render, redirect
from .models import FuneralPolicy
from .forms import FuneralPoliciesForm

# Create your views here.
def policy_list(request):
    policies = FuneralPolicy.objects.all()
    return render(request, 'funeral_policy_list.html', {'policies': policies})

def add_funeral_policy(request):
    if request.method == 'POST':
        form = FuneralPoliciesForm(request.POST)
        if form.is_valid:
            form.save()
            return redirect('funeral_policy_list')
    
    else:
        form = FuneralPoliciesForm()
    
    return render(request, 'add_funeral_policy.html', {'form': form})