//cards = document.getElementsByClassName('card');

function Skill(id, title, description, crd, levelMax) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.currentLevel = 0;
    this.crd = crd; //crd stands for "cost-requirements-description"
    this.levelMax = levelMax;
}

function MainStat(id, title, description, skills, currentLevelDescription) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.currentLevel = 1;
    this.currentLevelDescription = currentLevelDescription;
    this.skills = skills;
    this.levelMax = 10;
}

MainStat.prototype.cost = function(level) {
    if (level < 6) {
        return 1;
    }
    if (level >= 6 && level < 9) {
        return 2;
    }
    if (level >= 9) {
        return 3;
    }
}

var perceptionSkills = [
    new Skill(
        1,
        "Dead Eye",
        "Specialize in taking keen aim with rifles and wasting your target with an expertly-placed bullet. One shot, one kill.", {
            //currentSkillLevel: { requires: { mainstat.id: mainstat.currentLevel }, Description: "string"}
            1: {
                "requires": { 1: 1 },
                "Description": "Pot Shot : Pot Shot. You can hit the broad side of a barn and do 10% more damage with rifles. Craft quality 2 poor rifles, aim and reload 10% faster. Unlocks hunting rifle crafting."
            },
            2: {
                "requires": { 1: 3 },
                "Description": "Rifleman : You are a rifleman and can hit a large rock at 30 yards. Craft quality 3 fair rifles. Deal 20% more damage, aim 20% faster, reload 15% faster."
            },
            3: {
                "requires": { 1: 5 },
                "Description": "Marksman : You are now a marksman and can hold your own. Craft quality 4 good rifles. Deal 30% more damage , aim 32% faster, reload 20% faster and use 10% less stamina aiming with rifles.\nKill Streak: Successive kills increase damage bonus by 10%, 20% to a maximum of 30%."
            },
            4: {
                "requires": { 1: 7 },
                "Description": "Sharpshooter : You are now a sharpshooter. Craft quality 5 great rifles. Deal 40% more damage, aim 45% faster, reload 25% faster, and use 20% less stamina aiming with rifles.\nKill Streak: Successive kills increase damage bonus by 20%, 30% to a maximum of 40%."
            },
            5: {
                "requires": { 1: 10 },
                "Description": "Dead Eye : Dead Eye: Through all the hard training and countless shooting, you are now a dead eye sniper. Deal 50% more damage, aim 60% faster, reload 30% faster, and use 30% less stamina aiming with rifles.\nKill Streak: Successive kills increase damage bonus by 30%, 40% up to a maximum of 50%."
            }
        },
        5
    ),
    new Skill(
        2,
        "Demolitions Expert",
        "Specialize in explosive weapons to stun, cripple and dismember your foes.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Grenadier Initiate : You are now a grenadier initiate, be careful with those explosives. Increase damage 10%, reload speed 15%, aim 10% faster, 50% chance to stun enemies and a 5% greater chance to dismember.\nCraft pipe bombs, pressure plate and cooking pot mines."
            },
            2: {
                "requires": { 1: 3 },
                "Description": "I'm TNT, I'm dynamite. : Increase damage by 20%, reload speed 20%, aim 20% faster, 100% chance to stun enemies, and a 10% greater chance to dismember.\nCraft dynamite and hubcap land mines."
            },
            3: {
                "requires": { 1: 5 },
                "Description": "Explosives Handler : You are now an explosives handler. Increase damage 30%, increase reload speed by 25%, aim 30% faster, have a 33% chance to cripple enemies and a 20% greater chance to dismember.\nCraft grenades and more efficient stacks of gunpowder."
            },
            4: {
                "requires": { 1: 7 },
                "Description": "Rocket Man : You are now a Rocket Man. Increase damage 40%, reload speed by 30%, aim 40% faster, have a 66% chance to cripple enemies and a 30% greater chance to dismember.\nCraft high explosive rockets and anti-personnel fragmentation rockets."
            },
            5: {
                "requires": { 1: 10 },
                "Description": "Demolitions Expert : Demolitions expert. You make things go boom in a big way. Increase damage 50%, reload speed by 35%, aim 50% faster and a 45% greater chance to dismember. Stun lasts longer on enemies.\nCraft timed charges, contact grenades and air filter land mines."
            },
        },
        5
    ),
    new Skill(
        3,
        "Javelin Master",
        "Learn to inflict more damage and throw spears further and with more accuracy.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Sharp Sticks : Sticks and stones can't break my bones but if combined make a nice spear. Craft quality 2 poor spears. Spears do 10% more damage and have 10% more range when thrown.\nUnlocks iron spear crafting."
            },
            2: {
                "requires": { 1: 3 },
                "Description": "Spear Thrower : Craft quality 3 fair spears. Spears now inflict 20% more damage and have 20% more range when thrown."
            },
            3: {
                "requires": { 1: 5 },
                "Description": "Spearman : You are now a Spearman and can Craft quality 4 good spears. Spears inflict 30% more damage and have 30% more range when thrown."
            },
            4: {
                "requires": { 1: 7 },
                "Description": "Lanceman : You are now a Lanceman and can Craft quality 5 great spears. Spears now inflict 40% more damage and have 40% more range."
            },
            5: {
                "requires": { 1: 10 },
                "Description": "Javelin Master : You are now a Javelin Master and if this wasn't the apocalypse you could be in the Olympics. Spears do 50% more damage and have 50% more range."
            }
        },
        5
    ),
    new Skill(
        4,
        "Lock Picking",
        "Learn to pick locks faster and break less lock picks.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Burglar : Burglar. You are starting to make a name for yourself. You can pick locks 20% faster and have a 10% lower chance to break lockpicks. Craft lockpicks."
            },
            2: {
                "requires": { 1: 4 },
                "Description": "Lock Smith : You are now a lock smith and few locks will keep you out. You can pick locks 40% faster and have a 20% lower chance to break lockpicks."
            },
            3: {
                "requires": { 1: 7 },
                "Description": "Safe Cracker : You are now a world class safe cracker. Pick locks 60% faster and have a 30% lower chance to break lockpicks."
            }
        },
        3
    ),
    new Skill(
        5,
        "The Infiltrator",
        "Use your heightened senses to take less damage from traps.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Mole : You are now a mole and can move through dangerous traps easier. Loose board traps and land mines trigger half a second slower. Take 20% less damage from land mines."
            },
            2: {
                "requires": { 1: 4 },
                "Description": "Trespasser : You are now a trespasser and move with confidence through dangerous settings. Loose board traps and land mines trigger 1 second slower. Take 35% less damage from land mines."
            },
            3: {
                "requires": { 1: 7 },
                "Description": "The Infiltrator : You are known as The Infiltrator as you can safely navigate the most dangerous minefields. Loose board traps and land mines trigger 2 second slower. Take 50% less damage from land mines. Can pick up land mines."
            }
        },
        3
    ),
    new Skill(
        6,
        "Animal Tracker",
        "Learn to detect and track animals within 100m and never go hungry.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Trail Finder : Crouch down and use your keen eyesight to find the tracks of small animals like rabbits, snakes or chickens.\nTracked animals are marked on your compass and map."
            },
            2: {
                "requires": { 1: 4 },
                "Description": "Ranger : Your hawk like senses can detect deer and boars as well as sneaky predators like wolves or coyotes."
            },
            3: {
                "requires": { 1: 7 },
                "Description": "Big Game Hunter : Become the ultimate tracker. Your senses are unparalleled. You can detect predators like mountain lions or bears."
            }
        },
        3
    ),
    new Skill(
        7,
        "The Penetrator",
        "You find weak spots in a target's armor and can use AP rifle bullets to shoot through multiple organic targets.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Piercing Shot : Ignore 15% of armor with firearms, archery and spears."
            },
            2: {
                "requires": { 1: 4 },
                "Description": "Perforator : Ignore 25% of armor with firearms, archery and spears. Armor-piercing rounds can penetrate an additional target or a block of up to 500 hit points when using Hunting, Marksman or Sniper Rifles."
            },
            3: {
                "requires": { 1: 6 },
                "Description": "Puncturer : Ignore 35% of armor with firearms, archery and spears. Armor-piercing rounds can penetrate two additional targets or a block of up to 750 hit points when using Hunting, Marksman or Sniper Rifles."
            },
            4: {
                "requires": { 1: 8 },
                "Description": "The Penetrator : Ignore 35% of armor with firearms, archery and spears. Armor-piercing rounds can penetrate three additional targets or a block of up to 1000 hit points when using Hunting, Marksman or Sniper Rifles."
            }
        },
        4
    ),
    new Skill(
        8,
        "Lucky Looter",
        "Specialize in tracking down the motherlode and maybe getting a little extra for your trouble.\nYou find better loot with every perk level.", {
            1: {
                "requires": { 1: 1 },
                "Description": ""
            },
            2: {
                "requires": { 1: 2 },
                "Description": ""
            },
            3: {
                "requires": { 1: 3 },
                "Description": ""
            },
            4: {
                "requires": { 1: 5 },
                "Description": ""
            },
            5: {
                "requires": { 1: 7 },
                "Description": ""
            }
        },
        5
    ),
    new Skill(
        9,
        "Treasure Hunter",
        "", {
            1: {
                "requires": { 1: 1 },
                "Description": ""
            },
            2: {
                "requires": { 1: 4 },
                "Description": ""
            },
            3: {
                "requires": { 1: 7 },
                "Description": ""
            }
        },
        3
    ),
    new Skill(
        10,
        "Salvage Operations",
        "", {
            1: {
                "requires": { 1: 1 },
                "Description": ""
            },
            2: {
                "requires": { 1: 2 },
                "Description": ""
            },
            3: {
                "requires": { 1: 3 },
                "Description": ""
            },
            4: {
                "requires": { 1: 5 },
                "Description": ""
            },
            5: {
                "requires": { 1: 7 },
                "Description": ""
            }
        },
        5
    ),
    //template
    // new Skill(
    //     1,
    //     "",
    //     "", {
    //         1: {
    //             "requires": { 1: 1 },
    //             "Description": ""
    //         },
    //         2: {
    //             "requires": { 1: 3 },
    //             "Description": ""
    //         },
    //         3: {
    //             "requires": { 1: 5 },
    //             "Description": ""
    //         },
    //         4: {
    //             "requires": { 1: 7 },
    //             "Description": ""
    //         },
    //         5: {
    //             "requires": { 1: 10 },
    //             "Description": ""
    //         }
    //     },
    //     5
    // )
];

mainStats = [
    new MainStat(
        1,
        "Perception",
        "Perception is the measure of your sensory awareness. Increasing Perception raises the headshot bonus and dismemberment chance with spears, rifles, explosive weapons and tools.",
        perceptionSkills, {
            1: {
                "PointsToBuy": 1,
                "Description": "Oblivious : You are pretty oblivious in the perception department. Deal 200% head shot damage and have a 5% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            2: {
                "PointsToBuy": 1,
                "Description": "Unaware : You are still unaware to most things around you. Deal 210% head shot damage and have a 10% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            3: {
                "PointsToBuy": 1,
                "Description": "Unobservant : You are sometimes unobservant but getting better. Deal 220% head shot damage and have a 15% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            4: {
                "PointsToBuy": 1,
                "Description": "Incognizant : Your incognizant perception is usually just a small setback. Deal 230% head shot damage and have a 20% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            5: {
                "PointsToBuy": 1,
                "Description": "Observant : You are observant and notice just enough to make a big difference. Deal 240% head shot damage and have a 25% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            6: {
                "PointsToBuy": 2,
                "Description": "Attentive : Your attention to detail is clearly aiding you in combat. Deal 250% head shot damage and have a 30% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            7: {
                "PointsToBuy": 2,
                "Description": "Discerning : You can discern weak points in enemies with ease now. Deal 260% head shot damage and have a 35% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            8: {
                "PointsToBuy": 2,
                "Description": "Perceptive : Your perception is astounding. Deal 270% head shot damage and have a 40% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            9: {
                "PointsToBuy": 3,
                "Description": "Astute Awareness : Your awareness is astute. Deal 285% head shot damage and have a 45% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            },
            10: {
                "PointsToBuy": 3,
                "Description": "Boom Headshot : You are unrivaled at making heads go boom. Deal 300% head shot damage and have a 50% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations."
            }
        }
    ),
];

function Player(mainstats) {
    this.level = 0;
    this.pointsUsed = 0;
    this.mainStats = mainstats;
}

//TODO: may want to make this updatable by player if they've changed their progression file.
var pointsPerLevel = 1;

Player.prototype.currentLevel = function() {
    if (this.pointsUsed === 0) {
        this.level = 0;
        return this.level;
    }
    if (this.pointsUsed < 5) {
        this.level = 1;
        return this.level;
    }
    if (this.pointsUsed >= 5) {
        this.level = (pointsPerLevel * this.pointsUsed + 1) - 4
        return this.level;
    }
};

Player.prototype.allowedPointsAtCurrentLevel = function() {
    //4 skill points at level 1 (after completing starting quests?)
    //then it depends on the games skill points per level setting in progression.xml - currently default is 1 per level
    if (this.currentLevel() === 0) {
        return 0;
    }
    if (this.currentLevel() === 1) {
        return 4;
    }
    if (this.currentLevel() > 1) {
        return 4 + (pointsPerLevel * (this.currentLevel() - 1));
    }
};

Player.prototype.getMainStat = function(id) {
    return this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === id))];
}

Player.prototype.getSkill = function(parentId, id) {
    return this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === parentId))].skills[this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === parentId))].skills.indexOf(player.mainStats[player.mainStats.indexOf(player.mainStats.find((x) => x.id === parentId))].skills.find((y) => y.id === id))];
}

const urlParams = new URLSearchParams(window.location.search);
const urlData = urlParams.get('data');

function encodeSkills(player) {
    var encodedData = "spent" + player.pointsUsed + "_";
    for (var i = 0; i < player.mainStats.length; i++) {
        encodedData += "m" + player.mainStats[i].id + "v" + player.mainStats[i].currentLevel + "_";
        for (var j = 0; j < player.mainStats[i].skills.length; j++) {
            encodedData += "s" + player.mainStats[i].skills[j].id + "-" + "m" + player.mainStats[i].id + "v" + player.mainStats[i].skills[j].currentLevel + "_";
        }
    }
    console.log(encodedData);
    return window.location.href.replace(window.location.search, "") + '?data=' + btoa(encodedData);
}

function decodeSkills(urlData) {
    console.log(urlData);
    var decodedData = atob(urlData);
    console.log(decodedData);
    var decodedArray = decodedData.split("_");
    player.pointsUsed = parseInt(decodedArray[0].replace("spent", ""));
    for (var i = 1; i < decodedArray.length - 1; i++) {
        var isMainStat = decodedArray[i][0] === "m";
        var id = parseInt(decodedArray[i][1]);
        if (isMainStat) {
            var stat = player.getMainStat(id);
            stat.currentLevel = parseInt(decodedArray[i].split("v")[1]);
        } else {
            //is a skill:
            var parentId = parseInt(decodedArray[i].split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            skill.currentLevel = parseInt(decodedArray[i].split("v")[1]);
        }
    }
    player.currentLevel();
    console.log(player);
}

player = new Player(mainStats);

console.log(encodeSkills(player));

if (urlData) {
    var decodedData = decodeSkills(urlData);
}

// for (var i = 0; i < player.mainStats.length; i++) {
//     //TODO: create cards for stats and their child skills, and add the event listener.
//     console.log(player.mainStats[i]);
// }

addBtns = document.getElementsByClassName('addBtn');
for (var i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', (event) => {
        var targetElement = event.target || event.srcElement;
        var dataskill = targetElement.getAttribute("data-skillid");
        var isMainStat = dataskill[0] === "m";
        var id = parseInt(dataskill[1]);
        if (isMainStat) {
            var stat = player.getMainStat(id);
            if (stat.currentLevel < stat.levelMax) {
                stat.currentLevel++;
                player.pointsUsed = player.pointsUsed + stat.cost(player.currentLevel());
            }
            console.log(stat);
        } else {
            //is a skill:
            var parentId = parseInt(dataskill.split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            //if a player doesn't have the required level in the main stat, don't let them add it
            var playerCanUnlock = player.getMainStat(parentId).currentLevel >= skill.crd[skill.currentLevel + 1].requires[parentId];
            if ((skill.currentLevel < skill.levelMax) && playerCanUnlock) {
                skill.currentLevel++;
                player.pointsUsed++;
            }
            console.log(skill);
        }
        player.currentLevel();
    });
}

removeBtns = document.getElementsByClassName('removeBtn');
for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', (event) => {
        var targetElement = event.target || event.srcElement;
        var dataskill = targetElement.getAttribute("data-skillid");
        var isMainStat = dataskill[0] === "m";
        var id = parseInt(dataskill[1]);
        if (isMainStat) {
            var stat = player.getMainStat(id);
            //if player has a skill point that requires a certain level, don't let them remove
            var playerCanRemove = true;
            for (var j = 0; j < stat.skills.length; j++) {
                if (stat.skills[j].currentLevel === 0) {
                    continue;
                }
                playerCanRemove = stat.skills[j].crd[stat.skills[j].currentLevel].requires[id] <= stat.currentLevel - 1;
                if (!playerCanRemove) {
                    break;
                }
            }
            if ((stat.currentLevel > 1) && playerCanRemove) {
                stat.currentLevel--;
                player.pointsUsed = player.pointsUsed - stat.cost(player.currentLevel());
            }
            console.log(stat);
        } else {
            //is a skill:
            var parentId = parseInt(dataskill.split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            if (skill.currentLevel > 0) {
                skill.currentLevel--;
                player.pointsUsed--;
            }
            console.log(skill);
        }
        player.currentLevel();
    });
}