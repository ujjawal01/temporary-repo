from sso_trial.exceptions import InvalidEntityException

import logging

# Standard instance of a logger with __name__
stdlogger = logging.getLogger(__name__)

class NewsValidator(object):
    def validate_news(self, news):
        if news.news_title is None or news.news_title=="" :
            stdlogger.error('Invalid News Entity, No title')
            raise InvalidEntityException(source='news_title', code='empty_attribute', message='news title cannot be empty') 
        if news.news_content is None or news.news_content=="" :
            stdlogger.error('Invalid News Entity, No content')
            raise InvalidEntityException(source='news_content', code='empty_attribute', message='news content cannot be empty') 
        if news.tags is None or news.tags == "":
            stdlogger.error('Invalid News Entity, No tags')
            raise InvalidEntityException(source='news_tags', code='empty_attribute', message='news tags cannot be empty')
        if news.audience_type is None:
            stdlogger.error('Invalid News Entity, No audience')
            raise InvalidEntityException(source='news_audience', code='empty_attribute', message='news audience cannot be empty')
        
        return True 