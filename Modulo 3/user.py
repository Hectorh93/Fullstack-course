# class User:
#     def __init__(self,email, first_name, last_name):
#         self.email = email
#         self.first_name = first_name
#         self.last_name = last_name
    
#     def greeting(self):
#         return f"Hi {self.first_name} {self.last_name}"
    
# class AdminUser(User):
#     def active_users(self):
#         return "500"


# tiffany = AdminUser("tiffany@devcamp.com", "Tiffany", "Hudgens")
# kristine = User("kristine@devcamp.com", "Kristine", "Hudgens")

# print(tiffany.active_users())
# print(tiffany.greeting())



class Heading:
    def __init__(self,content):
        self.content = content
    def render(self):
        return f"<h1>{self.content}</h1>"

class Div:
    def __init__(self,content):
        self.content = content
    def render(self):
        return f"<div>{self.content}</div>"

div_one = Div("Some content")
heading = Heading("Some big content")
div_two = Div("Anoteher div")

def html_render(tag_object):
    print(tag_object.render())

html_render(div_one)
html_render(div_two)
html_render(heading)
