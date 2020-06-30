# class Audience:
#     def __init__(self, id, audience_type):
#         self._id = id
#         self._audience_type = audience_type

#     # @property
#     # def id(self):
#     #     return self._id

#     @property
#     def audience_type(self):
#         return self._audience_type
    
#     def __str__(self):
#         return self._audience_type

#     # def __int__(self):
#     #     return self._id


class News:
    def __init__(self, news_title, news_content, visible, tags, audience_type, audience_id = None, id = None, publish_date = None):
        self._id = id
        self._news_title = news_title
        self._news_content = news_content
        self._audience_type = audience_type
        self._audience_id = audience_id
        self._visible = visible
        self._publish_date = publish_date
        self._tags = tags

    @property
    def id(self):
        return self._id

    @property
    def news_title(self):
        return self._news_title

    @property
    def news_content(self):
        return self._news_content

    @property
    def visible(self):
        return self._visible

    @property
    def audience_id(self):
        return self._audience_id

    @property
    def audience_type(self):
        return self._audience_type

    @property
    def tags(self):
        return self._tags

    @property
    def publish_date(self):
        return self._publish_date

    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not self == other