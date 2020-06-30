"""factories represents dependency injections. They connect repositeries to interactors  """

from .repositeries import InitiativeRepo
from .interactors import GetAllInitiativesInteractor, GetInitiativeInteractor, CreateNewInitiativeInteractor, UpdateExistingInitiativeInteractor, DeleteExistingInitiativeInteractor
from .views import InitiativeView, InitiativesView
from .validators import InitiativeValidator

class InitiativeRepoFactory(object):
    @staticmethod
    def get():
        return InitiativeRepo()

class InitiativeValidatorFactory(object):
    @staticmethod
    def get():
        return InitiativeValidator()

class GetAllInitiativesInteractorFactory(object):
    @staticmethod
    def get():
        initiative_repo = InitiativeRepoFactory.get()
        return GetAllInitiativesInteractor(initiative_repo)

class GetInitiativeInteractorFactory(object):
    @staticmethod
    def get():
        initiative_repo = InitiativeRepoFactory.get()
        return GetInitiativeInteractor(initiative_repo)

class CreateNewInitiativeInteractorFactory(object):
    @staticmethod
    def get():
        initiative_repo = InitiativeRepoFactory.get()
        initiative_validator = InitiativeValidatorFactory.get()
        return CreateNewInitiativeInteractor(initiative_repo, initiative_validator)

class UpdateExistingInitiativeInteractorFactory():
    @staticmethod
    def get():
        initiative_repo = InitiativeRepoFactory.get()
        initiative_validator = InitiativeValidatorFactory.get()
        return UpdateExistingInitiativeInteractor(initiative_repo, initiative_validator)

class DeleteExistingInitiativeInteractorFactory(object):
    @staticmethod
    def get():
        initiative_repo = InitiativeRepoFactory.get()
        return DeleteExistingInitiativeInteractor(initiative_repo)


class InitiativeViewFactory(object):
    @staticmethod
    def create(request, **kwargs):
        return InitiativeView(GetInitiativeInteractorFactory.get(),UpdateExistingInitiativeInteractorFactory.get(), 
            DeleteExistingInitiativeInteractorFactory.get())

class InitiativesViewFactory(object):
    @staticmethod
    def create(request, **kwargs):
        return InitiativesView(GetAllInitiativesInteractorFactory.get(), CreateNewInitiativeInteractorFactory.get())