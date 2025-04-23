function calculateFLAMES() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
            if (name1[i] === name2[j]) {
                name1 = name1.substring(0, i) + name1.substring(i + 1);
                name2 = name2.substring(0, j) + name2.substring(j + 1);
                i = -1;
                break;
            }
        }
    }

    let totalCount = name1.length + name2.length;
    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let relationships = {
        F: "Friends",
        L: "Love",
        A: "Affection",
        M: "Marriage",
        E: "Enemies",
        S: "Siblings"
    };

    let index = 0;
    while (flames.length > 1) {
        index = (index + totalCount - 1) % flames.length;
        flames.splice(index, 1);
    }

    document.getElementById("result").innerText = `Relationship: ${relationships[flames[0]]}`;
}
