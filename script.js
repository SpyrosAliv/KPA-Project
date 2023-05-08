const infoPar1 = document.createElement("p");
const infoPar2 = document.createElement("p");
const infoPar3 = document.createElement("p");
const tabTitle = document.createElement("h1");
tabTitle.className = "bigTitle";
function clearText() {
    document.getElementById("main-heading").innerHTML = "";
    infoPar1.innerHTML = "";
    infoPar2.innerHTML = "";
    infoPar3.innerHTML = "";
    tabTitle.innerHTML = "";
    document.getElementById("starting-title").outerHTML= "";
}
function loadGeneralInfo() {
    clearText();
    tabTitle.innerHTML = "ΓΕΝΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ"
    infoPar1.innerHTML = "Η ταινία “2001: A Space Odyssey” είναι βρετανικής και αμερικανικής παραγωγής γυρισμένη στην Αγγλία το 1968 με σκηνοθέτη τον Στάνλεϊ Κιούμπρικ. Είναι βασισμένη στο μυθιστόρημα επιστημονικής φαντασίας “The Sentinel” του Άρθουρ Κλαρκ και σεναριογράφους της ταινίας τον ίδιο και τον Κιούμπρικ.";
    infoPar2.innerHTML = "Με αρκετά μεγάλη διάρκεια και πλοκή που αγγίζει θέματα όπως η ανθρώπινη εξέλιξη, η ζωή έξω από τον πλανήτη μας και η τεχνητή νοημοσύνη ήταν πολύ προχωρημένη για την εποχή της. Αξιοσημείωτη είναι, επίσης, η εξαιρετική χρήση της μουσικής που σε συνδυασμό με τα οπτικά εφέ, τα οποία κέρδισαν Όσκαρ, μαγεύουν τον θεατή.";
    infoPar3.innerHTML = "Το 1991, χαρακτηρίστηκε «πολιτιστικά, ιστορικά ή αισθητικά σημαντική» από τη Βιβλιοθήκη του Κογκρέσου των Ηνωμένων Πολιτειών και επιλέχθηκε να ενταχθεί στο Εθνικό Μητρώο Κινηματογράφου.";
    document.getElementById("tab-title").appendChild(tabTitle);
    document.getElementById("info-par1").appendChild(infoPar1);
    document.getElementById("info-par2").appendChild(infoPar2);
    document.getElementById("info-par3").appendChild(infoPar3);
}