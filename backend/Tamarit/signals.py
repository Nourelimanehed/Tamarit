from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.utils import timezone
from .models import Event, Notification

@receiver(post_save, sender=Event)
def send_notification(sender, instance, created, **kwargs):
    if created:
        message = f"Un nouvel événement '{instance.name}' a été ajouté. Ne le manquez pas!"
        users = User.objects.all()
        for user in users:
            notification = Notification(user=user, message=message, event=instance)
            notification.save()