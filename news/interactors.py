from .entities import News

class GetAllNewsInteractor(object):
    """Returns(gets) all news """
    def __init__(self, news_repo):
        self.news_repo = news_repo

    def set_params(self):
        return self

    def execute(self):
        return self.news_repo.get_all_news()

class GetNewsInteractor(object): 
    """Returns(gets) an news based on id """
    def __init__(self, news_repo):
        self.news_repo = news_repo

    def set_params(self, id):
        self.id = id
        return self

    def execute(self):
        return self.news_repo.get_news(id = self.id)

class CreateNewNewsInteractor(object):
    """Creates new news """
    def __init__(self, news_repo, news_validator):
        self.news_repo = news_repo
        self.news_validator = news_validator

    def set_params(self, news_title, news_content, tags, audience_type ='G', visible = True):
        self.news_title = news_title
        self.news_content = news_content
        self.visible = visible
        self.audience_tpye = audience_type
        self.tags = tags
        return self

    def execute(self):
        news = News(news_title=self.news_title, news_content=self.news_content, tags=self.tags,visible = self.visible, audience_type = self.audience_tpye)
        self.news_validator.validate_news(news)
        return self.news_repo.create_new_news(news)

class UpdateExistingNewsInteractor(object):
    """Updates/modifies existing news """
    def __init__(self, news_repo, news_validator):
        self.news_repo = news_repo
        self.news_validator = news_validator

    def set_params(self, id, news_title, news_content, tags, visible, audience_tpye):
        self.id = id
        self.news_title = news_title
        self.news_content = news_content
        self.visible = visible
        self.audience_type= audience_tpye
        self.tags = tags
        return self

    def execute(self):
        news = self.news_repo.get_news(id=self.id)
        new_audience_type = self.audience_type if self.audience_type is not None else news.audience_type
        new_title = self.news_title if self.news_title is not None else news.news_title
        new_content = self.news_content if self.news_content is not None else news.news_content
        new_visible = self.visible if self.visible is not None else news.visible
        new_tags = self.tags if self.tags is not None else news.tags

        updated_news = News(id =self.id, news_title=new_title, news_content= new_content, visible= new_visible, tags= new_tags, publish_date= news.publish_date, audience_type= new_audience_type)
        self.news_validator.validate_news(updated_news)
        
        return self.news_repo.update_existing_news(updated_news)

class DeleteExistingNewsInteractor(object):
    """Deletes an existing news """
    def __init__(self, news_repo):
        self.news_repo = news_repo

    def set_params(self, id):
        self.id = id
        return self

    def execute(self):
        return self.news_repo.delete_existing_news(id = self.id)

class GetAllNewsByTagInteractor(object):
   
    def __init__(self, news_repo):
        self.news_repo = news_repo

    def set_params(self, tag):
        self.tag = tag
        return self

    def execute(self):
        return self.news_repo.get_all_news_by_tag(tag = self.tag)
