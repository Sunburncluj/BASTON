const fighters = {
    "GermainMMA": {
        moves: [
            { name: "Coup de Bite Sournois", desc: "Germain vise les parties et fait hurler de douleur !" },
            { name: "Pisse Toxique", desc: "Un jet acide qui brûle et humilie l’adversaire !" },
            { name: "Beauté Fatale", desc: "Un regard si divin qu’il aveugle et désoriente !" },
            { name: "Shaker Smash", desc: "Un coup de shaker qui explose les dents de l’ennemi !" }
        ],
        ultimate: [
            "Fait une clé de bite et étouffe",
            "Pisse par terre, se roule dedans et se moque de son adversaire ridicule",
            "Met KO son adversaire par sa beauté céleste",
            "Prend un shaker de prot et l'enfonce dans le rectum de son adversaire",
            "Maki insulte Germain et prend part au combat et encule l'adversaire"
        ]
    },
    "YoussefGourdini": {
        moves: [
            { name: "Gourdin Brutal", desc: "Un coup massif qui fait voler les dents !" },
            { name: "Porsche Crash", desc: "Un vrombissement qui assourdit et écrase !" },
            { name: "Chiffre Fou", desc: "Une stat débile qui rend l’adversaire idiot !" },
            { name: "Vacances Moqueuses", desc: "Une insulte sur les RTT qui démoralise !" }
        ],
        ultimate: [
            "Sort son gourdin massif et assomme l'adversaire",
            "Démarre sa Porsche et écrase l'adversaire",
            "Fait un chiffre démentiel et humilie l'adversaire, KO instantané",
            "Prend 3 semaines de vacances 5 fois d'affilé et ridiculise l'adversaire, KO direct"
        ]
    },
    "Dani3some": {
        moves: [
            { name: "Strangle Sexy", desc: "Un étranglement qui excite et étouffe à la fois !" },
            { name: "Gangbang Chaos", desc: "Une vague de plaisir qui désoriente l’ennemi !" },
            { name: "Duro Portugais", desc: "Un cri ancestral qui paralyse de peur !" },
            { name: "Digestif Mortel", desc: "Un shot qui fait vomir et chanceler !" }
        ],
        ultimate: [
            "Utilise l'attaque Strangulation et étouffe son adversaire de plaisir",
            "Réalise un gangbang et utilise toute la jouissance accumulée pour mettre KO l'adversaire",
            "Utilise ses origines portugaises pour mettre tout le monde dans le Duro et les achever",
            "Sort trop de digestifs à ses adversaires et les met KO"
        ]
    },
    "VictorTetoni": {
        moves: [
            { name: "Danse Ougandaise", desc: "Un rythme qui rend l’adversaire fou de honte !" },
            { name: "Moto Teton", desc: "Une charge à pleine vitesse, tétons en avant !" },
            { name: "Chiffrax Dentaire", desc: "Un calcul qui explose la tête de l’ennemi !" },
            { name: "Tetoni Blast", desc: "Une explosion de tétons qui choque et blesse !" }
        ],
        ultimate: [
            "Se met à faire une danse ougandaise suivie d'une improvisation théâtrale de Morena Baccarin pour humilier ses adversaires",
            "Accélère en moto et fonce les tétons pincés à l'air sur ses adversaires pour les mettre KO",
            "Chiffre trop fort à Dentego et sort l'attaque Chiffrax qui tue instantanément",
            "Fait un localizasione del tetoni si puissant que les tétons de l'adversaire éclatent"
        ]
    },
    "JBchiffrémuscu": {
        moves: [
            { name: "Flex Mortel", desc: "Un biceps qui provoque un infarctus !" },
            { name: "Coke Aveuglante", desc: "Une poudre qui brûle les yeux et la raison !" },
            { name: "Cash Slap", desc: "Un billet roulé qui claque comme un fouet !" },
            { name: "Verre Tranchant", desc: "Un éclat qui lacère et terrifie !" }
        ],
        ultimate: [
            "Chiffre un max de cash et étouffe son adversaire avec la montagne de cash illégal",
            "Montre son bras musclé et crée un arrêt cardiaque chez l'adversaire",
            "Prend une trace de C, devient fou et sodomise son adversaire",
            "Casse une vitre de voiture et égorge son adversaire avec les morceaux"
        ]
    },
    "PierreV8-21": {
        moves: [
            { name: "V8 Rugissant", desc: "Un bruit qui fait trembler les os !" },
            { name: "Chiasse Projetée", desc: "Une odeur qui asphyxie et répugne !" },
            { name: "Chiffre Maçon", desc: "Une stat bidon qui casse le moral !" },
            { name: "Chibrax Furtif", desc: "Une attaque sournoise qui perce tout !" }
        ],
        ultimate: [
            "Transperce tous les adversaires avec son chibrax massif de 21 mégatonnes",
            "Tente de faire le Corse Juif, devient fou et chie une chiasse monumentale sur l'adversaire",
            "Chiffre comme un FDP dans le mâconnais et humilie l'adversaire azuréen",
            "Éclate le cerveau de l'adversaire en faisant cracher le V8 démoniaque"
        ]
    },
    "JaytradeFlop": {
        moves: [
            { name: "Trade Foiré", desc: "Une perte qui énerve et déstabilise !" },
            { name: "Meme Toxique", desc: "Une image qui rend l’adversaire débile !" },
            { name: "Scam Vocal", desc: "Un cri qui promet des millions et assourdit !" },
            { name: "Ragecoin", desc: "Une crypto bidon qui fait perdre la tête !" }
        ],
        ultimate: [
            "Fait un trade perdant et étrangle l'adversaire de rage",
            "Rug ses adversaires en leur proposant un Meme coin scandaleux",
            "Répond à un message du groupe, les adversaires meurent de surprise"
        ]
    },
    "Damlapistebb": {
        moves: [
            { name: "Raclette Empoisonnée", desc: "Un fromage qui étouffe et pue !" },
            { name: "Revs Brûlants", desc: "Un moteur qui grille la peau !" },
            { name: "Pisse Murale", desc: "Un jet qui trempe et dégoute !" },
            { name: "Tigne Rally", desc: "Un choc électrique qui secoue l’ennemi !" }
        ],
        ultimate: [
            "Enfourne une délicieuse raclette dans l'anus de son adversaire puis l'encule à mort",
            "Fait des Revs sur le cadavre encore chaud pour l'humilier",
            "Construit un mur en pierre, monte dessus et pisse sur l'adversaire",
            "Fait l'attaque Tigne Chalet Rally et électrocute l'adversaire"
        ]
    },
    "SergeShonen": {
        moves: [
            { name: "Short Provoc", desc: "Un short si court qu’il perturbe l’esprit !" },
            { name: "Kick Australien", desc: "Un coup sauvage qui casse les dents !" },
            { name: "Chiasse France", desc: "Une insulte qui fait vomir de honte !" },
            { name: "Highkick Fou", desc: "Un coup raté qui impressionne quand même !" }
        ],
        ultimate: [
            "Devient australien et chie sur la France, l'adversaire est KO",
            "Réalise l'attaque kickboxeur suisse et découpe la tête avec un highkick",
            "Met un short trop court pour amadouer, puis encule jusqu'à la mort"
        ]
    },
    "DavidRacedumito": {
        moves: [
            { name: "Chiffre Choc", desc: "Un score qui paralyse de surprise !" },
            { name: "Race Sournoise", desc: "Une feinte qui prend de vitesse !" },
            { name: "Tank Fictif", desc: "Un bruit qui fait croire à la mort !" },
            { name: "Immo Slap", desc: "Un contrat qui claque dans la gueule !" }
        ],
        ultimate: [
            "Révèle le fameux chiffre scoré officiel et tue l'adversaire choqué",
            "Réalise une race du mito mitonnante et surprend l'adversaire",
            "Vend son parc immobilier de 18 appartements, achète un tank et roule sur l'adversaire"
        ]
    }
};

const fighterNames = Object.keys(fighters);
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || {};

function updateLeaderboard(winner) {
    leaderboard[winner] = (leaderboard[winner] || 0) + 1;
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
}

function displayLeaderboard() {
    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "";
    Object.entries(leaderboard)
        .sort((a, b) => b[1] - a[1])
        .forEach(([name, wins]) => {
            const li = document.createElement("li");
            li.textContent = `${name}: ${wins} victoire(s)`;
            list.appendChild(li);
        });
}

function startDuel() {
    document.querySelector(".game-mode").classList.add("hidden");
    const selection = document.getElementById("fighters-selection");
    selection.classList.remove("hidden");
    const fighter1 = document.getElementById("fighter1");
    const fighter2 = document.getElementById("fighter2");
    fighter1.innerHTML = "";
    fighter2.innerHTML = "";
    fighterNames.forEach(name => {
        fighter1.innerHTML += `<option value="${name}">${name}</option>`;
        fighter2.innerHTML += `<option value="${name}">${name}</option>`;
    });
}

function launchDuel() {
    const fighter1 = document.getElementById("fighter1").value;
    const fighter2 = document.getElementById("fighter2").value;
    if (fighter1 === fighter2) {
        alert("Choisis deux combattants différents, dresseur !");
        return;
    }
    document.getElementById("fighters-selection").classList.add("hidden");
    const gameArea = document.getElementById("game-area");
    gameArea.classList.remove("hidden");
    simulateDuel(fighter1, fighter2);
}

function simulateDuel(f1, f2) {
    const log = document.getElementById("combat-log");
    log.innerHTML = `<p>Duel : ${f1} défie ${f2} ! Que le combat commence !</p>`;
    
    let hp1 = 100; // Points de vie de f1
    let hp2 = 100; // Points de vie de f2
    let turn = 0;

    const fightInterval = setInterval(() => {
        if (hp1 <= 0 || hp2 <= 0) {
            clearInterval(fightInterval);
            const winner = hp1 > 0 ? f1 : f2;
            const finish = fighters[winner].ultimate[Math.floor(Math.random() * fighters[winner].ultimate.length)];
            log.innerHTML += `<p><strong>${winner} utilise son attaque ultime : "${finish}" ! K.O. !</strong></p>`;
            updateLeaderboard(winner);
            document.getElementById("reset-btn").classList.remove("hidden");
            return;
        }

        // Tour par tour comme Pokémon
        const attacker = turn % 2 === 0 ? f1 : f2;
        const defender = turn % 2 === 0 ? f2 : f1;
        const move = fighters[attacker].moves[Math.floor(Math.random() * fighters[attacker].moves.length)];
        const damage = Math.floor(Math.random() * 20) + 10; // Dégâts aléatoires entre 10 et 30
        
        log.innerHTML += `<p>${attacker} utilise ${move.name} ! "${move.desc}"</p>`;
        log.innerHTML += `<p>${defender} perd ${damage} PV !</p>`;
        
        if (attacker === f1) {
            hp2 -= damage;
            log.innerHTML += `<p>PV restants : ${f1}: ${hp1}, ${f2}: ${hp2 > 0 ? hp2 : 0}</p>`;
        } else {
            hp1 -= damage;
            log.innerHTML += `<p>PV restants : ${f1}: ${hp1 > 0 ? hp1 : 0}, ${f2}: ${hp2}</p>`;
        }
        
        turn++;
    }, 1500); // Délai de 1,5 seconde entre chaque tour
}

function startBaston() {
    document.querySelector(".game-mode").classList.add("hidden");
    const gameArea = document.getElementById("game-area");
    gameArea.classList.remove("hidden");
    simulateBaston();
}

function simulateBaston() {
    const log = document.getElementById("combat-log");
    let remainingFighters = [...fighterNames];
    let hp = {};
    remainingFighters.forEach(f => hp[f] = 100); // PV pour tous
    
    log.innerHTML = `<p>Baston générale : ${remainingFighters.join(", ")} ! Que le chaos commence !</p>`;
    
    const fightInterval = setInterval(() => {
        if (remainingFighters.length <= 1) {
            clearInterval(fightInterval);
            const winner = remainingFighters[0];
            const finish = fighters[winner].ultimate[Math.floor(Math.random() * fighters[winner].ultimate.length)];
            log.innerHTML += `<p><strong>${winner} utilise son attaque ultime : "${finish}" ! Victoire totale !</strong></p>`;
            updateLeaderboard(winner);
            document.getElementById("reset-btn").classList.remove("hidden");
            return;
        }

        const attacker = remainingFighters[Math.floor(Math.random() * remainingFighters.length)];
        const victim = remainingFighters[(remainingFighters.indexOf(attacker) + 1) % remainingFighters.length];
        const move = fighters[attacker].moves[Math.floor(Math.random() * fighters[attacker].moves.length)];
        const damage = Math.floor(Math.random() * 20) + 10;

        log.innerHTML += `<p>${attacker} utilise ${move.name} sur ${victim} ! "${move.desc}"</p>`;
        hp[victim] -= damage;
        log.innerHTML += `<p>${victim} perd ${damage} PV ! PV restants : ${hp[victim] > 0 ? hp[victim] : 0}</p>`;

        if (hp[victim] <= 0) {
            log.innerHTML += `<p>${victim} est hors combat !</p>`;
            remainingFighters.splice(remainingFighters.indexOf(victim), 1);
        }
    }, 1500);
}

function resetGame() {
    document.getElementById("game-area").classList.add("hidden");
    document.getElementById("fighters-selection").classList.add("hidden");
    document.querySelector(".game-mode").classList.remove("hidden");
    document.getElementById("combat-log").innerHTML = "";
    document.getElementById("reset-btn").classList.add("hidden");
}

displayLeaderboard();
