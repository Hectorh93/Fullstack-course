# name="HECTOR"
# for letters in name:
#     print(letters)

# for num in range(1,10,2):
#     print(num)
# vegetables = ["onion", "broccoli", "apple", "spinach"]
#     # Write your code here
# for vegetable in vegetables:
#     if vegetable == "apple":
#         print("apple is not a vegetable")
#         break
#     print(vegetable)

# dog_house = ["Freddy","White","Tiny","Jon"] # Put dog names here
#     # Write your code here
# counter = 0
# while counter < len(dog_house):
#     print(dog_house[counter])
#     counter +=1

# numbers = [1,2,3,4,5,6]
# result = []
    
#     # Write your code here
# for add in numbers:
#     result.append(add+1)

# # print(result)

# numbers = [1,2,3,4,5,6]
#     # Write your code here
    
# result = [num+1 for num in numbers ]

# print(result)
# answer = False

# if answer == False:
#   answer = True
# print(answer)

# language = "pyton"

# language_check = True if language == "python" else False

# print(language_check)
# number = 4
# if (type(number) == int) and ( number >= 1 and number <= 100):
#     print("Success!")
# else:
#     print("Failure...")

# def sum_two_numbers(pepe,domi):
#     return pepe + domi

# print(sum_two_numbers(6,2))

# def greeting(first):
#     return f"Hello,{first}"
a = 0
def counter(initial_count = 0):
    return initial_count + 1

print(counter(3))
counter()
a += counter()
print(a)
a += counter()
print(a)
a += counter()
print(a)
a += counter()
print(a)