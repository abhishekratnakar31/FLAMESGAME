function calculateFLAMES() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, "");

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }

    let name1Array = name1.split("");
    let name2Array = name2.split("");

    // Remove common letters
    name1Array.forEach((letter, index) => {
        let matchIndex = name2Array.indexOf(letter);
        if (matchIndex !== -1) {
            name1Array[index] = "";
            name2Array[matchIndex] = "";
        }
    });

    let remainingLetters = [...name1Array, ...name2Array].filter(letter => letter !== "").length;
    let flames = ["Friends", "Lovers", "Affection", "Marriage", "Enemies", "Siblings"];

    let index = (remainingLetters % flames.length) || flames.length;
    let relationship = flames[index - 1];

    document.getElementById("result").innerText = "Relationship: " + relationship;
}