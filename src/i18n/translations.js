const translations = {
  en: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "Embed a video, set precision loops, and automate speed lifts without losing your place.",
      quickstartButton: "Quickstart",
      quickstartGuided: "Guided setup",
      quickstartTitle: "Quickstart",
      quickstartLede:
        "Sessions keep all loops for a song. Loops store start/end, speed, and an optional note so you can jump right back into practice.",
      quickstartList: {
        step1: "Create one session per song and add loops for solos, riffs, and tricky measures.",
        step2: "Use the loop controls to set start/end, then save it to the current session.",
        step3: "Automation lets you repeat a loop and nudge the tempo up after each pass.",
        step4: "Your sessions stay in this browser, and you can export or import them anytime.",
      },
      quickstartImportSample: "Import sample-session.json",
      quickstartDecline: "Not now",
      close: "Close",
      tutorialButton: "View tutorial",
      tutorialModalTitle: "Full tutorial",
    },
    language: {
      label: "Language",
    },
    common: {
      loops: "loops",
    },
    video: {
      heading: "Video & Loop Controls",
      infoLabel: "Video section info",
      tooltip:
        "Load a YouTube link and lock the start/end loop points before you begin practicing.",
      loading: "Loading video player...",
      labelInput: "Video ID or URL",
      inputPlaceholder: "e.g., video link or ID",
      loadButton: "Load & Reset",
      uploadButton: "Upload MP3",
      loopStart: "Loop start (hh:mm:ss or seconds)",
      loopEnd: "Loop end (hh:mm:ss or seconds)",
      placeholderTime: "00:00:00",
      setFromCurrent: "Set from current",
      startLoop: "Start Loop",
      stopLoop: "Stop Loop",
      clearLoop: "Clear Loop",
    },
    speed: {
      heading: "Speed & Automation",
      infoLabel: "Speed and automation info",
      tooltip:
        "Adjust playback speed and automation rules so the loop gradually ramps up to your target tempo.",
      playbackLabel: "Playback speed:",
      increaseEvery: "Increase speed every",
      increaseBy: "Increase by",
      maxSpeed: "Max speed",
      startAutomation: "Start automation",
      stopAutomation: "Stop automation",
    },
    sessions: {
      heading: "Saved Sessions",
      infoLabel: "Saved sessions info",
      tooltip:
        "Keep every loop, tempo, and note per song so you can jump right back into practice later.",
      note: "Store multiple riff setups so you can jump back without re-entering values.",
      noSessions: "No sessions saved yet.",
      load: "Load",
      delete: "Delete",
      newLoop: "New loop",
      loopInfoLabel: "Loop form info",
      loopTooltip:
        "Name the current loop and jot optional context so you can recall the riff or section later.",
      captureNote:
        "Capture the start/end markers, tempo, and notes before slipping back into practice.",
      loopTitlePlaceholder: "Loop title (e.g., Verse 1)",
      loopNotePlaceholder: "Note (optional)",
      saveLoop: "Save loop",
      replace: "Replace",
      unnamedLoop: "Unnamed loop",
      noLoops: "No loops saved yet.",
      saveSession: "Save Session",
      export: "Export",
      import: "Import",
      exportTitle: "Export all sessions from JSON file",
      importTitle: "Import JSON sessions from file",
    },
    kofi: {
      prompt: "If you find this app useful, please consider buying me a coffee.",
      alt: "Buy Me a Coffee at ko-fi.com",
    },
  },
  it: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "Incorpora un video, imposta loop precisi e automatizza gli aumenti di velocità senza perdere il ritmo.",
      quickstartButton: "Avvio rapido",
      quickstartGuided: "Configurazione guidata",
      quickstartTitle: "Avvio rapido",
      quickstartLede:
        "Le sessioni conservano tutti i loop di una canzone. Ogni loop memorizza inizio/fine, velocità e una nota opzionale così puoi tornare subito a esercitarti.",
      quickstartList: {
        step1:
          "Crea una sessione per ogni brano e aggiungi loop per assoli, riff e passaggi complicati.",
        step2:
          "Usa i controlli del loop per impostare inizio/fine, poi salvalo nella sessione corrente.",
        step3:
          "L'automazione ti permette di ripetere un loop e aumentare il tempo a ogni passaggio.",
        step4:
          "Le tue sessioni restano nel browser e puoi esportarle o importarle quando vuoi.",
      },
      quickstartImportSample: "Importa sample-session.json",
      quickstartDecline: "Non ora",
      close: "Chiudi",
      tutorialButton: "Visualizza il tutorial",
      tutorialModalTitle: "Tutorial completo",
    },
    language: {
      label: "Lingua",
    },
    common: {
      loops: "loop",
    },
    video: {
      heading: "Controlli video e loop",
      infoLabel: "Informazioni sulla sezione video",
      tooltip:
        "Carica un link YouTube e blocca i punti di inizio/fine del loop prima di iniziare a esercitarti.",
      loading: "Caricamento del lettore video...",
      labelInput: "ID o URL del video",
      inputPlaceholder: "es. link o ID del video",
      loadButton: "Carica e resetta",
      uploadButton: "Carica MP3",
      loopStart: "Inizio loop (hh:mm:ss o secondi)",
      loopEnd: "Fine loop (hh:mm:ss o secondi)",
      placeholderTime: "00:00:00",
      setFromCurrent: "Imposta dalla posizione attuale",
      startLoop: "Avvia loop",
      stopLoop: "Ferma loop",
      clearLoop: "Cancella loop",
    },
    speed: {
      heading: "Velocità e automazione",
      infoLabel: "Informazioni su velocità e automazione",
      tooltip:
        "Regola la velocità di riproduzione e le regole di automazione per aumentare gradualmente il tempo verso il tuo obiettivo.",
      playbackLabel: "Velocità di riproduzione:",
      increaseEvery: "Aumenta la velocità ogni",
      increaseBy: "Aumenta di",
      maxSpeed: "Velocità massima",
      startAutomation: "Avvia automazione",
      stopAutomation: "Ferma automazione",
    },
    sessions: {
      heading: "Sessioni salvate",
      infoLabel: "Informazioni sulle sessioni salvate",
      tooltip:
        "Conserva ogni loop, tempo e nota per brano così puoi tornare subito a esercitarti.",
      note:
        "Salva più configurazioni di riff per tornare senza reinserire valori.",
      noSessions: "Nessuna sessione salvata.",
      load: "Carica",
      delete: "Elimina",
      newLoop: "Nuovo loop",
      loopInfoLabel: "Info modulo loop",
      loopTooltip:
        "Dai un nome al loop corrente e annota il contesto per ricordarti il riff o la sezione più tardi.",
      captureNote:
        "Cattura i marker di inizio/fine, il tempo e le note prima di tornare a esercitarti.",
      loopTitlePlaceholder: "Titolo loop (es. Strofa 1)",
      loopNotePlaceholder: "Nota (facoltativa)",
      saveLoop: "Salva loop",
      replace: "Sostituisci",
      unnamedLoop: "Loop senza nome",
      noLoops: "Nessun loop salvato.",
      saveSession: "Salva sessione",
      export: "Esporta",
      import: "Importa",
      exportTitle: "Esporta tutte le sessioni in un file JSON",
      importTitle: "Importa sessioni JSON da file",
    },
    kofi: {
      prompt: "Se trovi utile quest'app, considera di offrirmi un caffè.",
      alt: "Offrimi un caffè su ko-fi.com",
    },
  },
  fr: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "Intégrez une vidéo, fixez des boucles précises et automatisez les montées de tempo sans perdre votre place.",
      quickstartButton: "Démarrage rapide",
      quickstartGuided: "Installation guidée",
      quickstartTitle: "Démarrage rapide",
      quickstartLede:
        "Les sessions gardent toutes les boucles d'un morceau. Les boucles enregistrent le début/la fin, la vitesse et une note optionnelle pour reprendre l'entraînement immédiatement.",
      quickstartList: {
        step1:
          "Créez une session par morceau et ajoutez des boucles pour les solos, riffs et passages délicats.",
        step2:
          "Utilisez les contrôles de boucle pour ajuster le début/la fin, puis enregistrez-le dans la session en cours.",
        step3:
          "L'automatisation vous permet de répéter une boucle et d'accélérer légèrement le tempo à chaque passage.",
        step4:
          "Vos sessions restent dans ce navigateur, et vous pouvez les exporter ou les importer à tout moment.",
      },
      quickstartImportSample: "Importer sample-session.json",
      quickstartDecline: "Pas maintenant",
      close: "Fermer",
      tutorialButton: "Voir le tutoriel",
      tutorialModalTitle: "Tutoriel complet",
    },
    language: {
      label: "Langue",
    },
    common: {
      loops: "boucles",
    },
    video: {
      heading: "Contrôles vidéo et boucles",
      infoLabel: "Informations sur la section vidéo",
      tooltip:
        "Chargez un lien YouTube et verrouillez les points de début/fin avant de commencer à pratiquer.",
      loading: "Chargement du lecteur vidéo...",
      labelInput: "ID ou URL de la vidéo",
      inputPlaceholder: "ex. lien ou ID de la vidéo",
      loadButton: "Charger et réinitialiser",
      uploadButton: "Importer un MP3",
      loopStart: "Début de boucle (hh:mm:ss ou secondes)",
      loopEnd: "Fin de boucle (hh:mm:ss ou secondes)",
      placeholderTime: "00:00:00",
      setFromCurrent: "Définir depuis la position actuelle",
      startLoop: "Démarrer la boucle",
      stopLoop: "Arrêter la boucle",
      clearLoop: "Effacer la boucle",
    },
    speed: {
      heading: "Vitesse et automatisation",
      infoLabel: "Informations sur la vitesse et l'automatisation",
      tooltip:
        "Ajustez la vitesse de lecture et les règles d'automatisation pour que la boucle atteigne progressivement votre tempo cible.",
      playbackLabel: "Vitesse de lecture :",
      increaseEvery: "Augmenter la vitesse tous les",
      increaseBy: "Augmenter de",
      maxSpeed: "Vitesse maximale",
      startAutomation: "Démarrer l'automatisation",
      stopAutomation: "Arrêter l'automatisation",
    },
    sessions: {
      heading: "Sessions enregistrées",
      infoLabel: "Informations sur les sessions enregistrées",
      tooltip:
        "Conservez chaque boucle, tempo et note par morceau pour reprendre l'entraînement plus tard.",
      note:
        "Stockez plusieurs configurations de riffs pour revenir sans ressaisir les valeurs.",
      noSessions: "Aucune session enregistrée pour l'instant.",
      load: "Charger",
      delete: "Supprimer",
      newLoop: "Nouvelle boucle",
      loopInfoLabel: "Info formulaire de boucle",
      loopTooltip:
        "Donnez un nom à la boucle en cours et notez un contexte pour vous rappeler le riff ou la section plus tard.",
      captureNote:
        "Capturez les points de début/fin, le tempo et les notes avant de reprendre la pratique.",
      loopTitlePlaceholder: "Titre de boucle (ex. Couplets 1)",
      loopNotePlaceholder: "Note (optionnelle)",
      saveLoop: "Enregistrer la boucle",
      replace: "Remplacer",
      unnamedLoop: "Boucle sans nom",
      noLoops: "Aucune boucle enregistrée pour l'instant.",
      saveSession: "Enregistrer la session",
      export: "Exporter",
      import: "Importer",
      exportTitle: "Exporter toutes les sessions dans un fichier JSON",
      importTitle: "Importer des sessions JSON depuis un fichier",
    },
    kofi: {
      prompt: "Si cette application vous aide, pensez à m'offrir un café.",
      alt: "Offrez-moi un café sur ko-fi.com",
    },
  },
  de: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "Binde ein Video ein, setze präzise Loops und automatisiere Tempoanhebungen, ohne deinen Platz zu verlieren.",
      quickstartButton: "Schnellstart",
      quickstartGuided: "Geführte Einrichtung",
      quickstartTitle: "Schnellstart",
      quickstartLede:
        "Sessions behalten alle Loops eines Songs. Loops speichern Start/Ende, Tempo und eine optionale Notiz, damit du sofort wieder üben kannst.",
      quickstartList: {
        step1:
          "Erstelle pro Stück eine Session und füge Loops für Soli, Riffs und schwierige Passagen hinzu.",
        step2:
          "Nutze die Loop-Steuerung, um Start und Ende zu setzen, und speichere sie dann in der aktuellen Session.",
        step3:
          "Automation lässt dich eine Schleife wiederholen und das Tempo nach jedem Durchlauf leicht anheben.",
        step4:
          "Deine Sessions bleiben in diesem Browser und lassen sich jederzeit exportieren oder importieren.",
      },
      quickstartImportSample: "sample-session.json importieren",
      quickstartDecline: "Nicht jetzt",
      close: "Schließen",
      tutorialButton: "Tutorial anzeigen",
      tutorialModalTitle: "Vollständiges Tutorial",
    },
    language: {
      label: "Sprache",
    },
    common: {
      loops: "Loops",
    },
    video: {
      heading: "Video- & Loop-Steuerung",
      infoLabel: "Informationen zum Videobereich",
      tooltip:
        "Lade einen YouTube-Link und sperre die Loop-Start-/Endpunkte, bevor du mit dem Üben beginnst.",
      loading: "Videoplayer wird geladen...",
      labelInput: "Video-ID oder URL",
      inputPlaceholder: "z. B. Link oder ID",
      loadButton: "Laden & zurücksetzen",
      uploadButton: "MP3 hochladen",
      loopStart: "Loop-Start (hh:mm:ss oder Sekunden)",
      loopEnd: "Loop-Ende (hh:mm:ss oder Sekunden)",
      placeholderTime: "00:00:00",
      setFromCurrent: "Vom aktuellen Zeitpunkt setzen",
      startLoop: "Loop starten",
      stopLoop: "Loop stoppen",
      clearLoop: "Loop löschen",
    },
    speed: {
      heading: "Geschwindigkeit & Automatisierung",
      infoLabel: "Informationen zu Geschwindigkeit und Automatisierung",
      tooltip:
        "Passe die Wiedergabegeschwindigkeit und die Automatisierungsregeln an, damit die Schleife schrittweise dein Zieltempo erreicht.",
      playbackLabel: "Wiedergabegeschwindigkeit:",
      increaseEvery: "Erhöhe die Geschwindigkeit alle",
      increaseBy: "Erhöhe um",
      maxSpeed: "Maximale Geschwindigkeit",
      startAutomation: "Automatisierung starten",
      stopAutomation: "Automatisierung stoppen",
    },
    sessions: {
      heading: "Gespeicherte Sessions",
      infoLabel: "Informationen zu gespeicherten Sessions",
      tooltip:
        "Behalte jede Schleife, jedes Tempo und jede Notiz zu einem Song, um später direkt weiterzuüben.",
      note:
        "Speichere mehrere Riff-Einstellungen, um ohne Nachschlagen weiterzumachen.",
      noSessions: "Noch keine Sessions gespeichert.",
      load: "Laden",
      delete: "Löschen",
      newLoop: "Neuer Loop",
      loopInfoLabel: "Info zum Loop-Formular",
      loopTooltip:
        "Benennen Sie den aktuellen Loop und notieren Sie Kontext, um sich später an Abschnitt oder Riff zu erinnern.",
      captureNote:
        "Speichere Start-/Endpunkte, Tempo und Notizen, bevor du wieder übst.",
      loopTitlePlaceholder: "Loop-Titel (z. B. Strophe 1)",
      loopNotePlaceholder: "Notiz (optional)",
      saveLoop: "Loop speichern",
      replace: "Ersetzen",
      unnamedLoop: "Unbenannter Loop",
      noLoops: "Noch keine Loops gespeichert.",
      saveSession: "Session speichern",
      export: "Exportieren",
      import: "Importieren",
      exportTitle: "Alle Sessions in eine JSON-Datei exportieren",
      importTitle: "JSON-Sessions aus Datei importieren",
    },
    kofi: {
      prompt: "Wenn dir die App hilft, schenke mir gerne einen Kaffee.",
      alt: "Kauf mir einen Kaffee auf ko-fi.com",
    },
  },
  es: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "Inserta un vídeo, configura bucles precisos y automatiza los aumentos de velocidad sin perder tu lugar.",
      quickstartButton: "Inicio rápido",
      quickstartGuided: "Configuración guiada",
      quickstartTitle: "Inicio rápido",
      quickstartLede:
        "Las sesiones guardan todos los bucles de una canción. Los bucles registran inicio/fin, velocidad y una nota opcional para volver enseguida a practicar.",
      quickstartList: {
        step1:
          "Crea una sesión por canción y añade bucles para solos, riffs y pasajes complicados.",
        step2:
          "Usa los controles de bucle para fijar inicio/fin y luego guárdalo en la sesión actual.",
        step3:
          "La automatización te permite repetir un bucle y subir ligeramente el tempo en cada pasada.",
        step4:
          "Tus sesiones se quedan en este navegador y puedes exportarlas o importarlas cuando quieras.",
      },
      quickstartImportSample: "Importar sample-session.json",
      quickstartDecline: "Ahora no",
      close: "Cerrar",
      tutorialButton: "Ver tutorial",
      tutorialModalTitle: "Tutorial completo",
    },
    language: {
      label: "Idioma",
    },
    common: {
      loops: "bucles",
    },
    video: {
      heading: "Controles de vídeo y bucle",
      infoLabel: "Información de la sección de vídeo",
      tooltip:
        "Carga un enlace de YouTube y bloquea las marcas de inicio/fin antes de empezar a practicar.",
      loading: "Cargando el reproductor de vídeo...",
      labelInput: "ID o URL del vídeo",
      inputPlaceholder: "p. ej., enlace o ID del vídeo",
      loadButton: "Cargar y reiniciar",
      uploadButton: "Subir MP3",
      loopStart: "Inicio del bucle (hh:mm:ss o segundos)",
      loopEnd: "Fin del bucle (hh:mm:ss o segundos)",
      placeholderTime: "00:00:00",
      setFromCurrent: "Fijar desde el momento actual",
      startLoop: "Iniciar bucle",
      stopLoop: "Detener bucle",
      clearLoop: "Limpiar bucle",
    },
    speed: {
      heading: "Velocidad y automatización",
      infoLabel: "Información de velocidad y automatización",
      tooltip:
        "Ajusta la velocidad de reproducción y las reglas de automatización para que el bucle alcance tu tempo objetivo poco a poco.",
      playbackLabel: "Velocidad de reproducción:",
      increaseEvery: "Aumentar la velocidad cada",
      increaseBy: "Aumentar en",
      maxSpeed: "Velocidad máxima",
      startAutomation: "Iniciar automatización",
      stopAutomation: "Detener automatización",
    },
    sessions: {
      heading: "Sesiones guardadas",
      infoLabel: "Información sobre las sesiones guardadas",
      tooltip:
        "Guarda cada bucle, tempo y nota por canción para volver a practicar luego.",
      note:
        "Almacena varias configuraciones de riff para volver sin reingresar valores.",
      noSessions: "Aún no hay sesiones guardadas.",
      load: "Cargar",
      delete: "Eliminar",
      newLoop: "Nuevo bucle",
      loopInfoLabel: "Información del formulario de bucle",
      loopTooltip:
        "Nombra el bucle actual y anota contexto para recordar el riff o sección más tarde.",
      captureNote:
        "Captura los marcadores de inicio/fin, el tempo y las notas antes de volver a practicar.",
      loopTitlePlaceholder: "Título del bucle (p. ej., Verso 1)",
      loopNotePlaceholder: "Nota (opcional)",
      saveLoop: "Guardar bucle",
      replace: "Reemplazar",
      unnamedLoop: "Bucle sin nombre",
      noLoops: "Aún no hay bucles guardados.",
      saveSession: "Guardar sesión",
      export: "Exportar",
      import: "Importar",
      exportTitle: "Exportar todas las sesiones a un archivo JSON",
      importTitle: "Importar sesiones JSON desde archivo",
    },
    kofi: {
      prompt: "Si esta app te ayuda, considera invitarme a un café.",
      alt: "Invítame a un café en ko-fi.com",
    },
  },
  ja: {
    app: {
      brand: "The RiffPeater",
      tagline:
        "ビデオを埋め込み、正確なループを設定し、場所を見失わずにテンポの上昇を自動化します。",
      quickstartButton: "クイックスタート",
      quickstartGuided: "ガイド付きセットアップ",
      quickstartTitle: "クイックスタート",
      quickstartLede:
        "セッションには曲ごとの全ループが保持されます。ループには開始/終了、速度、任意のメモを保存して、すぐに練習に戻れます。",
      quickstartList: {
        step1:
          "曲ごとにセッションを作成し、ソロ、リフ、難しいフレーズ用のループを追加してください。",
        step2:
          "ループコントロールで開始/終了を設定し、現在のセッションに保存します。",
        step3:
          "自動化によりループを繰り返し、毎回少しずつテンポを上げられます。",
        step4:
          "セッションはこのブラウザに保存され、いつでもエクスポートやインポートができます。",
      },
      quickstartImportSample: "sample-session.json を読み込む",
      quickstartDecline: "今はしない",
      close: "閉じる",
      tutorialButton: "チュートリアルを見る",
      tutorialModalTitle: "完全なチュートリアル",
    },
    language: {
      label: "言語",
    },
    common: {
      loops: "ループ",
    },
    video: {
      heading: "ビデオ＆ループ操作",
      infoLabel: "ビデオセクション情報",
      tooltip:
        "YouTubeリンクを読み込み、練習を始める前にループの開始/終了ポイントを固定します。",
      loading: "ビデオプレーヤーを読み込み中...",
      labelInput: "ビデオIDまたはURL",
      inputPlaceholder: "例：ビデオリンクまたはID",
      loadButton: "読み込み＆リセット",
      uploadButton: "MP3をアップロード",
      loopStart: "ループ開始 (hh:mm:ss または秒)",
      loopEnd: "ループ終了 (hh:mm:ss または秒)",
      placeholderTime: "00:00:00",
      setFromCurrent: "現在位置から設定",
      startLoop: "ループを開始",
      stopLoop: "ループを停止",
      clearLoop: "ループをクリア",
    },
    speed: {
      heading: "速度と自動操作",
      infoLabel: "速度と自動操作の情報",
      tooltip:
        "再生速度と自動化ルールを調整して、目標テンポへゆっくりとループを持っていきます。",
      playbackLabel: "再生速度：",
      increaseEvery: "速度を上げるのは",
      increaseBy: "増加量",
      maxSpeed: "最大速度",
      startAutomation: "自動化を開始",
      stopAutomation: "自動化を停止",
    },
    sessions: {
      heading: "保存済みセッション",
      infoLabel: "保存済みセッションの情報",
      tooltip:
        "曲ごとにループ、テンポ、メモを保持して、すぐに練習に戻れます。",
      note:
        "リフの設定を複数保存して、値を再入力せずに戻れます。",
      noSessions: "まだセッションが保存されていません。",
      load: "読み込む",
      delete: "削除",
      newLoop: "新しいループ",
      loopInfoLabel: "ループフォームの情報",
      loopTooltip:
        "現在のループに名前を付け、後でリフやセクションを思い出せるようにメモを書き留めてください。",
      captureNote:
        "練習に戻る前に開始/終了マーカー、テンポ、メモを記録します。",
      loopTitlePlaceholder: "ループタイトル（例：Verse 1）",
      loopNotePlaceholder: "メモ（任意）",
      saveLoop: "ループを保存",
      replace: "置き換える",
      unnamedLoop: "名前なしのループ",
      noLoops: "まだループが保存されていません。",
      saveSession: "セッションを保存",
      export: "エクスポート",
      import: "インポート",
      exportTitle: "すべてのセッションをJSONファイルにエクスポート",
      importTitle: "JSONセッションをファイルからインポート",
    },
    kofi: {
      prompt: "このアプリが役立ったら、コーヒーをごちそうしていただけると嬉しいです。",
      alt: "ko-fi.comでコーヒーをごちそうして",
    },
  },
};

const defaultLocale = "en";

const supportedLocales = {
  en: "English",
  it: "Italiano",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  ja: "日本語",
};

const getNestedValue = (object, path) => {
  return path.split(".").reduce((current, segment) => {
    if (current && typeof current === "object") {
      return current[segment];
    }
    return undefined;
  }, object);
};

export { translations, supportedLocales, defaultLocale, getNestedValue };

