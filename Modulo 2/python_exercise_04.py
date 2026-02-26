# product_id = 123
# sale_price = 14.99
# tip_percentage = 1/5
# new_product = 150

# print('Addition')
# print(100 + 42)

# print('Subtraction')
# print(100 - 42)

# print('Division')
# print(100 / 42)
# print(100 / 38)

# print('Floor Division')
# print(100 // 42)
# print(100 // 38)

# print('Multiplication')
# print(100 * 42)

# print('Modulus')
# print(100 % 42)

# print('Exponents')
# print(100 ** 42)



# """
# Please -> Parans ()
# Excuse -> Exponents **
# My -> Multiplication *
# Dear -> Division /
# Aunt -> Addition +
# Sally -> Subtraction -

# 8 + 2 * 5 - (9 + 2) ** 2
# 8 + 2 * 5 - 11 ** 2
# 8 + 2 * 5 - 121
# 8 + 10 - 121
# -103
# """

# calculation = 8 + 2 * 5 - (9 + 2) ** 2

# print(calculation)

# total = 100

# total = total + 10
# total += 10
# total -= 10
# total *= 2
# total /= 10
# total //= 10
# total **= 2
# total %= 2

# product_two = 120
# product_three = 10
                    
# total += product_two
# total += product_three

# print(total)

# """ 
# manual_exponent(2,3)
# #>8
# """

#Iterative approach
# def manual_exponent(num,exp):
#     counter = exp-1
#     total = num
#     while counter > 0:
#         total *= num 
#         counter -= 1
#     return total

# print(manual_exponent(2,3))
# print(manual_exponent(10,2))

# Functional approach
from functools import reduce

def manual_exponent(num,exp):
    computer_list = [num] * exp
    return(reduce(lambda total, element: total * element, computer_list))

print(manual_exponent(2,3))
print(manual_exponent(10,2))