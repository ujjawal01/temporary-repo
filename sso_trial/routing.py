from channels.routing import ProtocolTypeRouter, URLRouter
from django.conf.urls import url
from channels.http import AsgiHandler
from channels.auth import AuthMiddlewareStack

import news.routing 

application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter(
           news.routing.websocket_urlpatterns
        )
    ),
})