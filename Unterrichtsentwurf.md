# Unterrichtsentwurf: Conditionals 1 (First Conditional)
## Klasse 8, Realschule | 45 Minuten | Englisch-Grammatikwiederholung mit informatischem Bezug

---

## Lernziele

### ⭐ HAUPTFOKUS - Sprachliche Kompetenzen (Englisch):
- Die SuS wiederholen und festigen die **Bildung von Conditionals 1** (If + present simple, ... will + infinitive)
- Die SuS verstehen die **Verwendung von Conditionals 1** (real possibilities, predictions, warnings, promises)
- Die SuS können **eigene Conditional sentences** für verschiedene Situationen bilden
- Die SuS erkennen die **logische Struktur** von if-clauses und deren Bedeutung

### 💻 NEBENFOKUS - Fachliche Kompetenzen (Informatik):
- Die SuS erkennen die **Parallele zwischen englischer Grammatik und Programmierlogik**
- Die SuS sehen eine **kreative Anwendung** von Conditionals in der Programmierung
- Die SuS verstehen, dass **logisches Denken** in Sprache und Code ähnlich funktioniert

---

## Grammatik-Fokus: First Conditional (Type 1)

### Form:
```
IF + PRESENT SIMPLE, ... WILL + INFINITIVE
```

**Beispiele:**
- If it rains, I will take an umbrella.
- If you study hard, you will pass the exam.
- If we hurry, we will catch the bus.

### Use:
- **Real possibilities** in the future
- **Predictions** based on conditions
- **Warnings** and consequences
- **Promises** depending on conditions

---

## Unterrichtsverlauf nach dem 5-Phasen-Modell (Ziegesar)

### Phase 1: Einstieg/Warming-up (8 Min.)

**Ziel:** Vorwissen zu Conditionals aktivieren, an Alltagserfahrungen anknüpfen

**Aktivität:** "If This, Then That - Real Life"
1. **Bildimpuls:** Foto von Regen und Regenschirm zeigen
2. **Frage:** "What will you do if it rains tomorrow?"
3. **Sammlung:** SuS nennen eigene if-sentences aus ihrem Alltag
   - "If I'm hungry, I will eat something."
   - "If it's sunny, I will go outside."
   - "If I finish my homework, I will play video games."
4. **Tafelsammlung:** Lehrkraft schreibt Sätze auf (noch ohne Grammatikanalyse)

**Sprachliche Mittel:**
- If..., I will...
- If..., then...
- What will happen if...?

**Material:** Bildkarten mit Situationen (Regen, Sonne, Hausaufgaben, etc.)

**Überleitung:** "Look at these sentences - they all follow the same pattern. Let's discover the rule!"

---

### Phase 2: Erarbeitung I - Präsentation (10 Min.)

**Ziel:** Grammatikregel erarbeiten (Form + Use), Verbindung zu Code herstellen

**Aktivität:** "Grammar Detective + Code Connection"

**Teil A: Grammar Rule (6 Min.)**
1. **Analyse der gesammelten Sätze:**
   - Lehrkraft unterstreicht If-clause in einer Farbe, main clause in anderer
   - "If it rains, I will take an umbrella"
   - SuS erkennen das Muster

2. **Regel an der Tafel entwickeln:**
   ```
   IF + PRESENT SIMPLE, ... WILL + INFINITIVE

   Example: If it rains, I will take an umbrella.
            ↓              ↓
         condition       result/consequence
   ```

3. **Use besprechen:**
   - When do we use this? → Real possibilities in the future
   - What does it express? → Predictions, warnings, promises

**Teil B: From Grammar to Code (4 Min.)**
4. **Verbindung zur Programmierung:**
   - "Computers think in the same way!"
   - Englisch: "If it rains, I will take an umbrella"
   - Code:
   ```python
   if it_rains:
       take_umbrella()
   ```
   - "Same logic, different language!"

5. **Parallel zeigen:**
   ```
   ENGLISH:  If temperature is above 20°C, it will be warm.
   CODE:     if temperature > 20:
                 print("It will be warm!")
   ```

**Material:**
- Tafel/Whiteboard für Grammatikregel
- Beamer für Code-Beispiele

**Wichtig:** Code ist nur Visualisierung der Grammatiklogik!

---

### Phase 3: Semantisierung/Erarbeitung II (8 Min.)

**Ziel:** Grammatik festigen durch Analyse und Anwendung

**Aktivität:** "Sentence Builder - English & Code"

**In Partnerarbeit (6 Min.):**
1. **Arbeitsblatt mit gemischten Aufgaben:**

   **Part A: Complete the Conditionals**
   - If it _____ (rain) tomorrow, we _____ (stay) at home.
   - If you _____ (study) hard, you _____ (pass) the test.

   **Part B: Match English to Code**
   - English sentence gegeben → passenden Code zuordnen
   - Code gegeben → passenden English sentence zuordnen

   **Part C: Error Correction**
   - Falsche Conditionals korrigieren:
     - "If it will rain, I take an umbrella." ❌
     - "If it rains, I will take an umbrella." ✓

2. **Plenum (2 Min.):**
   - Ausgewählte Paare präsentieren Lösungen
   - Gemeinsame Korrektur
   - "Why is this correct/incorrect?"

**Leitfragen:**
- What is the condition?
- What is the consequence?
- Which tense do we use in the if-clause? (present simple!)
- Which form do we use in the main clause? (will + infinitive!)

**Material:** Arbeitsblatt "Conditional Builder" (siehe conditional_builder_worksheet.md)

---

### Phase 4: Übung/Practice (12 Min.)

**Ziel:** Selbstständiges Bilden von Conditionals mit kreativem Transfer

**Aktivität:** "Create Your Own Conditionals - From Sentences to Code"

**Struktur:**
1. **Schritt 1 (5 Min.):** Schreibe 5 eigene Conditional sentences
   - Themen vorgegeben:
     1. Weather (Wetter)
     2. School (Schule)
     3. Free time (Freizeit)
     4. Technology (Technologie)
     5. Your choice (Eigene Wahl)

   **Beispiel:**
   - Weather: "If it snows, I will build a snowman."
   - School: "If I get good grades, my parents will be happy."

2. **Schritt 2 (4 Min.):** Übertrage 2 deiner Sätze in Code-Form
   - Kreative Visualisierung der Grammatik!
   - "Same logic, different language"

   **Beispiel:**
   ```
   English: If it snows, I will build a snowman.

   Code: if it_snows:
             build_snowman()
   ```

3. **Schritt 3 (3 Min.):** Optional - Teste deinen Code im Playground
   - Website: Playground-Tab
   - Oder: repl.it / trinket.io

**Differenzierung:**
- **Unterstützung:** Sentence starters und Beispiele auf Arbeitsblatt
- **Erweiterung:** "Can you add a negative condition?" (If it doesn't rain, ...)

**Tool:**
- Arbeitsblatt (Papier oder digital)
- Optional: Python Playground auf der Website

**Material:** Übungsblatt "My Conditionals" (siehe my_conditionals_worksheet.md)

---

### Phase 5: Transfer/Evaluation (7 Min.)

**Ziel:** Reflexion über Grammatik, Verständniskontrolle

**Aktivität:** "Conditionals in Real Life + Quick Quiz"

**Teil 1: Real-World Examples (3 Min.)**
- **Diskussion:** Wo begegnen uns Conditionals?
  - In everyday life: "If..., then..." thinking
  - In technology: Apps, games, websites (all use this logic!)
  - In decisions: "If I do this, this will happen"

- **Beispiele sammeln:**
  - Traffic lights: "If a car is detected, the light will turn red"
  - Video games: "If you collect 100 coins, you will get an extra life"
  - Smartphones: "If the battery is low, the phone will show a warning"

**Teil 2: Exit Quiz (4 Min.)**
- **Quick Grammar Check** (3 Fragen, Think-Pair-Share):

  1. Complete: "If it _____ (be) sunny tomorrow, we _____ (go) to the beach."
  2. Correct the error: "If I will see him, I tell him."
  3. Write your own conditional about tomorrow.

- **Exit Ticket:**
  - "One conditional sentence I will use this week..."
  - "I learned that conditionals..."

**Hausaufgabe:**
"Write 5 conditional sentences about your next weekend. Use different subjects (I, we, my friend, etc.).
Then choose 2 and write them in code-style just for fun!"

**Beispiel:**
```
1. If the weather is nice, I will go cycling.
2. If my friend calls me, we will play football.

Code version:
if weather_is_nice:
    go_cycling()
```

---

## Benötigte Materialien

1. ✅ Bildkarten für Einstieg (Regen, Sonne, etc.)
2. ✅ Tafel/Whiteboard für Grammatikregel
3. ✅ Beamer für Code-Beispiele (nur zur Visualisierung!)
4. ✅ Arbeitsblätter (siehe separate Dateien)
5. ✅ Optional: Computer/Tablets für Playground-Phase
6. ✅ Optional: Interaktive Website als Zusatz

---

## Zeitmanagement-Übersicht

| Phase | Zeit | Aktivität | Fokus |
|-------|------|-----------|-------|
| 1. Einstieg | 8 Min. | Real-Life If-Sentences sammeln | 🇬🇧 Grammatik aktivieren |
| 2. Erarbeitung | 10 Min. | Grammar Rule + Code-Verbindung | 🇬🇧 Regel erarbeiten (80%) + 💻 Code (20%) |
| 3. Semantisierung | 8 Min. | Sentence Builder (Partnerarbeit) | 🇬🇧 Grammatik üben |
| 4. Übung | 12 Min. | Eigene Conditionals schreiben | 🇬🇧 Produktion (70%) + 💻 Transfer (30%) |
| 5. Transfer | 7 Min. | Reflexion + Quiz | 🇬🇧 Verständniskontrolle |
| **GESAMT** | **45 Min.** | | **🇬🇧 70% Grammatik + 💻 30% Code** |

---

## Didaktische Hinweise

### Grammatik-Fokus wahren:
- **Code ist ein Werkzeug**, nicht das Ziel!
- Code dient zur **Visualisierung der Grammatiklogik**
- Wenn Zeit knapp wird: **Grammatikübungen gehen vor Code-Übungen**
- SuS müssen nicht programmieren können - nur die Logik verstehen

### Sprachförderung:
- Konsequent auf Englisch unterrichten (wenn möglich)
- Sentence starters bereitstellen:
  - "If..., I will..."
  - "The condition is..."
  - "The consequence will be..."
- Fehlerkorrektur fokussiert auf Grammatik (nicht auf Code!)

### Differenzierung:
- **Leistungsstarke SuS:**
  - Mehr komplexe Conditionals (mit verschiedenen Subjekten)
  - Transfer zu Code als kreative Herausforderung
  - Second Conditional kurz vorstellen?

- **Leistungsschwächere SuS:**
  - Sentence templates mit Lücken
  - Fokus nur auf Grammatik (Code ist optional!)
  - Visuelle Unterstützung mit Bildern

### Code richtig einsetzen:
- Code zeigt: "Diese Grammatiklogik ist universell!"
- Code motiviert: "Englisch lernen ist praktisch!"
- Code verbindet: "Sprache und Technik denken gleich!"
- ABER: Code ersetzt nicht die Grammatikübung!

---

## Evaluation/Lernerfolgskontrolle

### Formativ (während der Stunde):
- Beobachtung: Können SuS Conditionals korrekt bilden?
- Partnerarbeit: Korrigieren sie sich gegenseitig?
- Exit Quiz: Verstehen sie Form und Use?

### Summativ (für später):
- Hausaufgabe kontrollieren
- Grammar Test in Folgestunde?
- Speaking Test: SuS formulieren Conditionals mündlich

### Erfolgskriterien:
Ein/e SuS ist erfolgreich, wenn er/sie:
- ✅ Die Form "If + present simple, will + infinitive" kennt
- ✅ Eigene Conditional sentences bilden kann
- ✅ Den Unterschied zwischen Bedingung und Konsequenz erkennt
- ✅ Versteht, wann man Conditionals 1 verwendet
- ✅ (Bonus) Die Parallele zur Programmierung erkennt

---

## Ausblick auf Folgestunden

### Englisch-Stunden:
- **Stunde 2:** Conditionals 1 vertiefen (negative forms, questions)
- **Stunde 3:** Conditionals 2 (unreal possibilities)
- **Stunde 4:** Mixed Conditionals practice
- **Stunde 5:** Creative writing mit Conditionals

### Optional - Informatik-Stunden:
- IF statements vertiefen (else, elif)
- Kleines Projekt: Quiz-Game programmieren
- Bedingungen in verschiedenen Kontexten

---

## Reflection für die Lehrkraft

### Nach der Stunde fragen:
- Haben die SuS den grammatischen Unterschied verstanden? (present simple vs. will)
- War die Code-Verbindung hilfreich oder verwirrend?
- Haben schwächere SuS genug Unterstützung bekommen?
- War das Zeitmanagement realistisch?
- Welche Übungen haben besonders gut funktioniert?

### Anpassungen für nächstes Mal:
- Mehr/weniger Zeit für Grammatik-Erarbeitung?
- Code-Teil weglassen wenn zu komplex?
- Mehr visuelle Unterstützung?
- Andere Beispiele verwenden?

---

## 🎯 Merke:
**Diese Stunde ist eine ENGLISCH-Grammatikstunde mit kreativem informatischem Bezug!**
**Priorität: Conditionals 1 verstehen und anwenden können**
**Code = Bonus zur Motivation und Visualisierung**
