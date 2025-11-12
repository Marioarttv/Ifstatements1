# IF Statements - Presentation Slides
## Klasse 8 | 45 Minuten

---

## Slide 1: Title Slide

# Introduction to IF Statements
## Making Decisions in Code

**Klasse 8 - Informatik & Englisch**

---

## Slide 2: Real-Life Decisions

# We Make Decisions Every Day! 🤔

**If it rains... I take an umbrella ☔**

**If I'm hungry... I eat something 🍕**

**If it's cold... I wear a jacket 🧥**

### Can you think of more examples?

---

## Slide 3: Computers Make Decisions Too!

# How Do Computers Make Decisions?

**Traffic Lights 🚦**
- If car detected → Turn red

**Games 🎮**
- If score > 100 → Next level

**Apps 📱**
- If password correct → Login

---

## Slide 4: From English to Code

# Let's Translate!

**English:**
> If I'm hungry, I eat pizza.

**Pseudocode:**
```
IF hungry
THEN eat pizza
```

**Python:**
```python
if hungry:
    eat_pizza()
```

---

## Slide 5: The IF Statement Structure

# Anatomy of an IF Statement

```python
if condition:
    code_block
```

**Parts:**
1. 🔍 **if** - keyword (starts the statement)
2. ❓ **condition** - what we check (True or False)
3. **:** - colon (don't forget!)
4. ↘️ **indentation** - spaces before code
5. 📝 **code block** - what happens if True

---

## Slide 6: Real Code Example

# Example: Age Check

```python
age = 14

if age >= 13:
    print("You are a teenager!")
```

**What happens?**
1. Check: Is age ≥ 13?
2. Answer: Yes! (14 ≥ 13 is True)
3. Action: Print the message

---

## Slide 7: Comparison Operators

# How to Compare Things

| Operator | Meaning | Example |
|----------|---------|---------|
| **>** | greater than | age > 12 |
| **<** | less than | score < 50 |
| **>=** | greater or equal | points >= 100 |
| **<=** | less or equal | time <= 18 |
| **==** | equal to | name == "Max" |
| **!=** | not equal | color != "red" |

⚠️ **Important:** Use `==` for comparison, not `=`!

---

## Slide 8: Temperature Example

# Live Coding Demo 🌡️

```python
temperature = 25

if temperature > 20:
    print("It's warm outside!")
```

**Question:** What if temperature = 15?
🤔 Nothing happens! (condition is False)

---

## Slide 9: Boolean Values

# True or False? That's the Question!

```python
is_raining = True

if is_raining:
    print("Take an umbrella!")
```

**Boolean = Wahr oder Falsch**
- `True` = yes, correct, wahr
- `False` = no, incorrect, falsch

---

## Slide 10: Your Turn! 💪

# Practice Time!

**Task 1:** Code Detective
- Read code examples
- Explain what happens

**Task 2:** Write Your Own
- Create 3 if-statements
- Test your code

**Let's code!** 🚀

---

## Slide 11: Common Mistakes ❌

# Watch Out For These!

**❌ Mistake 1:** Forgetting the colon
```python
if age > 13
    print("Teen")
```

**❌ Mistake 2:** Wrong indentation
```python
if age > 13:
print("Teen")
```

**❌ Mistake 3:** Using = instead of ==
```python
if name = "Max":
```

---

## Slide 12: Real-World Applications 🌍

# Where Do We Find IF Statements?

- 🚦 **Traffic lights**
- 🎮 **Video games**
- 📱 **Apps (login, notifications)**
- 🌡️ **Thermostats**
- ⏰ **Alarm clocks**
- 🚪 **Automatic doors**

**Can you find more examples?**

---

## Slide 13: What We Learned Today ✅

# Summary

1. ✅ IF statements help computers make decisions
2. ✅ Conditions are True or False
3. ✅ Code runs only if condition is True
4. ✅ Syntax: `if condition:`
5. ✅ Don't forget: colon and indentation!

---

## Slide 14: Next Steps 🚀

# Coming Up Next...

**Stunde 2:** What if the condition is False?
→ **else** statements

**Stunde 3:** Multiple conditions
→ **elif** statements

**Stunde 4:** Combining conditions
→ **and, or, not**

**Stunde 5:** Mini-Project
→ Build a Quiz Game!

---

## Slide 15: Homework 📚

# Your Mission! 🎯

**Find one example of an IF statement in your daily life**

Write it in this format:
```python
if _____________:
    _____________
```

**Example:**
```python
if battery_low:
    show_warning_message()
```

---

## Slide 16: Thank You!

# Great Job Today! 🎉

**Questions?**

**Remember:**
> Every programmer started as a beginner.
> Keep practicing! 💻

**See you next lesson!**
