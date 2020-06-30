class NewsSerializer:
    @staticmethod
    def serialize(news):
        return {
            'id': int(news.id),
            'news_title': news.news_title,
            'news_content': news.news_content,
            'visible': news.visible,
            'publish_date': news.publish_date,
            'audience_id':  news.audience_id,
            'audience_type': news.audience_type,
            'tags': news.tags,
        }

class MultipleNewsSerializer:

    @staticmethod
    def serialize(news):
        return [NewsSerializer.serialize(news_) for news_ in news]

# class AudienceSerializer:
#     @staticmethod
#     def serialize(audience):
#         return{
#             # 'audience_id': int(audience.id),
#             'audience_type': audience.audience_type
#         }

# class MultipleAudienceSerializer:

#     @staticmethod
#     def serialize(audience):
#         return [AudienceSerializer.serialize(audience_) for audience_ in audience]