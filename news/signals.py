from .models import ORMNews
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

@receiver(post_save, sender=ORMNews)
def announce_new_or_update_news(sender, instance, created, update_fields, **kwargs):
    if created:
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "Everyone", {
                "type":"broadcast",
                "event": "New news",   
            }
        )
        print("Sent Created")
    else: 
        #update_fields is not None:
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "Everyone", {
                "type":"broadcast",
                "event": "Updated news",                
            }
        )
        print("Sent updated")

@receiver(post_delete, sender=ORMNews)
def annouce_delete_news(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
            "Everyone", {
                "type":"broadcast",
                "event": "Deleted news",
            }
        )
    print("Sent deleted")
    

