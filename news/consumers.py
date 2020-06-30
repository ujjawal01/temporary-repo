import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer

class NewsConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()
        
        await self.channel_layer.group_add(
            "Everyone",
            self.channel_name
        )
        print(f"Added {self.channel_name} ")

    async def broadcast(self, event):
        await self.send_json(event)
        print(f"Got message {event}")

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            "Everyone",
            self.channel_name
        )
        print(f"Removed {self.channel_name} ")

   