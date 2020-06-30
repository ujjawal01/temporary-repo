"""This code is completely tied to Django ORM but returns object of a class in entities.py (here of class Initiatives)
Thus we completely hide all the ORM details of the object """

from .entities import Initiative
from . models import ORMInitiative

from sso_trial.exceptions import EntityDoesNotExistException, InternalServerException, InvalidEntityException
import logging

# Standard instance of a logger with __name__
stdlogger = logging.getLogger(__name__)

class InitiativeRepo:

    def _decode_db_initiative(self, db_initiative):
        """This converts ORM db_initiative to entity initiative """

        return Initiative(id=db_initiative.id,
                        acronym=db_initiative.acronym,
                        full_name=db_initiative.full_name)

    def get_all_initiatives(self):
       
        all_db_initiatives = ORMInitiative.objects.all()
        
        initiatives =[]
        for db_initiative in all_db_initiatives:
            initiatives.append(self._decode_db_initiative(db_initiative))
        return initiatives

    def get_initiative(self, id):
        try:
            db_initiative = ORMInitiative.objects.get(id = id)
            return self._decode_db_initiative(db_initiative)

        except ORMInitiative.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='initiative', code='not found', message='Initiative not found')
        
        except Exception as e:
            stdlogger.error(" %s" % (e))
            raise InternalServerException()

    def create_new_initiative(self, initiative):
        try:
            db_initiative = ORMInitiative.objects.create(acronym = initiative.acronym, full_name = initiative.full_name)
            return self._decode_db_initiative (db_initiative)
        
        except Exception as e:
            stdlogger.error(" %s" % (e))
            raise InternalServerException()

    def update_existing_initiative(self, initiative):
        try:
            orm_initiative = ORMInitiative.objects.get(id = initiative.id)

            orm_initiative.acronym = initiative.acronym
            orm_initiative.full_name = initiative.full_name

            orm_initiative.save()

            return self._decode_db_initiative (orm_initiative)
            
        except ORMInitiative.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='initiative', code='not found', message='Initiative not found')
        
        except Exception as e:
            stdlogger.error(" %s" % (e))
            raise InternalServerException()

    def delete_existing_initiative(self, id):
        try:
            orm_initiative = ORMInitiative.objects.get(id = id)
            orm_initiative.delete()
        except ORMInitiative.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='initiative', code='not found', message='Initiative not found')
        
        except Exception as e:
            stdlogger.error(" %s" % (e))
            raise InternalServerException()