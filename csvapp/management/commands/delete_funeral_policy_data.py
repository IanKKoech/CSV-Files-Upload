from django.core.management.base import BaseCommand
from csvapp.models import FuneralPolicy

class Command(BaseCommand):
    help = 'Delete all records from FuneralPolicy model in batches'

    def handle(self, *args, **kwargs):
        model_objects = FuneralPolicy.objects.all()
        batch_size = 10000  # Adjust the batch size as needed

        total_records = model_objects.count()
        self.stdout.write(self.style.SUCCESS(f'Total records to delete: {total_records}'))

        while model_objects.exists():
            # Get a batch of records to delete
            batch = model_objects[:batch_size]
            batch_count = batch.count()

            # Filter records again and delete
            FuneralPolicy.objects.filter(id__in=batch.values_list('id', flat=True)).delete()

            self.stdout.write(self.style.SUCCESS(f'Deleting {batch_count} records...'))

        self.stdout.write(self.style.SUCCESS('All records deleted successfully.'))

# Command to run
        # python manage.py delete_funeral_policy_data