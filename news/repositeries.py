from .entities import News
from . models import ORMNews, ORMAudience
from sso_trial.exceptions import EntityDoesNotExistException, InternalServerException, InvalidEntityException
import logging

# Standard instance of a logger with __name__
stdlogger = logging.getLogger(__name__)
class NewsRepo:

    def _decode_db_news(self, db_news):
        """This converts ORM db_news to entity news """
       
        audience = db_news.audience

        return News(id=db_news.id,news_title=db_news.news_title,
                        news_content=db_news.news_content, visible=db_news.visible, 
                        publish_date=db_news.publish_date, audience_id=audience.id, 
                        audience_type= audience.audience_type, tags=db_news.tags)

    def get_all_news(self):
        stdlogger.info("Call to get_all_news method")
        all_db_news = ORMNews.objects.all()
        
        news =[]
        for db_news in all_db_news:
            news.append(self._decode_db_news(db_news))
        return news

    def get_news(self, id):
        stdlogger.info("Call to get_news method")
        try:
            stdlogger.debug("Getting the news from id")
            db_news = ORMNews.objects.get(id = id)
            return self._decode_db_news(db_news)

        except ORMNews.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='news', code='not found', message='News not found')
        
        except Exception as e:
            stdlogger.error(" %s" % (e))
            raise InternalServerException()

    def create_new_news(self, news):
        stdlogger.info("Call to create_news method")
        try:
            stdlogger.debug("Creating a news")
            
            orm_aud,created = ORMAudience.objects.get_or_create(audience_type = news.audience_type)
           
            db_news = ORMNews.objects.create(news_title = news.news_title, news_content = news.news_content, visible = (news.visible == "true"), tags = news.tags, audience=orm_aud)
           
            return self._decode_db_news (db_news)    

        except Exception as e:
            stdlogger.error("%s" % (e))
            raise InternalServerException()

    
    def update_existing_news(self,news):
        stdlogger.info("Call to update_existing_news method")
        try:
            stdlogger.debug("Creating a news")
            db_news = ORMNews.objects.get(id = news.id)
            db_aud, created = ORMAudience.objects.get_or_create(audience_type = news.audience_type)
            db_news.audience.clear()

            db_news.news_title = news.news_title
            db_news.news_content = news.news_content
            db_news.visible = (news.visible == "true")
            db_news.tags = news.tags
            db_news.audience = db_aud
            db_news.save()

            return self._decode_db_news (db_news)

        except ORMNews.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='news', code='not found', message='News not found')

        except Exception as e:
            stdlogger.error("%s" % (e))
            raise InternalServerException()

    def delete_existing_news(self, id):
        stdlogger.info("Call to delete_existing_news method")
        try:
            db_news = ORMNews.objects.get(id = id)
            db_news.delete()

        except ORMNews.DoesNotExist as e:
            stdlogger.error("%s" % (e))
            raise EntityDoesNotExistException(source='news', code='not found', message='This news does not exist. It may already be deleted')
        
        except Exception as e:
            stdlogger.error("%s" % (e))
            raise InternalServerException()

    def get_all_news_by_tag(self, tag):
        stdlogger.info("Call to get_news method")
        try:
            all_db_news = ORMNews.objects.filter(tags__icontains = tag)

            news =[]
            for db_news in all_db_news:
                news.append(self._decode_db_news(db_news))
            return news

        except Exception as e:
            stdlogger.error("%s" % (e))
            raise InternalServerException()
