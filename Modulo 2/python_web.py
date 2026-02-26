# uri = 'https://www.google.com/search?q='
# tags = ['python', 'development', 'tutorial']
# formatted_tags = '+'.join(tags)
# query_uri = f'{uri}{formatted_tags}'

# print(query_uri)
# tags = ['python', 'development', 'tutorial',"code",]
# tag_range = tags[1:2]
# print(tag_range)

# tags = [
#     "python",
#     "development",
#     "tutorial",
#     "code",
#     "programming",
#     "computer science"
# ]

# tag_range = tags[:-1:2]
# tag_range = tags[::-2]
# print(tag_range)
# tags.sort(reverse=True)
# sorted_tags = tags.sort(reverse=True)
# print(sorted_tags)
# print(tags)

# sale_prices =[
#     100,
#     83,
#     220,
#     40,
#     100,
#     400,
#     10,
#     1,
#     3
# ]



# # sorted_list = sorted(sale_prices, reverse=True)
# # print(sorted_list)
# import math

# sorted_list = sorted(sale_prices)
# num_of_sales = len(sorted_list)
# first_sales_items = sorted_list[:math.floor(num_of_sales/2)]
# last_sales_items =sorted_list[-(math.floor(num_of_sales/2)):]
# median = sorted_list[math.floor(num_of_sales/2):(math.floor(num_of_sales/2))+1]
# print(first_sales_items)
# print(last_sales_items)
# print(median)

# tags = [
#     "python",
#     "development",
#     "tutorial",
#     "code",
#     "programming",
# ]

# print(tags[1:4:2])
# slice_obj = slice(1,4,2)
# print(slice_obj)
# print(tags[slice_obj])

# tags = [
#     "python",
#     "development",
#     "tutorial",
#     "code"
# ]
# # tags.extend("Programming")
# new_tags = tags + ["Programming"]
# tags.extend(["Programming"])
# print(new_tags)
# print(tags)


# import numpy as np

# def weighted_lottery(weights):
#     container_list =[]
#     for (name, weight) in weights.items():
#         for _ in range(weight):
#             container_list.append(name)
#     return np.random.choice(container_list)

# # weights = {
# #     "winning" : 1,
# #     "losing" : 1000
# # }

# # weighted_lottery(weights)

# other_weights ={
#     "winning" : 1,
#     "break_even" :2,
#     "losing" :3
# }

# print(weighted_lottery(other_weights))

# players = {
#     "ss" : "Correa",
#     "2b" : "Altuve",
#     "3b" : "Bregman",
#     "DH" : "Gattis",
#     "OF" : "Springer"
# }
# second_base = players["2b"]

# print(second_base)

# teams = {
#   "astros": ["Altuve", "Correa", "Bregman"],
#   "angels": ["Trout", "Pujols"],
#   "yankees": ["Judge", "Stanton"],
# }
# print(teams['astros'][0])
# astros = teams['astros']
# print(astros)
# print(teams['angels'])
# print(teams['yankees'])

# teams = {
#   "astros": ["Altuve", "Correa", "Bregman"],
#   "angels": ["Trout", "Pujols"],
#   "yankees": ["Judge", "Stanton"],
#   "red sox":["Price", "Betts"],
# }

# featured_team=teams.get("yankees","No featured team")

# print(featured_team)

# players = {
#   "ss" : "Correa",
#   "2b" : "Altuve",
#   "3b" : "Bregman",
#   "DH" : "Gattis",
#   "OF" : "Springer",
# }
# player_names= list(players.copy().values())

# print(list(player_names))
# # player_names = list(players.copy().values())

# teams = {
#   "astros" : ["Altuve", "Correa", "Bregman"],
#   "angels":  ["Trout", "Pujols"],
#   "yankees": ["Judge", "Stanton"],
#   "red sox": ["Price", "Betts"],
# }
# team_groupings = teams.items()
# print(team_groupings)
# # team_groupings = teams.items()

# # """
# # [
# #   ('astros', ['Altuve', 'Correa', 'Bregman']),
# #   ('angels', ['Trout', 'Pujols']),
# #   ('yankees', ['Judge', 'Stanton']),
# #   ('red sox', ['Price', 'Betts'])
# # ]
# # """

# print(list(team_groupings)[0][0])

# teams = {
#   "astros" : ["Altuve", "Correa", "Bregman"],
#   "angels":  ["Trout", "Pujols"],
#   "yankees": ["Judge", "Stanton"],
#   "red sox": ["Price", "Betts"],
# }

# removed_team =teams.pop("yankees","no team found")
# print(teams) 
# print(removed_team)

# teams = [
#   {"astros":{
#     "2b":"Altuve",
#     "SS":"Correa",
#     "3b":"Bregman",
#     }
#   },
#   {"angels":{
#     "OF":"Trout",
#     "SS":"Pujols",
#     }
#   }
# ]

# # print(teams[0])
# angels =teams[1].get("angels","Team not found")
# print(list(angels.values())[1])


