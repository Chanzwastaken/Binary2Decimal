def binary_to_decimal(binary):
    decimal = 0
    power = 0
    
    # Convert binary string to integer in reverse order
    for digit in reversed(binary):
        decimal += int(digit) * (2 ** power)
        power += 1
    
    return decimal


# Prompt the user for a binary number
binary_input = input("Enter a binary number: ")

# Validate the input
if not all(char in '01' for char in binary_input):
    print("Invalid binary number. Please enter a valid binary number.")
else:
    # Convert binary to decimal
    decimal_output = binary_to_decimal(binary_input)
    print("Decimal equivalent:", decimal_output)