import json
import urllib.parse
from django.http import HttpResponse
from django.views import View
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name="dispatch")
class ViewWrapper(View):

    view_factory = None
    
    def get(self, request, *args, **kwargs):
        kwargs.update(request.GET.dict())
       
        body, status = self.view_factory.create(request).get(**kwargs)
        return HttpResponse(json.dumps(body, cls=DjangoJSONEncoder), status = status, content_type = 'application/json')

   
    def post(self, request, *args, **kwargs):
        kwargs.update(request.POST.dict())
       
        body, status = self.view_factory.create(request).post(**kwargs)
        return HttpResponse(json.dumps(body, cls=DjangoJSONEncoder), status = status, content_type = 'application/json')

    
    def patch(self, request, *args, **kwargs):
        data = dict(urllib.parse.parse_qsl(request.body.decode("utf-8"), keep_blank_values=True))
        
        kwargs.update(data)
        body, status = self.view_factory.create(request).patch(**kwargs)
        return HttpResponse(json.dumps(body, cls=DjangoJSONEncoder), status = status, content_type = 'application/json')

   
    def delete(self, request, *args, **kwargs):
        data = dict(urllib.parse.parse_qsl(request.body.decode("utf-8"), keep_blank_values=True))
       
        kwargs.update(data)
        body, status = self.view_factory.create(request).delete(**kwargs)
        content = json.dumps(body, cls=DjangoJSONEncoder) if body is not None else ''
        return HttpResponse(content, status = status, content_type = 'application/json')