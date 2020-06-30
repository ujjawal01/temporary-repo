"""Contains business properties of entities related to Initiative app"""

class Initiative:
    """Entity representing various initiatives and their properties"""

    def __init__(self, acronym, full_name, id = None): # Mind the underscore after self. 
        self._id = id 
        self._acronym = acronym
        self._full_name = full_name

    @property
    def id(self):
        return self._id
    
    @property
    def acronym(self):
        return self._acronym

    @property
    def full_name(self):
        return self._full_name

    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not self == other