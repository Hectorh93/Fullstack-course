# """
# g $$$$$$$$$$$$$$$$$$$$
# f $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
# t $$$$$$$$$$
# o $$$$$$$$$$$$
# """


# sales = {
#     "google": 20,
#     "facebook": 42,
#     "twitter": 10,
#     "offline" :12,
# }

# print("g " + sales["google"]*"$")
# print("g " + sales["facebook"]*"$")
# print("g " + sales["twitter"]*"$")
# print("g " + sales["offline"]*"$")

# post = ("Python Basics", "Intro guide to python", "Some cool python content")

# title, sub_heading, content = post
# print(post)
# print(title)
# print(id(post))
# post += ("Published",)

# title, sub_heading, content, status = post
# print(id(post))
# print(title)
# print(sub_heading)
# print(content)
# print(status)
# print(post)
# post = ("Python Basics", "Intro guide to python", "Some cool python content")

# tags =["python", "coding", "tutorial"]

# post += (tags,)

# print(post[-1][1])

post = ("Python Basics", "Intro guide to python", "Some cool python content", "published")
# print(post[1::2])
post = list(post)
post.remove("published")
post = tuple(post)
print(post)

