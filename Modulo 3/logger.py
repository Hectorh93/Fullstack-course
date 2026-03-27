# file_builder = open("logger.txt","w+")
# for i in range(100):
#     file_builder.write(f"I'm on line {i+1}\n")
# # file_builder.write("Hey, I'm in a file!")
# file_builder.close()

# import fnmatch
# import os

# def list_files():
#     for file in os.listdir("."):
#         if fnmatch.fnmatch(file,"*txt"):
#             print("Text files: ", file)

# list_files()

def pretty_price(gross_price, extension):
    if isinstance(extension, int):
        extension = extension * 0.01

    return int(gross_price) + extension


print(pretty_price(3.20, 99))
print(pretty_price(3.99, 0.20))
print(pretty_price(3.20, .95))
print(pretty_price(3, 95))
print(pretty_price(3, 2))