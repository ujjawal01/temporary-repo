"""factories represents dependency injections. They connect repositeries to interactors  """

from .repositeries import NewsRepo
from .interactors import GetAllNewsInteractor, GetNewsInteractor, CreateNewNewsInteractor, UpdateExistingNewsInteractor, DeleteExistingNewsInteractor, GetAllNewsByTagInteractor
from .views import NewsView, AllNewsView, AllNewsByTagView
from .validators import NewsValidator

class NewsRepoFactory(object):
    @staticmethod
    def get():
        return NewsRepo()

class NewsValidatorFactory(object):
    @staticmethod
    def get():
        return NewsValidator()

class GetAllNewsInteractorFactory(object):
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        return GetAllNewsInteractor(news_repo)

class GetNewsInteractorFactory(object):
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        return GetNewsInteractor(news_repo)

class CreateNewNewsInteractorFactory(object):
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        news_validator = NewsValidatorFactory.get()
        return CreateNewNewsInteractor(news_repo, news_validator)

class UpdateExistingNewsInteractorFactory():
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        news_validator = NewsValidatorFactory.get()
        return UpdateExistingNewsInteractor(news_repo, news_validator)

class DeleteExistingNewsInteractorFactory(object):
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        return DeleteExistingNewsInteractor(news_repo)

class GetAllNewsByTagInteractorFactory(object):
    @staticmethod
    def get():
        news_repo = NewsRepoFactory.get()
        return GetAllNewsByTagInteractor(news_repo)


class NewsViewFactory(object):
    @staticmethod
    def create(request, **kwargs):
        return NewsView(GetNewsInteractorFactory.get(), 
       UpdateExistingNewsInteractorFactory.get(), DeleteExistingNewsInteractorFactory.get())

class AllNewsViewFactory(object):
    @staticmethod
    def create(request, **kwargs):
        return AllNewsView(GetAllNewsInteractorFactory.get(), CreateNewNewsInteractorFactory.get())

class AllNewsByTagViewFactory(object):
    @staticmethod
    def create(request, **kwargs):
        return AllNewsByTagView(GetAllNewsByTagInteractorFactory.get())