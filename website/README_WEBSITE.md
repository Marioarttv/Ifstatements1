# IF Statements Interactive Website 🎮
## Interaktive Lernplattform für die Unterrichtsstunde

---

## 📖 Übersicht

Diese interaktive Website begleitet die Unterrichtsstunde zu IF Statements und verbindet:
- **Englisch:** Conditional sentences (If..., then...)
- **Informatik:** IF statements in der Programmierung (Python)

Die Website ist speziell für die **8. Klasse Realschule** konzipiert und bietet verschiedene interaktive Lernaktivitäten.

---

## 🎯 Features

### 1. 🏠 Introduction
- Einführung in IF statements
- Visualisierung: Von Englisch zu Code
- Syntax-Erklärung

### 2. 🎯 Game 1: Real Life Decisions
- Interaktive Szenarien aus dem Alltag
- Slider zur Wertänderung
- Sofortiges Feedback (True/False)
- Score-Tracking
- **5 verschiedene Szenarien:**
  - Temperatur-Check
  - Alters-Verifizierung
  - Test-Score
  - Game Level
  - Geschwindigkeitslimit

### 3. 💻 Game 2: Code It!
- Lückentexte für IF statements
- Direktes Feedback
- Score-Tracking
- **4 verschiedene Challenges:**
  - Age Check
  - Temperature Warning
  - Password Check
  - Score Check

### 4. 🔬 Code Playground
- Eigener Code-Editor
- Python-Code direkt im Browser ausführen
- 4 vorgefertigte Beispiele zum Laden
- Experimentieren ohne Installation

### 5. 📝 Quiz
- 5 Multiple-Choice-Fragen
- Progress Bar
- Sofortiges Feedback
- Finale Auswertung mit Prozent-Score

---

## 💻 Technische Details

### Technologie-Stack:
- **HTML5** - Struktur
- **CSS3** - Styling mit modernem Design
- **Vanilla JavaScript** - Interaktivität (keine Frameworks!)

### Browser-Kompatibilität:
- ✅ Chrome / Edge (empfohlen)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (nicht unterstützt)

### Keine Installation nötig!
- Rein browser-basiert
- Kein Python-Installation erforderlich
- Keine externen Abhängigkeiten
- Funktioniert offline (nach erstem Laden)

---

## 🚀 Verwendung im Unterricht

### Vorbereitung:

1. **Website öffnen:**
   - Einfach `index.html` in einem Browser öffnen
   - ODER auf einem Webserver hosten

2. **Beamer/Projektor:**
   - Für gemeinsame Demonstrationen
   - Kann auch gemeinsam durchgegangen werden

3. **Schüler-Geräte:**
   - Jeder SuS öffnet die Website auf eigenem Gerät
   - Tablets, Laptops, oder Desktop-PCs

### Einsatz in den 5 Phasen:

#### Phase 1: Einstieg (8 Min.)
- **Tab: Introduction** zusammen ansehen
- Beispiele besprechen
- Von Englisch zu Code überleiten

#### Phase 2: Erarbeitung I (10 Min.)
- Live-Demo mit **Game 1** am Beamer
- SuS können Werte vorschlagen
- Gemeinsam Bedingungen testen

#### Phase 3: Semantisierung (8 Min.)
- SuS arbeiten mit **Game 1** in Paaren
- Verschiedene Szenarien durchspielen
- Ergebnisse vergleichen

#### Phase 4: Übung (12 Min.)
- **Game 2** - Code It! individuell bearbeiten
- **Playground** für eigene Experimente
- Lehrkraft unterstützt bei Bedarf

#### Phase 5: Transfer (7 Min.)
- **Quiz** als Lernkontrolle
- Ergebnisse vergleichen (freiwillig)
- Reflexion über Gelerntes

---

## 📋 Unterrichtsszenarien

### Szenario A: Computer-Raum (optimal)
- Jeder SuS hat eigenen PC
- Kann eigenständig arbeiten
- Lehrkraft kann individuell unterstützen

### Szenario B: Tablet-Klasse
- SuS arbeiten zu zweit an einem Tablet
- Fördert Kommunikation auf Englisch
- Peer-Teaching-Effekt

### Szenario C: Nur Beamer
- Website wird gemeinsam am Beamer durchgegangen
- SuS rufen Antworten zu
- Interaktiv trotz nur einem Gerät

### Szenario D: Hausaufgabe
- Website-Link wird mitgegeben
- SuS können zu Hause weiterüben
- Vertiefung des Gelernten

---

## 🎨 Differenzierung

### Für leistungsstarke SuS:
- **Playground** nutzen für eigene Experimente
- Komplexere IF statements ausprobieren
- `else` und `elif` selbst erforschen (nicht in der Website, aber anregend)

### Für leistungsschwächere SuS:
- **Introduction** mehrmals durchgehen
- **Game 1** langsam und mit Unterstützung
- Partnerarbeit mit stärkeren SuS

### Sprachliche Unterstützung:
- Alle Texte auf Englisch, aber einfach gehalten
- Visuelle Unterstützung durch Emojis
- Fachbegriffe werden eingeführt

---

## 📊 Lernkontrolle

Die Website bietet mehrere Möglichkeiten zur formativen Bewertung:

1. **Score-Tracking:**
   - Game 1 und Game 2 zeigen Score
   - Lehrkraft kann beobachten, wer Schwierigkeiten hat

2. **Quiz-Ergebnisse:**
   - 5 Fragen zur Selbstkontrolle
   - Sofortiges Feedback

3. **Playground-Experimente:**
   - Lehrkraft kann Code der SuS ansehen
   - Kreativität und Verständnis bewerten

---

## 🛠️ Anpassung & Erweiterung

### Einfache Anpassungen:

**Neue Szenarien hinzufügen (Game 1):**
```javascript
// In script.js, im scenarios-Array:
{
    title: "Scenario 6: Dein Titel",
    text: "Deine Beschreibung",
    condition: "if variable > 10:",
    variable: "variable",
    threshold: 10,
    comparison: ">",
    message: "Deine Nachricht",
    sliderLabel: "Label:",
    min: 0,
    max: 100,
    initial: 50
}
```

**Neue Code-Challenges (Game 2):**
```javascript
// In script.js, im challenges-Array:
{
    title: "Challenge: Dein Titel",
    description: "Deine Beschreibung",
    template: `dein code mit _____ Lücken`,
    blanks: ["antwort1", "antwort2"],
    correctCode: `der komplette code`,
    output: "Die erwartete Ausgabe"
}
```

**Neue Quiz-Fragen:**
```javascript
// In script.js, im quizQuestions-Array:
{
    question: "Deine Frage?",
    answers: [
        "Antwort 1",
        "Antwort 2",
        "Antwort 3",
        "Antwort 4"
    ],
    correct: 1  // Index der richtigen Antwort (0-3)
}
```

### Farbschema ändern:
```css
/* In style.css, bei :root */
--primary-color: #4A90E2;  /* Hauptfarbe */
--secondary-color: #50C878;  /* Erfolgsfarbe */
--danger-color: #E74C3C;  /* Fehlerfarbe */
```

---

## 🌐 Online Hosting (optional)

### Option 1: GitHub Pages (kostenlos)
1. Repository auf GitHub erstellen
2. Files hochladen
3. Settings → Pages → aktivieren
4. Link mit SuS teilen

### Option 2: Netlify (kostenlos)
1. Auf netlify.com registrieren
2. Drag & Drop des website-Ordners
3. Automatische URL erhalten

### Option 3: Schul-Server
- Website-Ordner auf Schul-Server kopieren
- Über lokales Netzwerk erreichbar
- Kein Internet nötig!

---

## 📱 Mobile Optimierung

Die Website ist **responsive** und funktioniert auf:
- 📱 Smartphones (ab 360px)
- 📱 Tablets (ab 768px)
- 💻 Laptops
- 🖥️ Desktop-PCs

**Empfehlung:** Mindestens Tablet-Größe für optimales Erlebnis

---

## ⚠️ Bekannte Einschränkungen

1. **Playground Python-Interpreter:**
   - Vereinfachter Interpreter, unterstützt nur basics:
     - IF statements (ohne elif/else)
     - Variablen (Zahlen, Strings, Booleans)
     - print() Funktion
     - Vergleichsoperatoren
   - Keine komplexen Python-Features (Listen, Funktionen, etc.)

2. **Browser-Abhängigkeit:**
   - JavaScript muss aktiviert sein
   - Moderne Browser empfohlen (Chrome, Firefox, Edge)

3. **Offline-Nutzung:**
   - Funktioniert nach erstem Laden
   - Keine Cloud-Speicherung der Scores

---

## 💡 Tipps für die Durchführung

### Vor dem Unterricht:
- ✅ Website auf allen Geräten testen
- ✅ Alternative vorbereiten (falls Technik-Probleme)
- ✅ Website-Link verkürzen (z.B. bit.ly)

### Während des Unterrichts:
- 👥 Partnerarbeit fördert Kommunikation auf Englisch
- 🎯 Nicht alle müssen alle Tabs schaffen - Differenzierung!
- 💬 SuS sollen sich gegenseitig Code erklären (auf Englisch!)

### Nach dem Unterricht:
- 🏠 Website-Link als Hausaufgabe mitgeben
- 📊 Beobachtungen notieren für nächste Stunde
- 🔄 Eventuell Inhalte anpassen basierend auf Feedback

---

## 🎓 Lernziele der Website

Nach der Arbeit mit der Website können die SuS:

**Informatik:**
- ✅ IF statements lesen und verstehen
- ✅ Bedingungen als True/False bewerten
- ✅ Eigene IF statements schreiben
- ✅ Code debuggen und testen

**Englisch:**
- ✅ Conditional sentences verwenden
- ✅ IT-Fachvokabular verstehen und nutzen
- ✅ Code auf Englisch erklären

**Überfachlich:**
- ✅ Problemlösekompetenz
- ✅ Logisches Denken
- ✅ Trial & Error als Lernstrategie
- ✅ Selbstständiges Arbeiten

---

## 📧 Support & Feedback

Bei Fragen oder Problemen:
1. Technische Probleme → Browser-Console prüfen (F12)
2. Inhaltliche Fragen → Im Unterrichtsentwurf nachsehen
3. Feedback → Gerne Verbesserungsvorschläge einbringen!

---

## 📄 Lizenz

Diese Website ist frei verwendbar für Bildungszwecke.
Anpassungen und Weitergabe sind ausdrücklich erwünscht!

---

## 🌟 Viel Erfolg im Unterricht!

**Remember:** Technology enhances learning, but good teaching is what matters most! 💪

---

**Version:** 1.0
**Erstellt:** 2025
**Kompatibel mit:** Unterrichtsentwurf "IF Statements 1"
**Zielgruppe:** Klasse 8, Realschule
