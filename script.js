const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const commandsByAccess = {
  employee: ["hilfe", "ncpd akten", "start breach", "projekte"],
  admin: ["hilfe", "interne logs", "ncpd akten", "society daten", "start breach", "projekt auflistung", "admin log", "logs auslesen", "systemstatus", "benutzer", "shutdown"],
  ripperdoc: ["hilfe", "interne logs", "ncpd akten", "society daten", "start breach", "implantate", "patientendaten", "crack firewall"],
  netrunner: ["hilfe", "interne logs", "society daten", "ncpd akten", "start breach", "netzwerk scan", "infiltriere", "backdoor", "crack firewall"]
};

function writeOutput(text) {
  output.innerText += `\n${text}`;
  output.scrollTop = output.scrollHeight;
}

function executeCommand(cmd) {
  const accessLevel = localStorage.getItem("accessLevel") || "employee";
  const allowedCommands = commandsByAccess[accessLevel] || [];

  if (!allowedCommands.includes(cmd)) {
    writeOutput(`Befehl "${cmd}" ist für Zugriffsebene "${accessLevel.toUpperCase()}" nicht erlaubt.`);
    return;
  }

  switch (cmd) {
    case "hilfe":
      showHelp(accessLevel);  // Aufruf der neuen Funktion für hilfe
      break;

    case "projekte":
      writeOutput("Projekte:\n- Projekt Mila\n- Echo Protokoll\n- RELIC Network");
      break;

    case "logs auslesen":
      writeOutput("Letzte Systemlogs:\n- [12:04] Zugriff durch Benutzer: SYSTEM\n- [12:05] Projektdatei geöffnet.");
      break;
    case "society daten":
      writeOutput("\n- [Eintrag Unbekannt]In einer trüben Nacht wurde ich von einer Person aufgegriffen die entweder ein eigenständiger Netrunner ist oder doch Teil von Society?(Dragon?)\n- [Eintrag Unbekannt]Ich war mit Zac und Kyle unterwegs und wir haben den Standort von Society in Sektor 3 gefunden.\n- [Eintrag Unbekannt]Habe mich mit Zac nochmal auf die Suche gemacht und bin dabei in die backdoor von Society gefallen. Zac hat bei meiner Rettung den Kontakt zu Venom von Society hergestellt.\n- [Eintrag Unbekannt]Einige Tage später wurden wir von Ghost kontaktiert, der Kopf von Society. Er bat uns um ein paar Dinge.\n- [Eintrag Unbekannt]Durch Ghost habe ich von Dragon, Venom und noch einer Person erfahren.\n- [Eintrag Unbekannt]Smoke ist auch Teil von Society, er konnte mein ursprüngliches Geburtsdatum auslesen und nicht nur das.\n- [Eintrag Unbekannt]Venom und Smoke haben die Casino Roboter hacken können.");
      break;
    case "ncpd akten":
      writeOutput("Aufzeichnungen:\n- [April 2025] Black Adam: Cyborg-KI\n- Projektdatei geöffnet.\n- [Eintrag 5]Der General hat die Anfrage vom Direktor zwecks Waffenschein abgelehnt.\n- [Eintrag 5]Maloun ist der Stiefvater von Kyle und Bella ist die Frau vom Captain.\n- [Eintrag 5]General Lee wurde degradiert. Er ist nun Commander.\n- [Eintrag 5]Das NCPD sucht nach Society.\n- [Eintrag 5]Das NCPD besitzt eine Roboter Einheit, B7, diese scheint effizienter zu sein als die Vorgängermodelle.");
      break;
    case "interne logs":
      writeOutput("Aufzeichnungen:\n- [April 2025] Black Adam: Cyborg-KI\n- Projektdatei geöffnet.\n- [Eintrag 2]Habe durch Kaael rausgefunden, dass gewisse B5 Einheiten an dieser Immobilie waren und auf das NCPD schossen.\n- [Eintrag 4]Blue selber war die letzten Tage instabil, weil diverse Programme von Arasaka und Militech gegeneinander agiert haben. Mittlerweile gehts ihr aber besser.\n- [Eintrag 3]Durch Blue konnte ich von diversen Cyberware Projekten erfahren. Dahingehen brauch ich mehr Informationen. HK hat Sie erbaut.");
      break;
 
	case "admin log":
      writeOutput("Letzte Systemlogs:\n- [12:04] Zugriff durch Benutzer: SYSTEM\n- [12:05] Projektdatei geöffnet.\n- [2025-04-17 21:02] Subjekt initialisiert. Neuronale Synchronisation: 87%\n- [2025-04-17 21:02] MILITECH-Jagdprotokoll aktiviert. SENTINEL-SYSTEM: AKTIV.\n- [2025-03-17 21:17] Gedächtnisüberschreibung erfolgreich. Persönlichkeit instabil.\n- [2025-03-18 21:45] ARASAKA-Eindämmung durchbrochen. Subjekt offline.\n- [2025-03-18 22:07] Reinitialisierung durchgeführt von Direktor Baranov.\n- [2025-03-18 23:10] Subjekt reinitialisiert – Neuronale Synchronisation: 92%\n- [2025-04-18 23:10] Subjekt online.\n- [2025-04-19 gd:2§] Unbekannt\n- [2025-04-19 21:57] Unbekannte Daten entwendet.\n- [2025-04-19 23:00] Fremdzugriff erkannt.\n- [2025-04-20 04:00] Deepscan, Systemneustart, Analyse gestartet.\n- [2025-04-20 22:03] Analyse Durchgeführt.");
      break;

    case "systemstatus":
      writeOutput("Systemstatus:\nCPU: 92%\nNetzwerk: 4 Verbindungen\nAbwehrsystem: aktiv");
      break;

    case "benutzer":
      writeOutput("Aktive Benutzer:\n- Baranov (ADMIN)\n- Bunny (RIPPERDOC)");
      break;

    case "shutdown":
      writeOutput("System fährt herunter...");
      setTimeout(() => {
        document.body.innerHTML = "<pre style='color: red; text-align: center;'>ARASAKA OS WURDE DEAKTIVIERT</pre>";
      }, 2000);
      break;

    case "implantate":
      writeOutput("Implantatdaten:\n- ARKHEART 3.0: aktiv\n- ARASAKA PANOPTICON: inaktiv\n- NEUROSAFE FIREWALL 9.2: 97%\n- TAIKETSU FRAME X-92: isoliert\n- OMEGA LINK PORT: aktiv\n- ONI-SYNC: stabil\n- ARASAKA GHOST PROTOCOL: inaktiv\n- SANGUINE-X BLOODLOOP: Version 2.4\n- Neuralinterface: stabil");
      break;

    case "patientendaten":
      writeOutput("Patientendaten:\n- ID: MILA\n- Status: UnBEkaNnt\n- Diagnose: Biochip-Fehlfunktion");
      break;

    case "netzwerk scan":
      writeOutput("Netzwerkscan gestartet...\n> 3 Nodes gefunden\n> Firewalls erkannt\n> Zugänge kartiert");
      break;

    case "infiltriere":
      writeOutput("Starte Infiltration...\n> Verbindung mit Host 193.41.226.22:9013\n> Zugriff verschlüsselt...");
      break;

    case "backdoor":
      writeOutput("Backdoor-Modul aktiviert\n>befehl: crack firewall\n> Zugriff auf internen Knoten vorbereitet...");
      break;

    case "crack firewall":
      writeOutput("Starte-Infiltration \n>...");
	  window.location.href = 'pong.html';
      break;

	case "start breach":
	writeOutput("Starte Breach-Protokoll...\n>> Initialisiere Zugriffsmatrix...");
	startBreachProtocol(); //Funktion Mini-Game
	
	document.getElementById("breach-status").innerText = ">> Zugriffsmatrix aktiv. Beginne in Zeile 0. Wechsle Zeile/Spalte im Wechsel.";
	break;


    default:
      writeOutput(`Unbekannter Befehl: "${cmd}"`);
  }
}

function showHelp(accessLevel) {
  let helpText = "";
  let helpStyle = "";

  switch (accessLevel) {
    case "employee":
      helpText = `
        Hilfe für Mitarbeiter:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "projekt auflistung" : Liste der aktiven Projekte
        - "logs auslesen" : Letzte Systemprotokolle anzeigen
      `;
      helpStyle = `
        background: #002b36;
        color: #0ff;
        padding: 15px;
        border: 2px solid #0ff;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "admin":
      helpText = `
        Hilfe für Administrator:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "projekt auflistung" : Liste der aktiven Projekte
        - "admin log" : Admin Protokoll anzeigen
        - "logs auslesen" : Letzte Systemprotokolle anzeigen
        - "systemstatus" : Zeigt den aktuellen Systemstatus an
        - "benutzer" : Zeigt alle aktiven Benutzer
        - "interne logs" : Systemdaten
        - "ncpd akten" : Daten über das NCPD
        - "society daten" : Society - Netrunner
        - "shutdown" : System herunterfahren
      `;
      helpStyle = `
        background: #b22222;
        color: #fff;
        padding: 15px;
        border: 2px solid #f00;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "ripperdoc":
      helpText = `
        Hilfe für Ripperdocs:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "implantate" : Zeigt alle implantierbaren Systeme
        - "patientendaten" : Zeigt aktuelle Patientendaten
      `;
      helpStyle = `
        background: #1e90ff;
        color: #fff;
        padding: 15px;
        border: 2px solid #00f;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "netrunner":
      helpText = `
        Hilfe für Netrunner:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "netzwerk scan" : Scannt das Netzwerk auf Sicherheitslücken
        - "infiltriere" : Versucht, in das Zielnetzwerk einzudringen
        - "backdoor" : Öffnet eine Hintertür für späteren Zugriff
        - "crack x x" : versuch um x zu knacken, vorherige Schritte schalten Befehle frei
      `;
      helpStyle = `
        background: #32cd32;
        color: #000;
        padding: 15px;
        border: 2px solid #0f0;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    default:
      helpText = "Unbekannte Zugriffsebene. Keine Hilfe verfügbar.";
      helpStyle = `
        background: #000;
        color: #ff6347;
        padding: 15px;
        border: 2px solid #ff6347;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
  }

  // Hilfe-Ausgabe mit Stil anwenden
  const helpDiv = document.createElement("div");
  helpDiv.textContent = helpText;
  helpDiv.style = helpStyle;
  output.innerHTML = "";
  output.appendChild(helpDiv);
}
function startBreachProtocol() {
  document.getElementById("breach-container").style.display = "block";
  initBreachGrid();
  highlightGoalInMatrix();

}

const breachMatrixSize = 6;
const breachBufferSize = 6;
const breachCodes = ["BD", "1C", "E9", "55", "FF", "7A"];
let breachMatrix = [];
let breachGoal = [];
let breachSelected = [];
let isRowTurn = true;
let currentIndex = 0;

function getRandomCode() {
  return breachCodes[Math.floor(Math.random() * breachCodes.length)];
}

function initBreachGrid() {
  const grid = document.getElementById("breach-grid");
  grid.innerHTML = "";
  breachMatrix = [];
  breachSelected = [];
  isRowTurn = true;
  currentIndex = 0;

  // Ziel-Sequenz generieren
  breachGoal = Array.from({ length: 3 }, getRandomCode);
  document.getElementById("breach-sequence").innerText = "Ziel: " + breachGoal.join(" ");

  // Grid mit Platzhaltern initialisieren
  for (let i = 0; i < breachMatrixSize * breachMatrixSize; i++) {
    breachMatrix.push(null);
  }

  // Zielrichtung wählen (true = horizontal, false = vertikal)
  const isHorizontal = Math.random() < 0.5;

  // Startposition berechnen
  let startRow, startCol;
  if (isHorizontal) {
    startRow = Math.floor(Math.random() * breachMatrixSize);
    startCol = Math.floor(Math.random() * (breachMatrixSize - breachGoal.length));
  } else {
    startRow = Math.floor(Math.random() * (breachMatrixSize - breachGoal.length));
    startCol = Math.floor(Math.random() * breachMatrixSize);
  }

  // Zielsequenz einfügen
  for (let i = 0; i < breachGoal.length; i++) {
    const row = startRow + (isHorizontal ? 0 : i);
    const col = startCol + (isHorizontal ? i : 0);
    const index = row * breachMatrixSize + col;
    breachMatrix[index] = breachGoal[i];
  }

  // Rest mit zufälligen Codes füllen
  for (let i = 0; i < breachMatrix.length; i++) {
    if (breachMatrix[i] === null) {
      breachMatrix[i] = getRandomCode();
    }
  }

  // DOM-Elemente erstellen und korrekt befüllen
  for (let i = 0; i < breachMatrix.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("breach-cell");
    cell.dataset.index = i;
    cell.innerText = breachMatrix[i]; // Jetzt korrekt gefüllt
    cell.addEventListener("click", () => selectBreachCell(i));
    grid.appendChild(cell);
  }

  highlightGoalInMatrix(); // Highlight direkt nach Anzeige
  updateSelectedDisplay();
  document.getElementById("breach-status").innerText = ">> Starte Breach-Protokoll...";
}



function selectBreachCell(index) {
  const row = Math.floor(index / breachMatrixSize);
  const col = index % breachMatrixSize;

  if (breachSelected.length >= breachBufferSize) return;

  if ((isRowTurn && row !== currentIndex) || (!isRowTurn && col !== currentIndex)) return;

  document.querySelectorAll(".breach-cell")[index].classList.add("selected");
  breachSelected.push(breachMatrix[index]);

  currentIndex = isRowTurn ? col : row;
  isRowTurn = !isRowTurn;
  

  updateSelectedDisplay();
  checkBreachSequence();
  
  highlightSelectableCells(); // nach jedem Klick neu berechnen
  
}

function updateSelectedDisplay() {
  document.getElementById("breach-selected").innerText = "Auswahl: " + breachSelected.join(" ");
}

function checkBreachSequence() {
  const selectedStr = breachSelected.join(" ");
  const goalStr = breachGoal.join(" ");

  if (selectedStr.includes(goalStr)) {
    document.getElementById("breach-status").innerText = ">> Zugriff gewährt: Hack erfolgreich.";
    enableTerminalInput(); // falls du das eingebaut hast
  } else if (breachSelected.length === breachBufferSize) {
    document.getElementById("breach-status").innerText = ">> Zugriff verweigert: Protokoll fehlgeschlagen.";
    enableTerminalInput();
  }
}


function resetBreach() {
  initBreachGrid();
}

function highlightSelectableCells() {
  const cells = document.querySelectorAll(".breach-cell");
  cells.forEach(cell => {
    const index = parseInt(cell.dataset.index);
    const row = Math.floor(index / breachMatrixSize);
    const col = index % breachMatrixSize;

    // Nur erlaubte Zellen hervorheben
    const allowed = isRowTurn ? (row === currentIndex) : (col === currentIndex);
    cell.style.opacity = allowed ? "1" : "0.3";
    cell.style.pointerEvents = allowed ? "auto" : "none";
  });
}
function highlightGoalInMatrix() {
  const cells = document.querySelectorAll(".breach-cell");

  // Horizontal prüfen
  for (let row = 0; row < breachMatrixSize; row++) {
    for (let col = 0; col <= breachMatrixSize - breachGoal.length; col++) {
      const start = row * breachMatrixSize + col;
      const slice = breachMatrix.slice(start, start + breachGoal.length).join(" ");
      if (slice === breachGoal.join(" ")) {
        for (let i = 0; i < breachGoal.length; i++) {
          const index = start + i;
          cells[index].style.backgroundColor = "#3333aa";
          cells[index].style.border = "2px solid #77f";
        }
      }
    }
  }

  // Vertikal prüfen
  for (let col = 0; col < breachMatrixSize; col++) {
    for (let row = 0; row <= breachMatrixSize - breachGoal.length; row++) {
      const indexes = [];
      for (let i = 0; i < breachGoal.length; i++) {
        indexes.push((row + i) * breachMatrixSize + col);
      }
      const slice = indexes.map(idx => breachMatrix[idx]).join(" ");
      if (slice === breachGoal.join(" ")) {
        indexes.forEach(idx => {
          cells[idx].style.backgroundColor = "#3333aa";
          cells[idx].style.border = "2px solid #77f";
        });
      }
    }
  }
}



input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    writeOutput(`> ${command}`);
    executeCommand(command);
    input.value = "";
  }
});

