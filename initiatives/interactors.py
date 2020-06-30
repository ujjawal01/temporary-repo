"""All business use cases are written here in form of functions """

from .entities import Initiative

class GetAllInitiativesInteractor(object):
    """Returns(gets) all news """
    def __init__(self,  initiative_repo):
        self. initiative_repo =  initiative_repo

    def set_params(self):
        return self

    def execute(self):
        return self.initiative_repo.get_all_initiatives()

class GetInitiativeInteractor(object): 
    """Returns(gets) an initiatives based on id """
    def __init__(self, initiative_repo):
        self.initiative_repo = initiative_repo

    def set_params(self, id):
        self.id = id
        return self

    def execute(self):
        return self.initiative_repo.get_initiative(id = self.id)


class CreateNewInitiativeInteractor(object):
    """Creates new initiative """
    def __init__(self, initiative_repo, initiative_validator):
        self.initiative_repo = initiative_repo
        self.initiative_validator = initiative_validator

    def set_params(self, acronym, full_name):
        self.acronym = acronym
        self.full_name = full_name
        return self

    def execute(self):
        initiative = Initiative(acronym = self.acronym, full_name = self.full_name)
        self.initiative_validator.validate_initiative(initiative)
        return self.initiative_repo.create_new_initiative(initiative)

class UpdateExistingInitiativeInteractor(object):
    """Updates/modifies existing initiatives """
    def __init__(self, initiative_repo, initiative_validator):
        self.initiative_repo = initiative_repo
        self.initiative_validator = initiative_validator

    def set_params(self, id, acronym, full_name):
        self.id = id
        self.acronym = acronym
        self.full_name = full_name
        return self

    def execute(self):
        initiative = self.initiative_repo.get_initiative(id = self.id)
        new_acronym = self.acronym if self.acronym is not None else initiative.acronym
        new_full_name = self.full_name if self.full_name is not None else initiative.full_name

        updated_initiative = Initiative(id = self.id, acronym =new_acronym, full_name =new_full_name)
        self.initiative_validator.validate_initiative(updated_initiative)
        return self.initiative_repo.update_existing_initiative(updated_initiative)

class DeleteExistingInitiativeInteractor(object):
    """Deletes an existing initiative """
    def __init__(self, initiative_repo):
        self.initiative_repo = initiative_repo

    def set_params(self, id):
        self.id = id
        return self

    def execute(self):
        return self.initiative_repo.delete_existing_initiative(id = self.id)