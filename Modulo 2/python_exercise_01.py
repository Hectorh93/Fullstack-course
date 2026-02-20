"""
dynamic_reducer([1,2,3],'+') # 6 
dynamic_reducer([1,2,3],'-') # - 
dynamic_reducer([1,2,3],'*') # -
dynamic_reducer([1,2,3],'/') # -
"""

import operator
from functools import reduce

def dynamic_reducer(collection, op):
    operators = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv
    }

    return reduce((lambda total, element: operators[op](total, element)), collection)

print(dynamic_reducer([1,2,250],"+")) # 6 
print(dynamic_reducer([1,2,3],"-")) # 6 
print(dynamic_reducer([1,2,55],"*")) # 6 
print(dynamic_reducer([100,2,3],"/")) # 6 

