$(function() {
    $.when(getXml(), getCsv()).done((x, c) => {
        // // console.log(x);
        // // console.log(c);

        var xml = x[0];
        var csv = $.csv.toObjects(c[0]);

        // // console.log(xml);
        // // console.log(csv);
        var mainStats = loadLanguage(xml, csv, 'english');

        var player = new Player(mainStats);
        const urlParams = new URLSearchParams(window.location.search);
        const urlData = urlParams.get('data');
        if (urlData) {
            decodeSkills(urlData, player);
        }
        render(player);
        bindEvents(player);
    });
});

var pointsPerLevel = null;

function getXml() {
    return $.ajax({
        type: "GET",
        url: "gamedata/progression.xml",
        dataType: "xml",
        success: (x) => { return x; }
    });
}

function getCsv() {
    return $.ajax({
        type: "GET",
        url: "gamedata/Localization.txt",
        success: (c) => { return c; }
    });
}

function loadLanguage(xml, csv, language) {
    //document -> progression -> attributes -> attribute (name_key, desc_key)
    //document -> progression -> skills -> skill 
    //document -> progression -> perks -> perk 
    var mainStats = [];

    pointsPerLevel = $(xml).find("level")[0].getAttribute('skill_points_per_level');
    var maxLevel = $(xml).find("attributes")[0].getAttribute('max_level');

    $(xml).find("attribute").each((i, el) => {
        // // console.log(i, el);
        // // console.log(el.getAttribute('name'));
        // // console.log(el.getAttribute('name_key'));
        // // console.log(el.getAttribute('desc_key'));
        // // console.log(el.getAttribute('icon'));

        //not sure whether to include books - for now ignore
        if (el.getAttribute('name') === 'attBooks') {
            return;
        }

        var name = null;
        var nameObj = csv.find((v, i, o) => v.Key === el.getAttribute('name_key'));
        if (nameObj) {
            // // console.log(nameObj);
            name = nameObj[language];
            // // console.log(name);
        }

        var description = null;
        var descObj = csv.find((v, i, o) => v.Key === el.getAttribute('desc_key'));
        if (descObj) {
            // // console.log(descObj);
            description = descObj[language];
            // // console.log(description);
        }

        var icon = el.getAttribute('icon');
        // // console.log(icon);

        var stat = new MainStat(
            i + 1,
            name,
            description, [], {},
            maxLevel
        );

        var statObj = {};

        //effect_description element
        $(el).find('effect_description').each((j, edel) => {
            // console.log(j, edel);
            // console.log(edel.getAttribute('level'));
            // console.log(edel.getAttribute('desc_key'));
            // console.log(edel.getAttribute('long_desc_key'));
            // console.log(csv.find((v, i, o) => v.Key === edel.getAttribute('desc_key'))[language]);
            // console.log(csv.find((v, i, o) => v.Key === edel.getAttribute('long_desc_key'))[language]);

            var statLevel = edel.getAttribute('level');
            var statTitle = csv.find((v, i, o) => v.Key === edel.getAttribute('desc_key'))[language]
            var statDescription = csv.find((v, i, o) => v.Key === edel.getAttribute('long_desc_key'))[language]
            var pointsToBuy = stat.cost(statLevel);
            statObj[statLevel] = {
                "PointsToBuy": pointsToBuy,
                "Description": statTitle + ' : ' + statDescription
            };
        });
        stat.currentLevelDescription = statObj;

        mainStats.push(stat);
    });

    // $(xml).find("skill").each((i, el) => {
    //     // // console.log(i, el);
    //     // // console.log(el.getAttribute('name'));
    //     // // console.log(el.getAttribute('parent'));
    //     // // console.log(el.getAttribute('name_key'));
    //     // // console.log(el.getAttribute('desc_key'));
    //     // // console.log(el.getAttribute('icon'));

    //     //not sure whether to include books - for now ignore
    //     if (el.getAttribute('parent') === 'attBooks') {
    //         return;
    //     }

    //     var name = null;
    //     var nameObj = csv.find((v, i, o) => v.Key === el.getAttribute('name_key'));
    //     if (nameObj) {
    //         // console.log(nameObj);
    //         name = nameObj[language];
    //         // console.log(name);
    //     }

    //     var parent = el.getAttribute('parent');

    //     var description = null;
    //     var descObj = csv.find((v, i, o) => v.Key === el.getAttribute('desc_key'));
    //     if (descObj) {
    //         // console.log(descObj);
    //         description = descObj[language];
    //         // console.log(description);
    //     }

    //     var icon = el.getAttribute('icon');
    //     // console.log(icon);
    // });

    var skills = [];
    $(xml).find("perk").each((i, el) => {
        // console.log(i, el);
        // console.log(el.getAttribute('name'));
        // console.log(el.getAttribute('parent'));
        // console.log(el.getAttribute('max_level'));
        // console.log(el.getAttribute('desc_key'));
        // console.log(el.getAttribute('long_desc_key'));

        var name = null;
        var nameObj = csv.find((v, i, o) => v.Key === el.getAttribute('name_key'));
        if (nameObj) {
            if (nameObj.Type === 'perk  book') {
                return;
            }
            // console.log(nameObj);
            name = nameObj[language];
            // console.log(name);

            $(el).find('level_requirements').each((i, e) => {
                // console.log(e);
                // console.log(e.getAttribute('level'));
                // console.log(e.children[0].getAttribute('name'));
                // console.log(e.children[0].getAttribute('progression_name'));
                // console.log(e.children[0].getAttribute('operation'));
                // console.log(e.children[0].getAttribute('value'));
                // console.log(e.children[0].getAttribute('desc_key'));
                var requirement = null;
                var reqDescObj = csv.find((v, i, o) => v.Key === e.children[0].getAttribute('desc_key'));
                if (reqDescObj) {
                    // console.log(reqDescObj);
                    requirement = reqDescObj[language];
                    // console.log(requirement);
                }
            });
        }

        var description = null;
        var descObj = csv.find((v, i, o) => v.Key === el.getAttribute('desc_key'));
        if (descObj) {
            if (descObj.Type === 'perk  book') {
                return;
            }
            // console.log(descObj);
            description = descObj[language];
            // console.log(description);
        }

        var longDescription = null;
        var longDescObj = csv.find((v, i, o) => v.Key === el.getAttribute('long_desc_key'));
        if (longDescObj) {
            if (longDescObj.Type === 'perk  book') {
                return;
            }
            // console.log(longDescObj);
            longDescription = longDescObj[language];
            // console.log(longDescription);
        }

        var icon = el.getAttribute('icon');
        // console.log(icon);
        var crd = {};
        var counter = 0;
        $(el).find('effect_description').each((j, edel) => {
            // console.log(j, edel);
            // console.log(edel.getAttribute('desc_key'));
            // console.log(edel.getAttribute('long_desc_key'));
            var skillLevel = j + 1;
            // console.log(csv.find((v, i, o) => v.Key === edel.getAttribute('desc_key')));
            var titleAttribute = csv.find((v, i, o) => v.Key === edel.getAttribute('desc_key'));
            var skillTitle = null;
            if (titleAttribute) {
                skillTitle = csv.find((v, i, o) => v.Key === edel.getAttribute('desc_key'))[language];
            }
            var skillDescription = null;
            var skillDescriptionCsv = csv.find((v, i, o) => v.Key === edel.getAttribute('long_desc_key'));
            if (skillDescriptionCsv) {
                // console.log(csv.find((v, i, o) => v.Key === edel.getAttribute('long_desc_key'))[language]);
                skillDescription = csv.find((v, i, o) => v.Key === edel.getAttribute('long_desc_key'))[language];
            }
            var levelRequired = 0;
            var requiredId = 0;
            $(el).find('level_requirements').each((k, lvel) => {
                if (skillLevel === parseInt(lvel.getAttribute('level'))) {
                    levelRequired = parseInt($(lvel).find('requirement')[0].getAttribute('value'));
                    var referencedMainStat = $(lvel).find('requirement')[0].getAttribute('progression_name');
                    $(xml).find('attribute').each((l, att) => {
                        if (att.getAttribute('name') === referencedMainStat) {
                            requiredId = l + 1;
                            return;
                        }
                    });
                }
            });

            if (skillTitle && skillDescription) {
                counter++;
                crd[skillLevel] = {
                    "Description": skillTitle + ' : ' + skillDescription
                };
                crd[skillLevel]['requires'] = {};
                crd[skillLevel]['requires'][requiredId] = levelRequired;
            }
        });

        var skill = new Skill(i + 1, name, description, crd, counter, el.getAttribute('parent')); //this isn't 100% accurate for category - it should be something like "Combat Skills", but right now it's just the xml
        skills.push(skill);
    });

    // console.log(skills);

    for (var i = 0; i < mainStats.length; i++) {
        for (var j = 0; j < skills.length; j++) {
            for (var key in skills[j].crd[1]['requires']) {
                if (parseInt(key) === mainStats[i].id) {
                    mainStats[i].skills.push(skills[j]);
                }
            }
        }
    }

    // console.log(mainStats);
    return mainStats;
}

function Skill(id, title, description, crd, levelMax, category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.currentLevel = 0;
    this.crd = crd; //crd stands for "cost-requirements-description"
    this.levelMax = levelMax;
    this.category = category
}

function MainStat(id, title, description, skills, currentLevelDescription, levelMax) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.currentLevel = 1;
    this.currentLevelDescription = currentLevelDescription;
    this.skills = skills;
    this.levelMax = levelMax;
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

function Player(mainstats) {
    this.level = 0;
    this.pointsUsed = 0;
    this.mainStats = mainstats;
}

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
    return this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === parentId))].skills[this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === parentId))].skills.indexOf(this.mainStats[this.mainStats.indexOf(this.mainStats.find((x) => x.id === parentId))].skills.find((y) => y.id === id))];
}

Player.prototype.addStat = function(id) {
    var stat = this.getMainStat(id);
    if (stat.currentLevel < stat.levelMax) {
        stat.currentLevel++;
        this.pointsUsed = this.pointsUsed + stat.cost(stat.currentLevel);
        return true;
    }
    return false;
}

Player.prototype.removeStat = function(id) {
    var stat = this.getMainStat(id);
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
        this.pointsUsed = this.pointsUsed - stat.cost(stat.currentLevel);
        stat.currentLevel--;
        return true;
    }
    return false;
}

Player.prototype.addSkill = function(parentId, id) {
    var skill = this.getSkill(parentId, id);
    if (skill.currentLevel + 1 > skill.levelMax) {
        return false;
    }
    var playerCanUnlock = this.getMainStat(parentId).currentLevel >= skill.crd[skill.currentLevel + 1].requires[parentId];
    if ((skill.currentLevel < skill.levelMax) && playerCanUnlock) {
        skill.currentLevel++;
        this.pointsUsed++;
        return true;
    }
    return false;
}

Player.prototype.removeSkill = function(parentId, id) {
    var skill = this.getSkill(parentId, id);
    if (skill.currentLevel > 0) {
        skill.currentLevel--;
        this.pointsUsed--;
        return true;
    }
    return false;
}

function encodeSkills(player) {
    var encodedData = "spent" + player.pointsUsed + "_";
    for (var i = 0; i < player.mainStats.length; i++) {
        encodedData += "m" + player.mainStats[i].id + "v" + player.mainStats[i].currentLevel + "_";
        for (var j = 0; j < player.mainStats[i].skills.length; j++) {
            encodedData += "s" + player.mainStats[i].skills[j].id + "-" + "m" + player.mainStats[i].id + "v" + player.mainStats[i].skills[j].currentLevel + "_";
        }
    }
    return window.location.href.replace(window.location.search, "") + '?data=' + encodedData;
}

function decodeSkills(urlData, player) {
    var decodedArray = urlData.split("_");
    player.pointsUsed = parseInt(decodedArray[0].replace("spent", ""));
    for (var i = 1; i < decodedArray.length - 1; i++) {
        var isMainStat = decodedArray[i][0] === "m";
        if (isMainStat) {
            var id = parseInt(decodedArray[i][1]);
            var stat = player.getMainStat(id);
            stat.currentLevel = parseInt(decodedArray[i].split("v")[1]);
        } else {
            //is a skill:
            var id = parseInt(decodedArray[i].split('-')[0].replace('s', ''));
            var parentId = parseInt(decodedArray[i].split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            skill.currentLevel = parseInt(decodedArray[i].split("v")[1]);
        }
    }
    player.currentLevel();
}

function updateCheck(mainId, skillId, currentLevel) {
    var checks = document.getElementsByClassName('check');
    for (var i = 0; i < checks.length; i++) {
        var props = checks[i].getAttribute("data-skillid").split('-');
        var m = null;
        var s = null;
        var level = null;
        if (props[0][0] === 'm') {
            m = parseInt(props[0].replace('m', ''));
            level = parseInt(props[1].replace('l', ''));
        } else {
            s = parseInt(props[0].replace('s', ''));
            m = parseInt(props[1].replace('m', ''));
            level = parseInt(props[2].replace('l', ''));
        }
        if (skillId === null && s === null) {
            if (m === mainId) {
                checks[i].innerHTML = "<span>&#10066;</span>";
            }
            if (m === mainId && level === currentLevel) {
                checks[i].innerHTML = "<span>&#10003;</span>";
                checks[i].parentElement.parentElement.children[0].children[0].children[0].innerText = currentLevel;
            }
        } else {
            if (m === mainId && s === skillId) {
                checks[i].innerHTML = "<span>&#10066;</span>";
            }
            if (m === mainId && s === skillId && level === currentLevel) {
                checks[i].innerHTML = "<span>&#10003;</span>";
                checks[i].parentElement.parentElement.children[0].children[0].innerText = currentLevel;
            }
            if (m === mainId && s === skillId && currentLevel === 0) {
                checks[i].innerHTML = "<span>&#10066;</span>";
                checks[i].parentElement.parentElement.children[0].children[0].innerText = currentLevel;
            }
        }
    }
}

function render(player) {
    var contentElem = document.getElementById("content");

    var playerInfo = document.createElement('div');
    playerInfo.setAttribute('id', 'playerInfo');
    contentElem.appendChild(playerInfo);

    var playerLevel = document.createElement('div');
    playerLevel.setAttribute('id', 'playerLevel');
    playerLevel.innerHTML = "Player Level: <span id=\"playerLevelSpan\">" + player.currentLevel() + "</span> (Assumes starting quests are complete at level 1)";

    var playerPointsSpent = document.createElement('div');
    playerPointsSpent.setAttribute('id', 'playerPointsSpent');
    playerPointsSpent.innerHTML = "Points Spent: <span id=\"playerPointsSpentSpan\">" + player.pointsUsed + "</span>";

    var shareUrl = document.createElement('div');
    shareUrl.setAttribute('id', 'shareUrl');
    shareUrl.innerHTML = "Share Url: <span id=\"shareUrlSpan\">" + encodeSkills(player) + "</span>";

    playerInfo.appendChild(playerLevel);
    playerInfo.appendChild(playerPointsSpent);
    playerInfo.appendChild(shareUrl);

    for (var i = 0; i < player.mainStats.length; i++) {
        var cardGroup = document.createElement('div');
        cardGroup.setAttribute("class", "cardGroup " + player.mainStats[i].title);

        var card = document.createElement('div');
        card.setAttribute("class", "card");

        var cardInner = document.createElement('div');
        cardInner.setAttribute("class", "cardInner");

        var cardTitle = document.createElement('h3');
        cardTitle.innerHTML = player.mainStats[i].title + " - Level: <span>" + player.mainStats[i].currentLevel + "</span> / " + player.mainStats[i].levelMax;

        var cardAddBtn = document.createElement('button');
        cardAddBtn.setAttribute("class", "addBtn");
        cardAddBtn.setAttribute("type", "button");
        cardAddBtn.setAttribute("data-skillid", "m" + player.mainStats[i].id);
        cardAddBtn.innerText = "+";

        var cardRmBtn = document.createElement('button');
        cardRmBtn.setAttribute("class", "removeBtn");
        cardRmBtn.setAttribute("type", "button");
        cardRmBtn.setAttribute("data-skillid", "m" + player.mainStats[i].id);
        cardRmBtn.innerText = "-";

        card.appendChild(cardInner);
        cardInner.appendChild(cardTitle);
        cardInner.appendChild(cardAddBtn);
        cardInner.appendChild(cardRmBtn);

        var cardDescription = document.createElement('p');
        cardDescription.innerText = player.mainStats[i].description;

        cardInner.appendChild(cardDescription);

        for (var property in player.mainStats[i].currentLevelDescription) {
            var isCurrentText = "<span>&#10066;</span>";
            if (parseInt(property) === player.mainStats[i].currentLevel) {
                isCurrentText = "<span>&#10003;</span>";
            }

            var cardLevelItemHolder = document.createElement('div');
            cardLevelItemHolder.setAttribute("class", "mainStatLevelHolder");

            var cardLevelItem = document.createElement('div');
            cardLevelItem.setAttribute("class", "mainStatLevelDescription");
            cardLevelItem.innerText = player.mainStats[i].currentLevelDescription[property].Description;

            var cardLevelItemCheck = document.createElement('div');
            cardLevelItemCheck.setAttribute("class", "check");
            cardLevelItemCheck.setAttribute("data-skillid", "m" + player.mainStats[i].id + "-l" + property);
            cardLevelItemCheck.innerHTML = isCurrentText;

            cardLevelItemHolder.appendChild(cardLevelItem);
            cardLevelItemHolder.appendChild(cardLevelItemCheck);

            card.appendChild(cardLevelItemHolder);
        }

        var subCards = document.createElement('div');

        subCards.setAttribute('class', 'subCards');

        var category = null;
        var subCardGroup = null;
        for (var j = 0; j < player.mainStats[i].skills.length; j++) {
            var subCard = document.createElement('div');
            subCard.setAttribute('class', 'subCard');

            if (category === null) {
                category = player.mainStats[i].skills[j].category.replace(/ /g, '-');
                subCardGroup = document.createElement('div');
                subCardGroup.setAttribute('class', 'subCardGroup ' + category);
                subCards.appendChild(subCardGroup);
                var groupTitle = document.createElement('h4');
                groupTitle.setAttribute('class', 'subCardGroupTitle');
                groupTitle.innerText = player.mainStats[i].skills[j].category;
                subCardGroup.appendChild(groupTitle);
            } else if (category !== player.mainStats[i].skills[j].category.replace(/ /g, '-')) {
                subCards.appendChild(subCardGroup);
                category = player.mainStats[i].skills[j].category.replace(/ /g, '-');
                subCardGroup = document.createElement('div');
                subCardGroup.setAttribute('class', 'subCardGroup ' + category);
                var groupTitle = document.createElement('h4');
                groupTitle.setAttribute('class', 'subCardGroupTitle');
                groupTitle.innerText = player.mainStats[i].skills[j].category;
                subCardGroup.appendChild(groupTitle);
            } else if (j === player.mainStats[i].skills.length - 1) {
                subCards.appendChild(subCardGroup);
            }

            subCardGroup.appendChild(subCard);

            var subCardTitle = document.createElement('h3');
            subCardTitle.innerHTML = player.mainStats[i].skills[j].title + " - Level: <span>" + player.mainStats[i].skills[j].currentLevel + "</span> / " + player.mainStats[i].skills[j].levelMax;

            var subCardAddBtn = document.createElement('button');
            subCardAddBtn.setAttribute("class", "addBtn");
            subCardAddBtn.setAttribute("type", "button");
            subCardAddBtn.setAttribute("data-skillid", "s" + player.mainStats[i].skills[j].id + "-m" + player.mainStats[i].id);
            subCardAddBtn.innerText = "+";

            var subCardRmBtn = document.createElement('button');
            subCardRmBtn.setAttribute("class", "removeBtn");
            subCardRmBtn.setAttribute("type", "button");
            subCardRmBtn.setAttribute("data-skillid", "s" + player.mainStats[i].skills[j].id + "-m" + player.mainStats[i].id);
            subCardRmBtn.innerText = "-";

            subCard.appendChild(subCardTitle);
            subCard.appendChild(subCardAddBtn);
            subCard.appendChild(subCardRmBtn);

            var subCardDescription = document.createElement('p');
            subCardDescription.innerText = player.mainStats[i].skills[j].description;

            subCard.appendChild(subCardDescription);

            for (var property in player.mainStats[i].skills[j].crd) {
                var isCurrentText = "<span>&#10066;</span>";
                if (parseInt(property) === player.mainStats[i].skills[j].currentLevel) {
                    isCurrentText = "<span>&#10003;</span>";
                }

                var subCardLevelItemHolder = document.createElement('div');
                subCardLevelItemHolder.setAttribute("class", "skillLevelHolder");

                var subCardLevelItem = document.createElement('div');
                subCardLevelItem.setAttribute("class", "skillLevelDescription");
                subCardLevelItem.innerText = player.mainStats[i].skills[j].crd[property].Description;

                var subCardLevelItemCheck = document.createElement('div');
                subCardLevelItemCheck.setAttribute("class", "check");
                subCardLevelItemCheck.setAttribute("data-skillid", "s" + player.mainStats[i].skills[j].id + "-m" + player.mainStats[i].id + "-l" + property);
                subCardLevelItemCheck.innerHTML = isCurrentText;

                subCardLevelItemHolder.appendChild(subCardLevelItem);
                subCardLevelItemHolder.appendChild(subCardLevelItemCheck);

                subCard.appendChild(subCardLevelItemHolder);
            }
        }

        cardGroup.appendChild(card);
        cardGroup.appendChild(subCards);
        contentElem.appendChild(cardGroup);
    }
}

function bindEvents(player) {
    var addBtns = document.getElementsByClassName('addBtn');
    for (var i = 0; i < addBtns.length; i++) {
        addBtns[i].addEventListener('click', (event) => {
            var targetElement = event.target || event.srcElement;
            var dataskill = targetElement.getAttribute("data-skillid");
            var isMainStat = dataskill[0] === "m";
            var id = null;
            if (isMainStat) {
                id = parseInt(dataskill.replace('m', ''));
                var statUpdated = player.addStat(id);
                if (statUpdated) {
                    var stat = player.getMainStat(id);
                    updateCheck(stat.id, null, stat.currentLevel);
                }
            } else {
                id = parseInt(dataskill.replace('s', '').split('-')[0]);
                var parentId = parseInt(dataskill.split('-')[1][1]);
                var skillUpdated = player.addSkill(parentId, id)
                if (skillUpdated) {
                    var skill = player.getSkill(parentId, id);
                    updateCheck(parentId, skill.id, skill.currentLevel);
                }
            }
            document.getElementById('playerLevelSpan').innerText = player.currentLevel();
            document.getElementById('playerPointsSpentSpan').innerText = player.pointsUsed;
            document.getElementById('shareUrlSpan').innerText = encodeSkills(player);
        });
    }

    var removeBtns = document.getElementsByClassName('removeBtn');
    for (var i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', (event) => {
            var targetElement = event.target || event.srcElement;
            var dataskill = targetElement.getAttribute("data-skillid");
            var isMainStat = dataskill[0] === "m";
            var id = null;
            if (isMainStat) {
                id = parseInt(dataskill.replace('m', ''));
                var statUpdated = player.removeStat(id);
                if (statUpdated) {
                    var stat = player.getMainStat(id);
                    updateCheck(stat.id, null, stat.currentLevel);
                }
            } else {
                id = parseInt(dataskill.replace('s', '').split('-')[0]);
                var parentId = parseInt(dataskill.split('-')[1][1]);
                var skillUpdated = player.removeSkill(parentId, id);
                if (skillUpdated) {
                    var skill = player.getSkill(parentId, id);
                    updateCheck(parentId, skill.id, skill.currentLevel);
                }
            }
            document.getElementById('playerLevelSpan').innerText = player.currentLevel();
            document.getElementById('playerPointsSpentSpan').innerText = player.pointsUsed;
            document.getElementById('shareUrlSpan').innerText = encodeSkills(player);
        });
    }
}