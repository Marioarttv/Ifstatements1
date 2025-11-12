# Unterrichtsentwurf: Introduction to IF Statements
## Klasse 8, Realschule | 45 Minuten | Fächerübergreifend: Informatik & Englisch

---

## Lernziele

### Fachliche Kompetenzen (Informatik):
- Die SuS verstehen das Konzept von bedingten Anweisungen (if-statements)
- Die SuS können einfache if-statements lesen und verstehen
- Die SuS können eigene if-statements für Alltagssituationen formulieren

### Sprachliche Kompetenzen (Englisch):
- Die SuS erweitern ihren Wortschatz im Bereich IT/Programmierung
- Die SuS verstehen und verwenden conditional sentences im Kontext der Programmierung
- Die SuS können einfache Algorithmen auf Englisch beschreiben

---

## Unterrichtsverlauf nach dem 5-Phasen-Modell (Ziegesar)

### Phase 1: Einstieg/Warming-up (8 Min.)

**Ziel:** Motivation schaffen, Vorwissen aktivieren, an Alltagserfahrungen anknüpfen

**Aktivität:** "Real-Life Decisions Game"
- Projektion einer Alltagssituation: "If it rains, I take an umbrella"
- SuS sammeln weitere if-then Situationen aus ihrem Alltag auf Englisch
- Lehrkraft sammelt an der Tafel (z.B., "If I'm hungry, I eat something")

**Material:** Präsentationsfolie mit Bildern (Regen/Regenschirm)

**Sprachliche Mittel:**
- If..., then...
- When..., I...
- In case of...

**Überleitung:** "Computers also make decisions! Let's see how..."

---

### Phase 2: Erarbeitung I - Präsentation (10 Min.)

**Ziel:** Einführung der if-statement Syntax, Verbindung zur Alltagssprache herstellen

**Aktivität:** "From English to Code"
1. Zeige Alltagssatz: "If I'm hungry, I eat pizza"
2. Übersetze in Pseudocode:
   ```
   IF hungry
   THEN eat pizza
   ```
3. Zeige echte Python-Syntax:
   ```python
   if hungry:
       eat_pizza()
   ```

**Live-Coding Beispiel:**
```python
age = 14
if age >= 13:
    print("You are a teenager!")
```

**Wichtige Begriffe einführen:**
- **condition** (Bedingung): the part that is checked
- **boolean** (wahr/falsch): True or False
- **code block** (Codeblock): what happens if condition is true
- **indentation** (Einrückung): spaces before the code

**Material:** Beamer für Live-Coding, Python IDLE oder repl.it

---

### Phase 3: Semantisierung/Erarbeitung II (8 Min.)

**Ziel:** Verständnissicherung durch Analyse und Erklärung

**Aktivität:** "Code Detective"
- SuS erhalten Arbeitsblatt mit 4-5 verschiedenen if-statements
- In Partnerarbeit: SuS lesen Code und erklären sich gegenseitig auf Englisch, was passiert
- Plenum: Ausgewählte Paare präsentieren ihre Ergebnisse

**Beispiel-Codes:**
```python
temperature = 25
if temperature > 20:
    print("It's warm!")
```

```python
score = 85
if score >= 50:
    print("You passed the test!")
```

**Leitfragen:**
- What is the condition?
- Is it True or False?
- What happens if it's True?
- What happens if it's False? (Nothing!)

**Material:** Arbeitsblatt "Code Detective" (siehe code_detective_worksheet.md)

---

### Phase 4: Übung/Practice (12 Min.)

**Ziel:** Selbstständiges Anwenden der if-statements

**Aktivität:** "Write Your Own If-Statement"
- SuS arbeiten einzeln oder in Paaren am Computer/Tablet
- Aufgabe: Schreibe 3 eigene if-statements zu verschiedenen Szenarien:
  1. Check if someone can watch a movie (age rating)
  2. Check if it's time for lunch (time)
  3. Check your own creative scenario

**Differenzierung:**
- **Unterstützung:** Template mit Lücken vorbereitet
- **Erweiterung:** "What if the condition is False? Can you add a message?"

**Tool:** Python online editor (repl.it, trinket.io) oder IDLE

**Material:** Übungsblatt mit Szenarien (siehe practice_worksheet.md)

---

### Phase 5: Transfer/Evaluation (7 Min.)

**Ziel:** Gelerntes in neuen Kontext übertragen, Reflexion

**Aktivität:** "Real-World Applications"
1. **Gallery Walk (3 Min.):**
   - SuS hängen ihre Lösungen auf/zeigen am Bildschirm
   - Andere SuS schauen sich Lösungen an und geben Sticker/Feedback

2. **Reflexion (4 Min.):**
   - Wo begegnen uns if-statements im echten Leben?
     - Ampeln (if car detected, then turn red)
     - Spiele (if score > 100, then next level)
     - Apps (if password correct, then login)

   - Quick Exit Ticket: "One thing I learned today..."

**Hausaufgabe:**
"Find one example of an if-statement in your daily life and write it in code-style"

---

## Benötigte Materialien

1. ✅ Beamer/Projektor für Präsentation
2. ✅ Computer/Tablets für praktische Übungen
3. ✅ Python-Umgebung (online oder installiert)
4. ✅ Arbeitsblätter (siehe separate Dateien)
5. ✅ Tafel/Whiteboard für Sammlung

---

## Zeitmanagement-Übersicht

| Phase | Zeit | Aktivität |
|-------|------|-----------|
| 1. Einstieg | 8 Min. | Real-Life Decisions Game |
| 2. Erarbeitung I | 10 Min. | From English to Code, Live-Coding |
| 3. Semantisierung | 8 Min. | Code Detective (Partnerarbeit) |
| 4. Übung | 12 Min. | Write Your Own If-Statement |
| 5. Transfer | 7 Min. | Gallery Walk + Reflexion |
| **GESAMT** | **45 Min.** | |

---

## Didaktische Hinweise

### Sprachförderung:
- Fachbegriffe werden auf Englisch eingeführt mit deutscher Erklärung in Klammern
- Sentence starters bereitstellen: "If..., then...", "The condition is...", "This code checks..."
- Partnerarbeit ermöglicht sprachliche Unterstützung

### Differenzierung:
- **Leistungsstarke SuS:** Können else-statements selbst erforschen
- **Leistungsschwächere SuS:** Erhalten Templates mit Lücken
- **Sprachliche Unterstützung:** Vokabelliste mit Fachbegriffen

### Medien:
- Python IDLE (offline) oder repl.it/trinket.io (online)
- Projektor für Live-Coding
- Optional: Kahoot-Quiz zur Auflockerung

---

## Evaluation/Lernerfolgskontrolle

- Beobachtung während der Partnerarbeit (Phase 3)
- Überprüfung der praktischen Übungen (Phase 4)
- Exit Ticket (Phase 5)
- Hausaufgabe als formative Bewertung

---

## Ausblick auf Folgestunden

- **Stunde 2:** else-statements (Was passiert, wenn die Bedingung falsch ist?)
- **Stunde 3:** elif-statements (Mehrere Bedingungen)
- **Stunde 4:** Verschachtelte if-statements
- **Stunde 5:** Mini-Projekt (z.B. Quiz-Game oder Decision Tree)
