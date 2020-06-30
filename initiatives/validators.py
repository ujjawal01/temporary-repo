from sso_trial.exceptions import InvalidEntityException

import logging

# Standard instance of a logger with __name__
stdlogger = logging.getLogger(__name__)

class InitiativeValidator(object):
    def validate_initiative(self, initiative):
        if initiative.acronym is None:
            stdlogger.error('Invalid Initiative Entity')
            raise InvalidEntityException(source='acronym', code='empty_attribute', message='initiative acronym cannot be empty') 
        if initiative.full_name is None:
            stdlogger.error('Invalid Initiative Entity')
            raise InvalidEntityException(source='full_name', code='empty_attribute', message='Initiative full name cannot be empty') 