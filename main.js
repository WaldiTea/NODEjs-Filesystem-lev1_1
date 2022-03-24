const fs = require("fs");

// 1. Öffne die Datei blog1.txt
// ============================
fs.open('blog1.txt', 'r+', (err, f) => {
  if (err) {
    return console.error(err);
  }
  console.log(f);
  console.log("File opened!");

  fs.close(f, () => {
    console.log('file1 closed!')
  });
});

// 2. Ändere den Inhalt in der Datei blog1.txt
// ===========================================
fs.writeFile("./blog1.txt", "Hallo Mars!", () => {
  console.log("Text replaced!");
});

// 3. Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein
// ========================================================================
fs.open('blog2.txt', 'w+', (err, f) => {
  if (err) {
    return console.error(err);
  }
  console.log(f);
  console.log('file created!');

  fs.writeFile(f, "Hallo nochmal!", () => {
    console.log("New text added!");
  });

  fs.close(f, () => {
    console.log('file2 closed!');
  });
});

// 4. Erstelle einen neuen Ordner „assets“
// =======================================
// 5. Existiert der Ordner „assets“ bereits? Dann lasse ihn wieder löschen
// =======================================================================
try {
  if (fs.existsSync("./assets")) {
    fs.rmdir("assets", (err) => {
      if(err) {
        return console.error(err);
      }
      console.log("Folder deleted!");
    });
  } else {
    fs.mkdir("./assets", (err) => {
      if(err) {
        return console.error(err);
      }
      console.log('Directory created!');
    });
  }
} catch(err) {
  console.error(err)
}

// 6. Erstelle eine Datei namens „delete.txt“
// ==========================================
// 7. Lösche die Datei „delete.txt“, wenn sie bereits existiert
// ============================================================
try {
  if (fs.existsSync("./delete.txt")) {
    fs.unlink("./delete.txt", (err) => {
      if(err) {
        return console.error(err);
      }
      console.log("Delete-File removed!");
    });
  } else {
    fs.open("delete.txt", "w+", (err, f) => {
      if(err) {
        return console.error(err);
      }
      console.log(f);
      console.log("Delete-File created!");
    
      fs.close(f, () => {
        console.log('Delete-File closed!');
      });
    });
  }
} catch(err) {
  console.error(err)
}

// 8. Erstelle eine Datei namens „Hello.txt“ und füge ihr Text hinzu. Benenne sie dann in „HelloWorld.txt“ um
// ==========================================================================================================
fs.open('Hello.txt', 'w+', (err, f) => {
  if(err) {
    return console.error(err);
  }
  console.log(f);
  console.log('Hello.txt created!')

  fs.writeFile(f, "Hallo Welt!", () => {
    console.log("new text added");
  });

  fs.rename('Hello.txt', 'HelloWorld.txt', () => {
    console.log("File renamed!");
  });

  fs.close(f, () => {
    console.log('Hello.txt closed!');
  });
});