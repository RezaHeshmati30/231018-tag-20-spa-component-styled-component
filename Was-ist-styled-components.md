# Styled Component

`Styled-Components` ist eine populäre JavaScript-Bibliothek, die in der Webentwicklung verwendet wird, insbesondere in Verbindung mit React. Diese Bibliothek ermöglicht es Entwicklern, Komponenten zu erstellen und diese direkt mit Styles zu verknüpfen. Statt separate CSS-Dateien zu verwenden, werden die Styles direkt in den Komponenten definiert.  
Diese Styles werden dynamisch generiert und in den generierten HTML-Tags als CSS-Klassen eingefügt.

**Hier sind einige Schlüsselmerkmale von Styled-Components:**

1. `Inline Styles:` Mit Styled-Components können Sie Styles direkt in Ihren React-Komponenten erstellen, indem Sie JavaScript-Templates verwenden. Dies macht den Styling-Prozess einfacher und konsistenter.

2. `Komponentenbasiert:` Styled-Components basiert auf dem Konzept der Komponenten. Sie können wiederverwendbare Komponenten erstellen und diese mit ihren eigenen Styles kapseln.

3. `Dynamisches Styling:` Die Bibliothek ermöglicht das Erstellen von Styles auf der Grundlage von Props oder Zustand, was dynamisches Styling in React-Komponenten erleichtert.

4. `Global Styles und Theming:` Es ist auch möglich, globale Styles und ein Theming-System zu erstellen, um eine konsistente Designsprache in Ihrer Anwendung aufrechtzuerhalten.

Styled-Components hat in der React-Community großen Anklang gefunden, da es eine moderne Herangehensweise an das Styling von React-Komponenten bietet. Es kann dazu beitragen, Probleme im Zusammenhang mit Namenskonflikten, dem Scoping von CSS und der Verwaltung von CSS-Abhängigkeiten zu minimieren.

**Bespiel:**

```jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 5rem;
  background: #f5f5dc;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <h1>Hallo Styled! </h1>
    </Container>
  );
};
export default App;
```

In diesem Beispiel wird den Title-Komponent mit Styled-Components erstellt und mit Styles definiert, die dann auf den gerenderten `Title/h1` angewendet werden.
