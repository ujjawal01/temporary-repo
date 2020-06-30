"""These classes get interactors from factories.py, parse the input parameters and format the output with serializers"""

from django.shortcuts import render

from . serializers import MultipleInitiativesSerializer, InitiativeSerializer
from sso_trial.decorators import serialize_exceptions

class InitiativesView(object):
    def __init__(self, get_all_initiatives_interactor=None, create_new_initiative_interactor = None):
        self.get_all_initiatives_interactor = get_all_initiatives_interactor
        self.create_new_initiative_interactor = create_new_initiative_interactor

    @serialize_exceptions
    def get(self):
        initiatives = self.get_all_initiatives_interactor.set_params().execute()

        body = MultipleInitiativesSerializer.serialize(initiatives)
        status = 200

        return body,status

    @serialize_exceptions
    def post(self, acronym =None , full_name = None ):
       
        initiative = self.create_new_initiative_interactor.set_params(acronym = acronym, full_name = full_name).execute()
        body = InitiativeSerializer.serialize(initiative)
        status = 201

        return body,status


class InitiativeView(object):
    def __init__(self, get_initiative_interactor=None, update_existing_initiative_interactor = None, delete_existing_initiative_interactor = None):
        
        self.get_initiative_interactor = get_initiative_interactor
        self.update_existing_initiative_interactor = update_existing_initiative_interactor
        self.delete_existing_initiative_interactor = delete_existing_initiative_interactor
    
    @serialize_exceptions
    def get(self, id):
       
        initiative = self.get_initiative_interactor.set_params(id = id).execute()

        body = InitiativeSerializer.serialize(initiative)
        status = 200

        return body,status

   
    @serialize_exceptions
    def patch(self, id, acronym = None , full_name = None):
       
        initiative = self.update_existing_initiative_interactor.set_params(id = id, acronym= acronym, full_name= full_name).execute()

        body = InitiativeSerializer.serialize(initiative)
        status = 200

        return body,status

    @serialize_exceptions
    def delete(self, id):
       
        self.delete_existing_initiative_interactor.set_params(id = id).execute()

        body = None
        status = 204

        return body,status