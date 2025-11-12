# Live-Coding Examples für die Unterrichtsstunde
# Teacher Guide: Introduction to If-Statements

print("="*50)
print("PHASE 2: ERARBEITUNG - LIVE CODING EXAMPLES")
print("="*50)

# ============================================
# Example 1: Simple Age Check
# ============================================
print("\n--- Example 1: Age Check ---")
print("Code:")
print("age = 14")
print("if age >= 13:")
print("    print('You are a teenager!')")
print("\nOutput:")

age = 14
if age >= 13:
    print("You are a teenager!")

print("\n💡 Explain: The condition 'age >= 13' is True, so the code runs!")

# ============================================
# Example 2: Temperature Check
# ============================================
print("\n--- Example 2: Temperature Check ---")
print("Code:")
print("temperature = 25")
print("if temperature > 20:")
print("    print('It is warm outside!')")
print("\nOutput:")

temperature = 25
if temperature > 20:
    print("It's warm outside!")

# ============================================
# Example 3: Boolean Variable
# ============================================
print("\n--- Example 3: Rain Check ---")
print("Code:")
print("is_raining = True")
print("if is_raining:")
print("    print('Take an umbrella!')")
print("\nOutput:")

is_raining = True
if is_raining:
    print("Take an umbrella!")

print("\n💡 Explain: Boolean variables can be used directly as conditions!")

# ============================================
# Example 4: Different Comparison Operators
# ============================================
print("\n--- Example 4: Comparison Operators ---")

score = 85
print(f"\nScore = {score}")

print("\n1. Greater than (>):")
if score > 80:
    print("   Excellent score!")

print("\n2. Greater or equal (>=):")
if score >= 85:
    print("   Grade: A")

print("\n3. Less than (<):")
if score < 50:
    print("   Need to study more")
else:
    print("   (This won't print because condition is False)")

print("\n4. Equal to (==):")
if score == 85:
    print("   Exactly 85 points!")

# ============================================
# Example 5: String Comparison
# ============================================
print("\n--- Example 5: String Comparison ---")
print("Code:")
print("name = 'Alice'")
print("if name == 'Alice':")
print("    print('Hello, Alice!')")
print("\nOutput:")

name = "Alice"
if name == "Alice":
    print("Hello, Alice!")

print("\n💡 Explain: We can also compare strings (text)!")

# ============================================
# Interactive Demo for Students
# ============================================
print("\n" + "="*50)
print("INTERACTIVE DEMO - TRY IN CLASS")
print("="*50)

print("\n--- Let students change values and predict output! ---")

# Demo 1: Change the age
age = 10  # Change this to different values!
print(f"\nIf age = {age}:")
if age >= 13:
    print("You are a teenager!")
print("(What happens? Nothing, because condition is False!)")

# Demo 2: Change the score
score = 45  # Change this to different values!
print(f"\nIf score = {score}:")
if score >= 50:
    print("You passed!")
print("(What happens now?)")

# ============================================
# Common Mistakes to Show
# ============================================
print("\n" + "="*50)
print("COMMON MISTAKES TO ADDRESS")
print("="*50)

print("\n❌ WRONG: Missing colon")
print("if age > 13")
print("    print('Teen')")

print("\n✅ CORRECT:")
print("if age > 13:")
print("    print('Teen')")

print("\n❌ WRONG: Missing indentation")
print("if age > 13:")
print("print('Teen')")

print("\n✅ CORRECT:")
print("if age > 13:")
print("    print('Teen')")

print("\n❌ WRONG: Using = instead of ==")
print("if name = 'Max':")

print("\n✅ CORRECT:")
print("if name == 'Max':")

# ============================================
# Real-World Examples for Discussion
# ============================================
print("\n" + "="*50)
print("REAL-WORLD EXAMPLES FOR PHASE 5")
print("="*50)

print("\n1. Traffic Light:")
print("   if car_detected:")
print("       turn_red()")

print("\n2. Login System:")
print("   if password == correct_password:")
print("       login_user()")

print("\n3. Game Level:")
print("   if score > 100:")
print("       next_level()")

print("\n4. Thermostat:")
print("   if temperature < 18:")
print("       turn_heating_on()")

print("\n5. Alarm Clock:")
print("   if time == alarm_time:")
print("       ring_alarm()")
