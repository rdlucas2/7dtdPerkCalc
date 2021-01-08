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

var strengthSkills = [
    new Skill(
        1,
        "Boomstick",
        "Specialize with shotguns and send your enemies to meet their maker. Do more damage, blow limbs off, shoot and reload faster.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Shotgun Hobo : Maybe your aim isn't so good or you just like doing a lot of damage up close and personal. Either way a hobo with a shotgun is not to be messed with. Craft quality 2 poor Shotguns, deal 10% more damage, 10% faster fire rate, and 10% faster reload. Stun enemies for 6 seconds.\nIncreases chance to dismember by 5%.\nUnlocks double barrel shotgun crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Shotgun Nomad : Roaming the wastelands as a nomad have improved your abilities with shotguns. Craft quality 3 fair shotguns, deal 20% more damage, 20% faster fire rate, and 15% faster reload.\nIncreases chance to dismember by 10%."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Shotgun Pro : If shotgun meets were still a thing, you'd be hitting those clay ducks and be considered a shotgun pro. Craft quality 4 good shotguns, deal 30% more damage, 30% faster fire rate, and 20% faster reload. Stun enemies for 8 seconds."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Shotgun Master : You are now very deadly with a shotgun and considered a shotgun master and master of the shotgun. Craft quality 5 great shotguns, deal 40% more damage, 40% faster fire rate, and 25% faster reload."
            },
            5: {
                "requires": { 2: 10 },
                "Description": "Boomstick : You've ascended to the legendary status of Shotgun Messiah, as you are the last thing they see before meeting their maker. Deal 50% more damage, 50% faster fire rate, and a 30% faster reload.\nLegs shots cripple opponents."
            }
        },
        5
    ),
    new Skill(
        2,
        "Pummel Pete",
        "Specialize in knocking your foes senseless with clubs and bats.", {
            1: {
                "requires": { 2: 1 },
                "Description": "RoughNeck : You might not pack a punch but as a roughneck you can swing a club! Craft quality 2 poor clubs, deal 10% more damage and attacks do 40% more damage to stunned enemies. Power attacks have a 60% chance to knock foes back down.\nUnlocks baseball bat crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Thug : You are making a name for yourself as a dangerous thug. Craft quality 3 fair clubs, deal 20% more damage, attacks do 80% more damage to stunned enemies and power attacks have a 70% chance to knock foes back down."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Big Leagues : You hit hard enough to be in the big leagues now. Craft quality 4 good clubs, deal 30% more damage, attacks do 120% more damage to stunned enemies and power attacks have a 80% chance to knock foes back down.\nLanding 5 successive hits in a short time causes the last blow to do 100% extra damage."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Stay Down : When you said stay down you meant it. Craft quality 5 great clubs, deal 40% more damage, attacks do 160% more damage to stunned enemies and power attacks have a 90% chance to knock foes back down. 4 successive hits in a short time causes the last blow to do 100% extra damage."
            },
            5: {
                "requires": { 2: 10 },
                "Description": "Pummel Pete : Pummel Pete once took on 50 zombies with just a club and he would be proud of you. Deal 50% more damage, attacks do 200% more damage to stunned enemies and power attacks have a 100% chance to knock foes back down. 3 successive hits in a short time causes the last blow to do 100% extra damage."
            }
        },
        5
    ),
    new Skill(
        3,
        "Skull Crusher",
        "Specialize in destroying enemies and structures with sledgehammers.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Bruiser : You are a bruiser and with a little luck can sometimes knock down geriatric zombies. Craft quality 2 poor sledgehammers and deal 10% more damage. 15% chance to knock down enemies with power attacks.\nUnlocks iron sledgehammer crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Mauler : You are now a mauler but don't get too cocky yet. Craft quality 3 fair sledgehammers and deal 20% more damage. 30% chance to knock down enemies with power attacks."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Smasher : You are a certified smasher of things that get in your way. Craft quality 4 good sledgehammers and deal 30% more damage. Power attacks have a 45% chance to knock down enemies and a 20% chance to knock down nearby foes."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Bone Breaker : You have nearly perfected the craft of smashing stuff and breaking bones. Craft quality 5 great sledgehammers and deal 40% more damage. Power attacks have a 60% chance to knock down enemies and a 35% chance to knock down nearby foes."
            },
            5: {
                "requires": { 2: 10 },
                "Description": "Skull Crusher : Skull Crusher. If anyone pisses you off you have the means to crush their skull. Deal 50% more damage. Power attacks have a 75% chance to knock down enemies and a 50% chance to knock down nearby foes."
            }
        },
        5
    ),
    new Skill(
        4,
        "Sexual Tyrannosaurus",
        "Specialize in unleashing a relentless assault of blows guaranteed to leave your prey slack-jawed at your unyielding stamina.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Bench Warmer : You have graduated to bench warmer. Reduce melee and tool stamina usage by 8% and power attacks by 15%."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Athlete : You are now a bonafide athlete and getting winded doing nothing is a thing of the past. Reduce melee and tool stamina usage by 15% and power attacks by 30%.\nKilling blows grant 10 stamina."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Warrior : Nobody will disrespect a warrior. Reduce melee and tool stamina usage by 20% and power attacks by 40%.\nKilling blows grant 20 stamina."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Cage Gladiator : You are now a cage gladiator and have risen to the highest athletic prowess possible. Reduce melee and tool stamina usage by 25% and power attacks by 50%.\nKilling blows grant 30 stamina."
            }
        },
        4
    ),
    new Skill(
        5,
        "Heavy Armor",
        "Specialize in shielding yourself with iron and steel, becoming an unstoppable behemoth on the battlefield.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Tin Man : You might move a little awkward in heavy armor but you're alive to talk about it. Craft quality 2 poor heavy armor, reduce heavy armor movement and stamina penalty by 5%. Improve durability by 50%.\nUnlocks iron armor crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Heavy Metal : You can take a hit! Craft quality 3 fair heavy armor, reduce heavy armor movement and stamina penalty by 10%. Improve durability by 100%."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Iron Man : Now we're talking about some serious protection. Craft quality 4 good armor, reduce heavy armor movement and stamina penalty by 17%. Improve durability by 150%."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Get Tanked : You are now a walking tank. Craft quality 5 great heavy armor, reduce heavy armor movement and stamina penalty by 25%. Improve durability by 200%."
            }
        },
        4
    ),
    new Skill(
        6,
        "Pack Mule",
        "You're a pack mule and can carry more items in your inventory without suffering movement penalties.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Disorganized : Who has time to organize their stuff perfectly? Carry three more items without being encumbered."
            },
            2: {
                "requires": { 2: 2 },
                "Description": "Bag Lady : You know it's in there somewhere. Carry an additional three more items without being encumbered."
            },
            3: {
                "requires": { 2: 3 },
                "Description": "Neat and Tidy : You know exactly where everything is. Carry four additional items without being encumbered."
            },
            4: {
                "requires": { 2: 4 },
                "Description": "Shipshape : You just passed inspection, private. Carry four more items without being encumbered."
            },
            5: {
                "requires": { 2: 5 },
                "Description": "Pack Mule : Now you are just showing off, you are either part mule or a strongman. Carry four more items without being encumbered."
            }
        },
        5
    ),
    new Skill(
        7,
        "Master Chef",
        "Create more filling meals with advanced benefits and learn to cook faster.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Bachelor : Cooking is not your thing but you know some basics. Unlocks basic recipes such as bacon and eggs, boiled and grilled meats, baked potatoes, cornbread, teas and coffee. Cook 10% faster."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Grandma : Just like grandma used to make, tasty hearty meals that fill you up for days. Craft steak and potatoes, meat stew, vegetable stew, blueberry pie and several pumpkin dishes. Cook 20% faster."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Short Order Cook : Learn how to make nutritious pot luck meals from canned goods. Craft Sham Chowder, Hobo Stew, Chili dogs and Fish Tacos. Wash them down with Yucca Juice Smoothies and Beer. Cook 30% faster."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Army Cook : Cook for an army by making Gumbo Stew, Shepards Pie, Spaghetti and Tuna Gravy on Toast. Cook 40% faster. Use 20% less of a recipe's main ingredients."
            },
            5: {
                "requires": { 2: 10 },
                "Description": "Master Chef : Grandpa's ass kicking recipes. Learn grandpa's secret recipes that boost stats and attributes! Cook 50% faster."
            }
        },
        5
    ),
    new Skill(
        8,
        "Miner 69'er",
        "Maximize your mining efforts by increasing tool damage to bring down rocks and trees faster.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Tool Nipper : Everyone has to start somewhere. Craft quality 2 poor tools, increase tool damage by 10% and block damage by 30% with any axe, pick, chainsaw or auger. Unlocks all iron tools like pickaxes."
            },
            2: {
                "requires": { 2: 2 },
                "Description": "Johnny Newcome : You are still a little green but you aren't fetching the muckmen blackstrap any more. Craft quality 3 fair tools, increase tool damage by 20% and block damage by 60% with any axe, pick, chainsaw or auger."
            },
            3: {
                "requires": { 2: 3 },
                "Description": "Muckman : You are now a professional miner or what they called muckmen back in the day. Craft quality 4 good tools, increase tool damage by 30% and block damage by 90% with any axe, pick, chainsaw or auger."
            },
            4: {
                "requires": { 2: 5 },
                "Description": "Boulder Buster : You can crack rock with the best of them now. Craft quality 5 great tools, increase tool damage by 40% and block damage by 120% with any axe, pick, chainsaw or auger."
            },
            5: {
                "requires": { 2: 7 },
                "Description": "Miner 69'er : You are the legendary Miner 69'r and can find the juicy center of any rock faster than a horny bullfrog. Increase damage by 50% and block damage by 150% with any axe, pick, chainsaw or auger."
            }
        },
        5
    ),
    new Skill(
        9,
        "Mother Lode",
        "Harvest more resources and bring home the mother lode.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Paydirt : You've found your first small vein and are envy of all the Johnny Newcomes.\nHarvest 20% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
            },
            2: {
                "requires": { 2: 2 },
                "Description": "Main Vein : Finding more ore is starting to become second nature to you. Harvest 40% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
            },
            3: {
                "requires": { 2: 3 },
                "Description": "Struck Gold : You've hit your stride and can probably make a decent living at this. Harvest 60% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
            },
            4: {
                "requires": { 2: 5 },
                "Description": "Gold Mine : You are going to need an Irish baby buggy to carry all this ore. Harvest 80% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
            },
            5: {
                "requires": { 2: 7 },
                "Description": "Mother Lode : Mining is second nature to you and you find the mother lode everywhere you go. Harvest 100% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
            }
        },
        5
    )
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
    new MainStat(
        2,
        "Strength",
        "Strength is the measure of your muscular might. Increasing Strength raises the headshot bonus and dismemberment chance with shotguns, clubs, sledgehammers and tools.",
        strengthSkills, {
            1: {
                "PointsToBuy": 1,
                "Description": "Weakling : Everyone wants to be a bodybuilder but nobody wants to lift those heavy ass weights. Deal 200% head shot damage and have a 5% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            2: {
                "PointsToBuy": 1,
                "Description": "Scrawny : You might be scrawny but you have a fire inside to get big and strong. Deal 210% head shot damage and have a 10% chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            3: {
                "PointsToBuy": 1,
                "Description": "Milk Drinker : What is a milk drinker like you doing in the zombie apocalypse? Deal 220% head shot damage and have a 15% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            4: {
                "PointsToBuy": 1,
                "Description": "Softie : Your spare tire might keep you from starving but isn't helping you swing a sledgehammer. Deal 230% head shot damage and have a 20% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            5: {
                "PointsToBuy": 1,
                "Description": "Fit : You are fit and able to deal 240% head shot damage and have a 25% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            6: {
                "PointsToBuy": 2,
                "Description": "Strong : You are very strong and all the normies at the gym are envious. Deal 250% head shot damage and have a 30% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            7: {
                "PointsToBuy": 2,
                "Description": "Body Builder : Pumping clubs and sledgehammers has gave you some gains bro. Deal 260% head shot damage and have a 35% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            8: {
                "PointsToBuy": 2,
                "Description": "Power Lifter : Your massive strength is legendary. Deal 270% head shot damage and have a 40% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            9: {
                "PointsToBuy": 3,
                "Description": "Beast Mode : Size, strength and power are all champion level now. Deal 285% head shot damage and have a 45% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            },
            10: {
                "PointsToBuy": 3,
                "Description": "Olympic Champion : You could be an Olympic champion if the apocalypse hadn't crushed that dream. Now you can just crush zombies. Deal 300% head shot damage and have a 50% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69'er."
            }
        }
    )
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
                checks[i].innerHTML = "&#10066;";
            }
            if (m === mainId && level === currentLevel) {
                checks[i].innerHTML = "&#10003;";
                checks[i].parentElement.parentElement.children[0].children[0].innerText = currentLevel;
            }
        } else {
            if (m === mainId && s === skillId) {
                checks[i].innerHTML = "&#10066;";
            }
            if (m === mainId && s === skillId && level === currentLevel) {
                checks[i].innerHTML = "&#10003;";
                checks[i].parentElement.parentElement.children[0].children[0].innerText = currentLevel;
            }
        }
    }
}

player = new Player(mainStats);

console.log(encodeSkills(player));

if (urlData) {
    var decodedData = decodeSkills(urlData);
}

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
    //TODO: create cards for stats and their child skills, and add the event listener.
    console.log(player.mainStats[i]);
    var card = document.createElement('div');
    card.setAttribute("class", "card");

    var cardTitle = document.createElement('h3');
    cardTitle.innerHTML = player.mainStats[i].title + " - Level: <span>" + player.mainStats[i].currentLevel + "</span>";

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

    card.appendChild(cardTitle);
    card.appendChild(cardAddBtn);
    card.appendChild(cardRmBtn);

    var cardDescription = document.createElement('p');
    cardDescription.innerText = player.mainStats[i].description;

    card.appendChild(cardDescription);

    for (var property in player.mainStats[i].currentLevelDescription) {
        var isCurrentText = "&#10066;";
        if (parseInt(property) === player.mainStats[i].currentLevel) {
            isCurrentText = "&#10003;";
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

    contentElem.appendChild(card);

    var subCards = document.createElement('div');
    subCards.setAttribute('class', 'subCards');
    contentElem.appendChild(subCards);

    for (var j = 0; j < player.mainStats[i].skills.length; j++) {
        console.log(player.mainStats[i].skills[j]);
        var subCard = document.createElement('div');
        subCard.setAttribute('class', 'subCard');

        var subCardTitle = document.createElement('h3');
        subCardTitle.innerHTML = player.mainStats[i].skills[j].title + " - Level: <span>" + player.mainStats[i].skills[j].currentLevel + "</span>";

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
            var isCurrentText = "&#10066;";
            if (parseInt(property) === player.mainStats[i].skills[j].currentLevel) {
                isCurrentText = "&#10003;";
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

        subCards.appendChild(subCard);
    }
}

//TODO: on level change, update what is checked on the UI
addBtns = document.getElementsByClassName('addBtn');
for (var i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', (event) => {
        var targetElement = event.target || event.srcElement;
        var dataskill = targetElement.getAttribute("data-skillid");
        var isMainStat = dataskill[0] === "m";
        var id = null;
        if (isMainStat) {
            id = parseInt(dataskill.replace('m', ''));
            var stat = player.getMainStat(id);
            if (stat.currentLevel < stat.levelMax) {
                stat.currentLevel++;
                player.pointsUsed = player.pointsUsed + stat.cost(player.currentLevel());
                updateCheck(stat.id, null, stat.currentLevel);
            }
            console.log(stat);
        } else {
            id = parseInt(dataskill.replace('s', '').split('-')[0]);
            //is a skill:
            var parentId = parseInt(dataskill.split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            //if a player doesn't have the required level in the main stat, don't let them add it
            var playerCanUnlock = player.getMainStat(parentId).currentLevel >= skill.crd[skill.currentLevel + 1].requires[parentId];
            if ((skill.currentLevel < skill.levelMax) && playerCanUnlock) {
                skill.currentLevel++;
                player.pointsUsed++;
                updateCheck(parentId, skill.id, skill.currentLevel);
            }
            console.log(skill);
        }
        document.getElementById('playerLevelSpan').innerText = player.currentLevel();
        document.getElementById('playerPointsSpentSpan').innerText = player.pointsUsed;
        document.getElementById('shareUrlSpan').innerText = encodeSkills(player);
    });
}

removeBtns = document.getElementsByClassName('removeBtn');
for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', (event) => {
        var targetElement = event.target || event.srcElement;
        var dataskill = targetElement.getAttribute("data-skillid");
        var isMainStat = dataskill[0] === "m";
        var id = null;
        if (isMainStat) {
            id = parseInt(dataskill.replace('m', ''));
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
                updateCheck(stat.id, null, stat.currentLevel);
            }
            console.log(stat);
        } else {
            //is a skill:
            id = parseInt(dataskill.replace('s', '').split('-')[0]);
            var parentId = parseInt(dataskill.split('-')[1][1]);
            var skill = player.getSkill(parentId, id);
            if (skill.currentLevel > 0) {
                skill.currentLevel--;
                player.pointsUsed--;
                updateCheck(parentId, skill.id, skill.currentLevel);
            }
            console.log(skill);
        }
        document.getElementById('playerLevelSpan').innerText = player.currentLevel();
        document.getElementById('playerPointsSpentSpan').innerText = player.pointsUsed;
        document.getElementById('shareUrlSpan').innerText = encodeSkills(player);
    });
}