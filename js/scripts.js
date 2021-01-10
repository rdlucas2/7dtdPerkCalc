function Skill(id, title, description, crd, levelMax, category) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.currentLevel = 0;
    this.crd = crd; //crd stands for "cost-requirements-description"
    this.levelMax = levelMax;
    this.category = category
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
                "Description": "Marksman : You are now a marksman and can hold your own. Craft quality 4 good rifles. Deal 30% more damage , aim 32% faster, reload 20% faster and use 10% less stamina aiming with rifles. Kill Streak: Successive kills increase damage bonus by 10%, 20% to a maximum of 30%."
            },
            4: {
                "requires": { 1: 7 },
                "Description": "Sharpshooter : You are now a sharpshooter. Craft quality 5 great rifles. Deal 40% more damage, aim 45% faster, reload 25% faster, and use 20% less stamina aiming with rifles. Kill Streak: Successive kills increase damage bonus by 20%, 30% to a maximum of 40%."
            },
            5: {
                "requires": { 1: 10 },
                "Description": "Dead Eye : Dead Eye: Through all the hard training and countless shooting, you are now a dead eye sniper. Deal 50% more damage, aim 60% faster, reload 30% faster, and use 30% less stamina aiming with rifles. Kill Streak: Successive kills increase damage bonus by 30%, 40% up to a maximum of 50%."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        2,
        "Demolitions Expert",
        "Specialize in explosive weapons to stun, cripple and dismember your foes.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Grenadier Initiate : You are now a grenadier initiate, be careful with those explosives. Increase damage 10%, reload speed 15%, aim 10% faster, 50% chance to stun enemies and a 5% greater chance to dismember. Craft pipe bombs, pressure plate and cooking pot mines."
            },
            2: {
                "requires": { 1: 3 },
                "Description": "I'm TNT, I'm dynamite. : Increase damage by 20%, reload speed 20%, aim 20% faster, 100% chance to stun enemies, and a 10% greater chance to dismember. Craft dynamite and hubcap land mines."
            },
            3: {
                "requires": { 1: 5 },
                "Description": "Explosives Handler : You are now an explosives handler. Increase damage 30%, increase reload speed by 25%, aim 30% faster, have a 33% chance to cripple enemies and a 20% greater chance to dismember. Craft grenades and more efficient stacks of gunpowder."
            },
            4: {
                "requires": { 1: 7 },
                "Description": "Rocket Man : You are now a Rocket Man. Increase damage 40%, reload speed by 30%, aim 40% faster, have a 66% chance to cripple enemies and a 30% greater chance to dismember. Craft high explosive rockets and anti-personnel fragmentation rockets."
            },
            5: {
                "requires": { 1: 10 },
                "Description": "Demolitions Expert : Demolitions expert. You make things go boom in a big way. Increase damage 50%, reload speed by 35%, aim 50% faster and a 45% greater chance to dismember. Stun lasts longer on enemies. Craft timed charges, contact grenades and air filter land mines."
            },
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        3,
        "Javelin Master",
        "Learn to inflict more damage and throw spears further and with more accuracy.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Sharp Sticks : Sticks and stones can't break my bones but if combined make a nice spear. Craft quality 2 poor spears. Spears do 10% more damage and have 10% more range when thrown. Unlocks iron spear crafting."
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
        5,
        "Combat Perks"
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
        3,
        "General Perception Perks"
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
        3,
        "General Perception Perks"
    ),
    new Skill(
        6,
        "Animal Tracker",
        "Learn to detect and track animals within 100m and never go hungry.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Trail Finder : Crouch down and use your keen eyesight to find the tracks of small animals like rabbits, snakes or chickens. Tracked animals are marked on your compass and map."
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
        3,
        "General Perception Perks"
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
        4,
        "General Perception Perks"
    ),
    new Skill(
        8,
        "Lucky Looter",
        "Specialize in tracking down the motherlode and maybe getting a little extra for your trouble. You find better loot with every perk level.", {
            1: {
                "requires": { 1: 1 },
                "Description": "Slim Chance : You've got a slim chance to find better loot. Adds 5% to loot bonus for containers that you open personally. Looting is 10% faster."
            },
            2: {
                "requires": { 1: 2 },
                "Description": "Potluck : Your luck is improving and no matter where you look you seem to find something good. Adds 10% to loot bonus. Looting is 20% faster."
            },
            3: {
                "requires": { 1: 3 },
                "Description": "Good Fortune : Adds 15% to loot bonus. Looting is 40% faster."
            },
            4: {
                "requires": { 1: 5 },
                "Description": "Blessed : You just seem to be blessed with finding great loot everywhere you look. Adds 20% to loot bonus. Looting is 60% faster."
            },
            5: {
                "requires": { 1: 7 },
                "Description": "Lucky Looter : The Lucky Looter. You are on a roll and the dice are loaded. Adds 25% to loot bonus. Looting is 80% faster."
            }
        },
        5,
        "Scavenging Perks"
    ),
    new Skill(
        9,
        "Treasure Hunter",
        "", {
            1: {
                "requires": { 1: 1 },
                "Description": "Plunderer : For every 7 blocks dug up the treasure search radius is reduced by 1m. Without the perk you have to dig up 10 blocks each. Find 10% more items in buried treasure."
            },
            2: {
                "requires": { 1: 4 },
                "Description": "Marauder : For every 5 blocks dug up the treasure search radius is reduced by 1m. Find 20% more items in buried treasure."
            },
            3: {
                "requires": { 1: 7 },
                "Description": "Treasure Hunter : For every 3 blocks dug up the treasure search radius is reduced by 1m. Find 30% more items in buried treasure."
            }
        },
        3,
        "Scavenging Perks"
    ),
    new Skill(
        10,
        "Salvage Operations",
        "", {
            1: {
                "requires": { 1: 1 },
                "Description": "Junk Collector : Who knows what useful items can be found when tearing things apart? Craft quality 2 poor salvage tools. Deal 10% more damage, harvest 20% faster and gains 20% more resources with a wrench, ratchet or impact driver. Unlocks wrench crafting."
            },
            2: {
                "requires": { 1: 2 },
                "Description": "Scavenger : Most people call you scavver but at least it's an honest living. Craft quality 3 fair salvage tools. Deal 20% more damage, harvest 40% faster and gains 40% more resources with a wrench, ratchet or impact driver."
            },
            3: {
                "requires": { 1: 3 },
                "Description": "Salvager : You seem to have a knack for salvaging more useful parts than the average scrapper. Craft quality 4 good salvage tools. Deal 30% more damage, harvest 60% faster and gains 60% more resources with a wrench, ratchet or impact driver."
            },
            4: {
                "requires": { 1: 5 },
                "Description": "Parts Collector : Your ability to gather salvaged parts is remarkable. Craft quality 5 great salvage tools. Deal 40% more damage, harvest 80% faster and gains 80% more resources with a wrench, ratchet or impact driver."
            },
            5: {
                "requires": { 1: 7 },
                "Description": "Master Scavenger : You are king of the junk dealers and envy of the grease monkeys of the apocalypse. Deal 50% more damage, harvest 100% faster and gains 100% more resources with a wrench, ratchet or impact driver."
            }
        },
        5,
        "Scavenging Perks"
    )
];

var strengthSkills = [
    new Skill(
        1,
        "Boomstick",
        "Specialize with shotguns and send your enemies to meet their maker. Do more damage, blow limbs off, shoot and reload faster.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Shotgun Hobo : Maybe your aim isn't so good or you just like doing a lot of damage up close and personal. Either way a hobo with a shotgun is not to be messed with. Craft quality 2 poor Shotguns, deal 10% more damage, 10% faster fire rate, and 10% faster reload. Stun enemies for 6 seconds. Increases chance to dismember by 5%. Unlocks double barrel shotgun crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Shotgun Nomad : Roaming the wastelands as a nomad have improved your abilities with shotguns. Craft quality 3 fair shotguns, deal 20% more damage, 20% faster fire rate, and 15% faster reload. Increases chance to dismember by 10%."
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
                "Description": "Boomstick : You've ascended to the legendary status of Shotgun Messiah, as you are the last thing they see before meeting their maker. Deal 50% more damage, 50% faster fire rate, and a 30% faster reload. Legs shots cripple opponents."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        2,
        "Pummel Pete",
        "Specialize in knocking your foes senseless with clubs and bats.", {
            1: {
                "requires": { 2: 1 },
                "Description": "RoughNeck : You might not pack a punch but as a roughneck you can swing a club! Craft quality 2 poor clubs, deal 10% more damage and attacks do 40% more damage to stunned enemies. Power attacks have a 60% chance to knock foes back down. Unlocks baseball bat crafting."
            },
            2: {
                "requires": { 2: 3 },
                "Description": "Thug : You are making a name for yourself as a dangerous thug. Craft quality 3 fair clubs, deal 20% more damage, attacks do 80% more damage to stunned enemies and power attacks have a 70% chance to knock foes back down."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Big Leagues : You hit hard enough to be in the big leagues now. Craft quality 4 good clubs, deal 30% more damage, attacks do 120% more damage to stunned enemies and power attacks have a 80% chance to knock foes back down. Landing 5 successive hits in a short time causes the last blow to do 100% extra damage."
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
        5,
        "Combat Perks"
    ),
    new Skill(
        3,
        "Skull Crusher",
        "Specialize in destroying enemies and structures with sledgehammers.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Bruiser : You are a bruiser and with a little luck can sometimes knock down geriatric zombies. Craft quality 2 poor sledgehammers and deal 10% more damage. 15% chance to knock down enemies with power attacks. Unlocks iron sledgehammer crafting."
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
        5,
        "Combat Perks"
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
                "Description": "Athlete : You are now a bonafide athlete and getting winded doing nothing is a thing of the past. Reduce melee and tool stamina usage by 15% and power attacks by 30%. Killing blows grant 10 stamina."
            },
            3: {
                "requires": { 2: 5 },
                "Description": "Warrior : Nobody will disrespect a warrior. Reduce melee and tool stamina usage by 20% and power attacks by 40%. Killing blows grant 20 stamina."
            },
            4: {
                "requires": { 2: 7 },
                "Description": "Cage Gladiator : You are now a cage gladiator and have risen to the highest athletic prowess possible. Reduce melee and tool stamina usage by 25% and power attacks by 50%. Killing blows grant 30 stamina."
            }
        },
        4,
        "General Strength Perks"
    ),
    new Skill(
        5,
        "Heavy Armor",
        "Specialize in shielding yourself with iron and steel, becoming an unstoppable behemoth on the battlefield.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Tin Man : You might move a little awkward in heavy armor but you're alive to talk about it. Craft quality 2 poor heavy armor, reduce heavy armor movement and stamina penalty by 5%. Improve durability by 50%. Unlocks iron armor crafting."
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
        4,
        "General Strength Perks"
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
        5,
        "General Strength Perks"
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
        5,
        "General Strength Perks"
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
        5,
        "Construction Perks"
    ),
    new Skill(
        9,
        "Mother Lode",
        "Harvest more resources and bring home the mother lode.", {
            1: {
                "requires": { 2: 1 },
                "Description": "Paydirt : You've found your first small vein and are envy of all the Johnny Newcomes. Harvest 20% more from ore, stone, terrain blocks and trees with any axe, pick, chainsaw or auger."
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
        5,
        "Construction Perks"
    )
];

var fortitudeSkills = [
    new Skill(
        1,
        "The Brawler",
        "Learn martial arts and use your fists to stun, knock down, disarm and ragdoll your opponent.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Bully : Tired of being bullied by the undead? Zombies can't bite if you knock their damn teeth out! Craft quality 2 poor knuckled weapons and deal 10% more damage with fists. Punches to the head negate infection ability. Unlocks iron knuckles crafting."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Scrapper : You've been in a few fights and can hold your own. Craft quality 3 fair knuckle weapons, deal 20% more damage with fists and have a 30% chance to stagger opponents with power attacks."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Slugger : All the fighting and scrapping has added up and you are a real slugger now. Craft quality 4 good knuckle weapons and deal 30% more damage with fists. Power attacks to the head have a 20% chance to knock down your opponent."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Professional Boxer : You are now good enough to compete in professional boxing but smashing zombies faces in will have to do. Craft quality 5 great knuckle weapons and deal 40% more damage with fists. Power attacks to the head have a 30% chance to knock down your opponent."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "Mixed Martial Artist : You are now a complete mixed martial artist and a registered lethal weapon. Deal 50% more damage and have a higher chance to explode heads with punches."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        2,
        "Machine Gunner",
        "Become a commando using assault rifles to slay your foes.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Grunt : Spray and Pray is your thing. Craft quality 2 poor machine guns. Deal 10% more damage, 5% faster fire rate and 10% faster reload. Unlocks Ak47 Crafting."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Guerrilla : You are no commando, but you do what it takes to get the job done. Craft quality 3 fair machine guns, deal 20% more damage, 10% faster fire rate and 15% faster reload."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Soldier : All the combat has sharpened your skills and you are now a soldier. Craft quality 4 good machine guns, deal 30% more damage, 15% faster fire rate and reload 20% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 2 stamina."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Special Forces : Your skill now matches the special forces. Craft quality 5 great machine guns, deal 40% more damage, 20% faster fire rate and reload 25% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 4 stamina."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "Machine Gunner : You are now the ultimate machine gunner. Deal 50% more damage, 25% faster fire rate and reload 30% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 6 stamina."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        3,
        "The Huntsman",
        "Specialize in hunting your prey and harvesting more meat, bone and leather.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Pelter : You are on the path of the huntsman. Harvest 20% more resources from animals using any bladed tool or weapon."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Poacher : You are becoming adept at skinning and harvesting meat. Harvest 40% more resources from animals using any bladed tool or weapon."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Hunter : Living in the wild is becoming second nature to you. Harvest 60% more resources from animals using any bladed tool or weapon."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Butcher : You know exactly how to get the perfect cuts. Harvest 80% more resources from animals using any bladed tool or weapon."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "The Huntsman : You are a true mountain man and let nothing go to waste. Harvest 100% more resources from animals using any bladed tool or weapon."
            }
        },
        5,
        "Survival Perks"
    ),
    new Skill(
        4,
        "Well Insulated",
        "Specialize in using a combination of clothing and natural resilience to weather even the harshest of environments.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Mild Weather Tolerant : You like mild weather, but can handle a bit of temperature fluctuation. Gain 10 insulation against heat and cold, and lose 15% less food and water when cold or overheating."
            },
            2: {
                "requires": { 3: 4 },
                "Description": "Intense Weather Resistant : You are resistant to some pretty intense weather and lose 30% less food and water when cold or overheating. Grants 20 insulation against both heat and cold."
            },
            3: {
                "requires": { 3: 7 },
                "Description": "Extremely Weather Hardened : You can now handle severe weather and typically could care less what the weather conditions are. You will never have the more severe stages of temperature status effects."
            }
        },
        3,
        "Survival Perks"
    ),
    new Skill(
        5,
        "Living off the Land",
        "Specialize in harvesting more crops using your hands or a tool.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Gardener : Harvest 2 items from wild or planted crops. Craft seeds for flowers and decorative plants like goldenrod, chrysanthemum, aloe, and yucca. Farm plots cost 30% less to craft."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Farmer : You can craft seeds for berries and vegetables. Farm plots cost 50% less to craft."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Industrial Farmer : Harvest 3 items from wild or planted crops."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "MISISNG"
            },
            5: {
                "requires": { 3: 10 },
                "Description": "MISISNG"
            }
        },
        5,
        "Survival Perks"
    ),
    new Skill(
        6,
        "Pain Tolerance",
        "Specialize in shrugging off blows, fighting through pain and staying in the fight when others would be down for the count.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Tough : You like to think you are tough because you don't have a glass jaw anymore. Reduce HP loss by 5%. 20% less chance to get stunned"
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Rugged : Broken bones and cuts are life when you are rugged. Reduce HP loss by 10%. 40% less chance to get stunned."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Durable : After all the beat downs you endured, you are now very durable. Reduce HP loss by 15% and have a 60% less chance to get stunned."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Masochist : It's going to take a lot more than that to keep you down. Reduce HP loss by 20% and have a 80% less chance to get stunned."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "Iron Chin : You seem to thrive on pain and now possess an iron chin. Reduce HP loss by 25% and have no chance to get stunned."
            }
        },
        5,
        "Survival Perks"
    ),
    new Skill(
        7,
        "Healing Factor",
        "Specialize in boosting your natural healing rates as long as you're not starving. Self-healing will not work when you are out of food or water.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Fast Metabolism : You must have a fast metabolism. Gain 1 health every 90 seconds with natural healing. Critical injuries heal 20% faster."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "MISSING : You seem to be a quick healer. Gain 1 health every 45 seconds with natural healing. Critical injuries heal 40% faster."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Animal : What are you part animal? Gain 1 health every 20 seconds with natural healing. Critical injuries heal 60% faster."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Regeneration : You seem to just regenerate health super fast. Gain 1 health every 10 seconds with natural healing. Critical injuries heal 80% faster."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "Mutant Genes : You must have mutant genes from all the radiation. Gain 1 health every 6 seconds with natural healing. Critical injuries heal twice as fast."
            }
        },
        5,
        "Recovery Perks"
    ),
    new Skill(
        8,
        "Iron Gut",
        "Specialize in gastrointestinal health to use less calories and gain more benefits from food. Use less oxygen while diving.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Leaky Gut : Your stomach health isn't perfect but it's better than the average wastelander's. Reduce food and water loss from physical exertion by 5%. Hold your breath for 84 seconds. Chance of Dysentery is reduced by 1%. Buffs from consumables last 10% longer."
            },
            2: {
                "requires": { 3: 3 },
                "Description": "Strong Constitution : You get away with eating a lot things that would kill most people. Reduce food and water loss from physical exertion by 10%. Hold your breath for 108 seconds. Chance of Dysentery is reduced by 2%. Buffs from consumables last 20% longer."
            },
            3: {
                "requires": { 3: 5 },
                "Description": "Great Metabolism : Even when you feel a little sick, you tend to get over it quickly. Reduce food and water loss from physical exertion by 15%. Hold your breath for 132 seconds. Chance of Dysentery is reduced by 3%. Buffs from consumables last 30% longer."
            },
            4: {
                "requires": { 3: 7 },
                "Description": "Intrinsic Immunity : You seem to be nearly immune to everything you eat. Reduce food and water loss from physical exertion by 20%. Hold your breath for 156 seconds. Chance of Dysentery is reduced by 4%. Buffs from consumables last 40% longer."
            },
            5: {
                "requires": { 3: 10 },
                "Description": "Iron Gut : You have an iron gut and could probably eat glass and survive. Reduce food and water loss from physical exertion by 25%. Hold your breath for 180 seconds. Chance of Dysentery is reduced by 5%. Buffs from consumables last 50% longer."
            }
        },
        5,
        "Recovery Perks"
    ),
    new Skill(
        9,
        "Rule 1: Cardio",
        "Train your body in the number one tactic against the zombie menace: Running away from them.", {
            1: {
                "requires": { 3: 1 },
                "Description": "Hiker : Just put one foot in front of the other. You are now a hiker . Increase stamina regen by 10% when sprinting."
            },
            2: {
                "requires": { 3: 4 },
                "Description": "Running Man : All the scrubs are in your rear view mirror now as you are a running man with excellent cardio. Increase stamina regen by 20% when sprinting."
            },
            3: {
                "requires": { 3: 7 },
                "Description": "Triathlete : Increase stamina regen by 30% when sprinting."
            }
        },
        3,
        "Recovery Perks"
    )
];

var agilitySkills = [
    new Skill(
        1,
        "Archery",
        "Master the use of bows and crossbows.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Bowman : Many start on the path of the ranger but few can reach it. Craft quality 2 poor bows, deal 10% more damage, 10% faster aim, draw and reload with bows. Unlocks wooden bow and iron crossbow crafting."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Archer : You still have much to learn, grasshopper. Craft quality 3 fair bows, deal 20% more damage, 20% faster aim, draw and reload with bows."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Marksman : All the rigorous training has turned you into a marksman with Bows. Craft quality 4 good bows, deal 30% more damage, 30% faster aim, draw and reload with bows."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Hairsplitter : You can split a hair you are so good at archery now. Craft quality 5 great bows, deal 40% more damage, 40% faster aim, draw and reload with bows."
            },
            5: {
                "requires": { 4: 10 },
                "Description": "Ranger : You have mastered archery and are now a ranger. Deal 50% more damage, 50% faster aim, draw and reload with bows."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        2,
        "Gunslinger",
        "Settle your disputes the old way and be a gunslinger in the apocalypse. Master the use of handguns and SMG. Unlocks pistol crafting.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Pea Shooter : You're no Wyatt Earp but you're better than the average drifter. Craft quality 2 poor handguns, deal 10% more damage, 5% faster fire rate, and 10% faster reload with handguns. Unlocks pistol crafting."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Outlaw : You are making a name for yourself, outlaw. Craft quality 3 fair handguns, deal 20% more damage, 10% faster fire rate, and reload 15% faster with handguns."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Sheriff : You can keep most situations under control, sheriff. Craft quality 4 good handguns, deal 30% more damage, 15% faster fire rate, and reload 20% faster. Critical Damage: 5 successive hits in a short time cause critical damage."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Gunfighter : You're now a gunfighter and can clear out a saloon full of rowdy bastards at the drop of a hat. Craft quality 5 great handguns, deal 40% more damage, 20% faster fire rate, and reload 25% faster. Critical Damage: 4 successive hits in a short time cause the last shot to do 100% extra damage."
            },
            5: {
                "requires": { 4: 10 },
                "Description": "Gunslinger : You are the fastest gunslinger in Navezgane. Deal 50% more damage, 25% faster fire rate, and 30% faster reload with handguns. Critical Damage: 3 successive hits in a short time cause the last shot to do 100% extra damage."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        3,
        "Deep Cuts",
        "Specialize in using bladed weapons like knives or machetes (not axes) to bleed your foes dry.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Dull Blade : You might have a dull blade but you know how to use it. Craft quality 2 poor knives and deal 10% more damage. You can inflict up to 3 Bleeding Wounds on an enemy and a power attack inflicts 2. Every attack refreshes the duration on bleeding. Enemies run 10% slower while bleeding. Unlocks hunting knife crafting."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Knife Guy : Your friends say you're a really knife guy. Craft quality 3 fair knives and deal 20% more damage. You can inflict up to 4 Bleeding Wounds on an enemy and a power attack inflicts 3."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Fencer : You are a cut above the rest. Craft quality 4 good knives and deal 30% more damage. You can inflict up to 5 Bleeding Wounds on an enemy and a power attack inflicts 4. Glancing blows have a 40% chance to cause 1 Bleeding Wound. Enemies run 15% slower while bleeding."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Swordsman : You are quite lethal with bladed weapons. Craft quality 5 great knives and deal 40% more damage. You can inflict up to 6 Bleeding Wounds on an enemy and a power attack inflicts 4. Glancing blows have a 70% chance to cause 1 Bleeding Wound."
            },
            5: {
                "requires": { 4: 10 },
                "Description": "Samurai : You are a samurai and can make sushi out of your foes. Deal 50% more damage. You can inflict up to 7 Bleeding Wounds on an enemy and a power attack inflicts 5. All glancing blows cause 1 Bleeding Wound. Enemies run 20% slower while bleeding."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        4,
        "Run and Gun",
        "Improve your hip fire accuracy and run faster while reloading any ranged weapon.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Spray and Pray : Spray and Pray. Aiming is overrated, just shoot first and ask questions later. Hip fire accuracy is improved by 10% and movement penalty when reloading is reduced 30%."
            },
            2: {
                "requires": { 4: 4 },
                "Description": "Twitch Fingers : Your twitch fingers might get you into trouble but have saved your skin on many occasions. Hip fire accuracy is improved by 17% and movement penalty when reloading is reduced 60%."
            },
            3: {
                "requires": { 4: 7 },
                "Description": "Trigger Man : You are now a deadly trigger man and have mastered the art of run and gun. Hip fire accuracy is improved by 25% and have no movement penalty when reloading."
            }
        },
        3,
        "Athletics Perks"
    ),
    new Skill(
        5,
        "Flurry of Blows",
        "Specialize in one-handed melee weapons and beating the tar out of your opponents in a furious flurry of quick strikes.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Quick Hands : You have developed quick hands. One-handed melee attack speeds are increased by 10%.  This perk applies to clubs, brawling, knives, machetes and stun batons."
            },
            2: {
                "requires": { 4: 4 },
                "Description": "Sudden Strike : You have developed the sudden strike. One-handed melee attack speeds are increased by 17%."
            },
            3: {
                "requires": { 4: 7 },
                "Description": "Flurry of Blows : You have mastered the flurry of blows. One-handed melee attack speeds are increased by 25%. Each kill recharges stamina by 30 points."
            }
        },
        3,
        "Athletics Perks"
    ),
    new Skill(
        6,
        "Light Armor",
        "Specialize in light armor to increase armor rating and armor durability.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Squire : You have started on the path of the lightly armored warrior. Craft quality 2 poor light armor, reduce light armor movement penalty by 15% and stamina penalty by 10%. Improve durability by 50%. Unlocks leather armor crafting."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Militant : You've survived some battles and hope to be a knight one day. Craft quality 3 fair light armor, reduce light armor movement penalty by 30% and stamina penalty by 20%. Improve durability by 100%."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Knight : All the hard training and battles have paid off, you are now a knight. Craft quality 4 good light armor, reduce light armor movement penalty by 50% and stamina penalty by 35%. Improve durability by 150%."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Gladiator : You have made a name for yourself and are feared by nearly all as you are now a gladiator. Craft quality 5 great light armor, reduce light armor movement penalty by 75% and stamina penalty by 50%. Improve durability by 200%."
            }
        },
        4,
        "Athletics Perks"
    ),
    new Skill(
        7,
        "Parkour",
        "Specialize in acrobatically getting anywhere you want to go, no matter how far up or far down that may be.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Tumbler : You can do a few moves but mostly you are just used to falling on your face. Increase safe fall distance by one meter and reduce stamina cost of jumping by 10%."
            },
            2: {
                "requires": { 4: 4 },
                "Description": "Stuntman : You've pulled off some stunts, but sometimes your hospital bills are larger than your paycheck. Reduce stamina cost of jumping by 20%. Increase safe fall distance by 2 meters and jump 1 meter higher."
            },
            3: {
                "requires": { 4: 6 },
                "Description": "Adrenaline Junkie : You're an adrenaline junkie and capable of death defying acts of insanity. Reduce stamina cost of jumping by 30%. Increase safe fall distance by 4 meters and never get a broken leg when falling."
            },
            4: {
                "requires": { 4: 8 },
                "Description": "Parkour Master : You are now a parkour master and can navigate difficult situations easily. Reduce stamina cost of jumping by 40%. Increase safe fall distance by 5 meters, can jump 2 meters higher, and never get a sprained or broken leg when falling."
            }
        },
        4,
        "Athletics Perks"
    ),
    new Skill(
        8,
        "Hidden Strike",
        "Specialize in catching your enemies unaware while you are sneaking and they are resting or wandering aimlessly.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Cutthroat : You are a cutthroat who prefers to operate from the shadows and use stealth and sneak attacks. Sneak attacks deal an extra 50% damage."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Butcher : You are now a butcher and have racked up some kills and are mastering the art assassination. Sneak attacks deal an extra 100% damage."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Executioner : You are now an executioner and are beginning to master your craft. Sneak attacks deal an extra 150% damage."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Cold Blooded Killer : You are a cold blooded killer and feel no remorse doing your dark deeds. Sneak attacks deal an extra 200% damage."
            },
            5: {
                "requires": { 4: 10 },
                "Description": "Assassin : You are now the ultimate assassin and can deal maximum sneak damage to your victims. Sneak attacks deal an extra 250% damage."
            }
        },
        5,
        "Stealth Perks"
    ),
    new Skill(
        9,
        "From The Shadows",
        "Specialize in sneaking around in the dark and making less noise in general.", {
            1: {
                "requires": { 4: 1 },
                "Description": "Lurker : Hide in the shadows 13% more effectively, noises from actions are muffled 10%, and sneak movement is 10% faster. Enemies will search for you for up to 50 seconds."
            },
            2: {
                "requires": { 4: 3 },
                "Description": "Shadower : Hide in the shadows 26% more effectively, noises from actions are muffled 20% and sneak movement is 20% faster. Enemies will search for you for up to 40 seconds."
            },
            3: {
                "requires": { 4: 5 },
                "Description": "Stalker : Hide in the shadows 39% more effectively, noises from actions are muffled 30%, and sneak movement is 30% faster. Enemies will search for you for up to 30 seconds."
            },
            4: {
                "requires": { 4: 7 },
                "Description": "Prowler : Hide in the shadows 52% more effectively, noises from actions are muffled 40%, and sneak movement is 40% faster. Enemies will search for you for up to 25 seconds."
            },
            5: {
                "requires": { 4: 10 },
                "Description": "Shadow Ninja : Hide in the shadows 65% more effectively, noises from actions are muffled 50% and sneak movement is 50% faster. Enemies will search for you for up to 20 seconds."
            }
        },
        5,
        "Stealth Perks"
    )
];

var intellectSkills = [
    new Skill(
        1,
        "Electrocutioner",
        "Learn how to use stun batons more effectively. Incapacitate your victims easier and do more damage.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Low Voltage : Where are the instructions? You're smart, but remember to point it away from you and pull the trigger. Craft quality 2 poor stun batons, deal 10% more damage and stun victims 20% longer. Unlocks stun baton crafting."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Stun Gun : You are getting the hang of using stun batons to incapacitate your enemies. Craft quality 3 fair stun batons, deal 20% more damage, and stun victim 40% longer."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Cattle Prod : You are getting dangerous with stun batons. You could probably knock out cattle if the zombies hadn't ate them all. Craft quality 4 good stun batons, deal 30% more damage, and stun victims 60% longer."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Danger: High Voltage : You are lethal with stun batons. Craft quality 5 great stun batons, deal 40% more damage, and stun victims 80% longer."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "Electrocutioner : You are the last thing they see coming and an executioner with stun batons. Deal 50% more damage and stun victims 100% longer."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        2,
        "Robotics Inventor",
        "You are fascinated with robotics. Learn to use and craft deployed weapons.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Science Projects : You have some crazy innovative ideas but your implementation could use some work. Craft poor quality 2 robots, deal 10% more damage, 30% faster fire rate and reload an extra 10 rounds. Robot active range is increased from 10 to 14 meters. You can deploy multiple robots but only the closest will be active. Unlocks Robotic Sledge crafting."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Basic Robotics : You are taking your projects to the next level now. Craft fair quality 3 robots, deal 20% more damage, 60% faster fire rate and reload an extra 20 rounds. Robot active range is 15 meters."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Automated Weaponry : You have mastered the basics of automated weaponry. Craft good quality 4 robotics, deal 30% more damage, 90% faster fire rate and reload an extra 30 rounds. Robot active range is 16 meters."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Advanced Robotics : You must be from the year 2077. You are creating some futuristic technology. Craft great quality 5 robots, deal 40% more damage, 120% faster fire rate and reload an extra 40 rounds. Reload robot weapons 10% faster. Robot active range is 17 meters."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "Robotics Expert : You are now a top expert in robotics. Reload robot weapons 20% faster and reload an extra 50 rounds. Robot active range is 18 meters. Two deployed robots can be active at once."
            }
        },
        5,
        "Combat Perks"
    ),
    new Skill(
        3,
        "Better Barter",
        "Specialize in convincing area traders to give you a better deal and open up their secret stashes of the really good stuff.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Wheeler Dealer : You are good at wheeling and dealing and never pay full price for anything. Get a 5% better deal buying and selling merchandise with traders."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Salesman : You must have been a salesman before the apocalypse with the kind of good deals you find. Get a 10% better deal buying and selling with traders."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Sales Manager : You act like a sales manager and have authority to cut the best deals. Get a 15% better deal buying and selling with traders. Traders' secret stash shows better loot."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Wall Street Tycoon : You would do well if the stock market still existed. Get a 20% better deal buying and selling with traders.. Traders' secret stash shows even better loot."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "Corporate Marketing CEO : You are like a Corporate Manager and buy goods at the lowest prices and sell for a huge profit. Get a 25% better deal buying and selling with traders. Traders' secret stash shows the best loot."
            }
        },
        5,
        "Influence Perks"
    ),
    new Skill(
        4,
        "The Daring Adventurer",
        "Be a daring adventurer! Get better rewards for doing quests.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Looter : Risking your neck every day has its advantages. Get an additional choice for quest rewards and 5% more dukes."
            },
            2: {
                "requires": { 5: 5 },
                "Description": "Plunderer : The traders know you can get the job done, plunderer. Get two additional choices for quest rewards and 10% more dukes."
            },
            3: {
                "requires": { 5: 6 },
                "Description": "Mercenary : You've made a name for yourself as a mercenary for hire. Get three additional choices for quest rewards and 15% more dukes."
            },
            4: {
                "requires": { 5: 8 },
                "Description": "Daring Adventurer : You are the daring adventurer and get the best rewards for your services. You can now choose two quest rewards and get 20% more dukes."
            }
        },
        4,
        "Influence Perks"
    ),
    new Skill(
        5,
        "Charismatic Nature",
        "You are an inspiration to your allies, increasing their combat prowess.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Inspirational : People get inspired when you are near them. Nearby Allies gain 20 health and stamina when near you."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Team Leader : You are a team leader and inspire those around you. Block and Melee Damage are increased by 20% for nearby allies."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Motivational Speaker : You are a strong motivational force. Nearby allies take 10% less damage from all sources, take half damage from bleeding and stop bleeding twice as fast."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Squad Leader : Your leadership abilities are top shelf. Allies are so enamored with you they get +1 to all attributes when near you."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "MISSING"
            }
        },
        5,
        "Influence Perks"
    ),
    new Skill(
        6,
        "Physician",
        "Use medicine and health items more effectively.", {
            1: {
                "requires": { 5: 3 },
                "Description": "Intern : Medical healing items heal 25% more health over time. Gain 40% more XP using bandages, first aid bandages, first aid kits and splints. Can craft chemistry stations, first aid bandages and plaster casts."
            },
            2: {
                "requires": { 5: 6 },
                "Description": "Doctor : Medical healing items heal 40% more health over time. Gain 60% more XP using bandages, first aid bandages, first aid kits and splints. Craft items 20% faster at chemistry stations."
            },
            3: {
                "requires": { 5: 8 },
                "Description": "Surgeon : Medical healing items heal 55% more health over time. Gain 80% more XP using bandages, first aid bandages, first aid kits and splints. Can craft first aid kits and steroids."
            },
            4: {
                "requires": { 5: 9 },
                "Description": "Miracle Worker : Miracle worker. Medical healing items heal 75% more health over time. Gain 100% more XP using bandages, first aid bandages, first aid kits and splints. Can craft Fortbites, Recog and antibiotics. Craft items 40% faster at chemistry stations."
            }
        },
        4,
        "Craftsmanship Perks"
    ),
    new Skill(
        7,
        "Advanced Engineering",
        "Engineer advanced items such as workbenches, electrical items and traps and craft 20% faster on workbenches.", {
            1: {
                "requires": { 5: 1 },
                "Description": "Blacksmith : You are now a blacksmith and able to forge iron and other metal objects. Craft forges and craft items with them 20% faster. Craft glue cheaper."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Tinkerer : Your tinkering is proving useful in the apocalypse. Craft workbenches and cement mixers and craft items with them 20% faster."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Electrician : You are now an electrician. Learn to craft generators, and build advanced base defense systems such as electric fences & blade traps. Craft military fiber. Gain 20% XP from electrical trap kills. Efficient craftsman. All forge recipes cost 10% less, crafting Forged Steel and electrical devices costs 15% less."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Inventor : Learn to craft shotgun turrets for short range concentrated base defense, battery banks and nail guns. Gain 35% XP from electrical trap kills. All forge recipes cost 15% less, crafting Forged Steel and electrical devices costs 25% less."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "Advanced Engineer : Learn to craft SMG auto turrets for the best ranged base defense, and crucibles to forge steel in forges. Gain 50% XP from Electrical Trap Kills. All forge recipes cost 20% less, crafting Forged Steel and electrical devices costs 35% less."
            }
        },
        5,
        "Craftsmanship Perks"
    ),
    new Skill(
        8,
        "Grease Monkey",
        "Learn to build vehicles from junk in the wasteland! Vehicles can be assembled from parts without this perk", {
            1: {
                "requires": { 5: 1 },
                "Description": "Bicycle Mechanic : Your passion to tinker and not walk everywhere has led you on the path of the bicycle mechanic. Can craft bicycle parts. Craft wheels and bicycle parts 33% cheaper."
            },
            2: {
                "requires": { 5: 3 },
                "Description": "Minibike Master : Why pedal everywhere when there is enough junk lying around to make a minibike? Can craft minibike parts, gas cans and quality 2 car batteries. Craft minibike parts 33% cheaper."
            },
            3: {
                "requires": { 5: 5 },
                "Description": "Motorcycle Maniac : It was only a matter of time before going faster and carrying more gear was a necessity. You can craft motorcycle parts, oil and quality 3 car batteries. Craft motorcycle parts 33% cheaper."
            },
            4: {
                "requires": { 5: 7 },
                "Description": "Grease Monkey : Nothing beats the safety and warmth of a nice 4x4 truck. You can craft 4x4 truck parts, more efficient stacks of gas cans and quality 4 car batteries. Craft 4x4 truck parts 33% cheaper."
            },
            5: {
                "requires": { 5: 10 },
                "Description": "Avionics Wizard : Your tinkering desire is never satisfied and only a true genius could figure out how to take to the skies with scrap iron. Can craft gyrocopter parts and quality 5 car batteries. Craft gyrocopter parts 33% cheaper."
            }
        },
        5,
        "Craftsmanship Perks"
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
    ),
    new MainStat(
        3,
        "Fortitude",
        "Fortitude is the measure of your physical resilience.",
        fortitudeSkills, {
            1: {
                "PointsToBuy": 1,
                "Description": "Fragile Health : You aren't very durable or healthy but at least you are alive. Deal 200% head shot damage and have a 5% chance to dismember with fists and machine guns."
            },
            2: {
                "PointsToBuy": 1,
                "Description": "Sickly : You feel a little better than you used to. Deal 210% head shot damage and have a 10% chance to dismember with fists, and machine guns."
            },
            3: {
                "PointsToBuy": 1,
                "Description": "Unhealthy : You continue to defy gravity and keep standing. Deal 220% head shot damage and have a 15% chance to dismember with fists and machine guns."
            },
            4: {
                "PointsToBuy": 1,
                "Description": "Weakened : You are starting to feel like normal people. Deal 230% head shot damage and have a 20% chance to dismember with fists, and machine guns."
            },
            5: {
                "PointsToBuy": 1,
                "Description": "Hardy : You are in good health. Deal 240% head shot damage and have a 25% chance to dismember with fists and machine guns."
            },
            6: {
                "PointsToBuy": 2,
                "Description": "Very Healthy : You are very healthy. Deal 250% head shot damage and have a 30% chance to dismember with fists and machine guns."
            },
            7: {
                "PointsToBuy": 2,
                "Description": "Vigorous Health : You have vigorous health. Deal 260% head shot damage and have a 35% chance to dismember with fists and machine guns."
            },
            8: {
                "PointsToBuy": 2,
                "Description": "Resilient : You are as resilient as they come. Deal 270% head shot damage and have a 40% chance to dismember with fists and machine guns."
            },
            9: {
                "PointsToBuy": 3,
                "Description": "Amazing Constitution : You have an amazing constitution. Deal 285% head shot damage and have a 45% chance to dismember with fists and machine guns."
            },
            10: {
                "PointsToBuy": 3,
                "Description": "Exuberant Fortitude : Your have exuberant fortitude and can put a beat down on a tornado. Deal 300% head shot damage and have a 50% chance to dismember with fists and machine guns."
            }
        }
    ),
    new MainStat(
        4,
        "Agility",
        "Agility is the measure of your athletic prowess.",
        agilitySkills, {
            1: {
                "PointsToBuy": 1,
                "Description": "Clumsy : You are as clumsy as they come but you still do 200% head shot damage and have a 5% chance to dismember with bows, handguns, and knives."
            },
            2: {
                "PointsToBuy": 1,
                "Description": "Fumbling : You didn't make the football team but that didn't stop you from practicing. Deal 210% head shot damage and have a 10% chance to dismember with bows, handguns and knives."
            },
            3: {
                "PointsToBuy": 1,
                "Description": "Clunky : You are still loud and clunky but can deal 220% head shot damage and have a 15% chance to dismember with bows, handguns and knives."
            },
            4: {
                "PointsToBuy": 1,
                "Description": "Inept : Your dexterity is a bit inept, but you can deal 230% head shot damage and have a 20% chance to dismember with bows, handguns and knives."
            },
            5: {
                "PointsToBuy": 1,
                "Description": "Agile : You are now agile and deal 240% head shot damage and have a 25% chance to dismember with bows, handguns and knives."
            },
            6: {
                "PointsToBuy": 2,
                "Description": "Nimble : Your movement is now very nimble and deal 250% head shot damage and have a 30% chance to dismember with bows, handguns and knives."
            },
            7: {
                "PointsToBuy": 2,
                "Description": "Dexterous : Your dexterity is very impressive. Deal 260% head shot damage and have a 35% chance to dismember with bows, handguns and knives."
            },
            8: {
                "PointsToBuy": 2,
                "Description": "Gymnast : Moving fluid and landing on your feet are second nature for you. Deal 270% head shot damage and have a 40% chance to dismember with bows, handguns and knives."
            },
            9: {
                "PointsToBuy": 3,
                "Description": "Professional Athlete : Your agility is good enough you could be a professional athlete. Deal 285% head shot damage and have a 45% chance to dismember with bows, handguns and knives."
            },
            10: {
                "PointsToBuy": 3,
                "Description": "Parkour Master : Your dexterity is unmatched. Deal 300% head shot damage and have a 50% chance to dismember with bows, handguns and knives."
            }
        }
    ),
    new MainStat(
        5,
        "Intellect",
        "Intellect is the measure of your mental ability. Increasing Intellect improves head shot damage with intellect governed weapons such as Robotic turrets and stun batons.",
        intellectSkills, {
            1: {
                "PointsToBuy": 1,
                "Description": "Blockhead : You are as dumb as box of rocks but you still do 200% head shot damage and have a 5% chance to dismember with stun batons and Robotic turrets."
            },
            2: {
                "PointsToBuy": 1,
                "Description": "Dullard : You aren't the brightest color in the box, but you occasionally hit the nail on the head. Deal 210% head shot damage and have a 10% chance to dismember with stun batons and Robotic turrets."
            },
            3: {
                "PointsToBuy": 1,
                "Description": "Thick Headed : You don't like to learn new stuff but you will if you have to. Deal 230% head shot damage and have a 20% chance to dismember with stun batons and Robotic turrets."
            },
            4: {
                "PointsToBuy": 1,
                "Description": "Average : Being average is better than being below average. Deal 240% head shot damage and have a 25% chance to dismember with stun batons and Robotic turrets."
            },
            5: {
                "PointsToBuy": 1,
                "Description": "Smart : You are now getting pretty smart. Deal 250% head shot damage and have a 30% chance to dismember with stun batons and Robotic turrets."
            },
            6: {
                "PointsToBuy": 2,
                "Description": "Brilliant : Your peers consider you brilliant. Deal 260% head shot damage and have a 35% chance to dismember with stun batons and Robotic turrets."
            },
            7: {
                "PointsToBuy": 2,
                "Description": "Intellectual : You are now an inellectual. Deal 270% head shot damage and have a 40% chance to dismember with stun batons and Robotic turrets."
            },
            8: {
                "PointsToBuy": 2,
                "Description": "Genius : You are now a true genius. Deal 285% head shot damage and have a 45% chance to dismember with stun batons and Robotic turrets."
            },
            9: {
                "PointsToBuy": 3,
                "Description": "Professional Athlete : Your agility is good enough you could be a professional athlete. Deal 285% head shot damage and have a 45% chance to dismember with bows, handguns and knives."
            },
            10: {
                "PointsToBuy": 3,
                "Description": "Mastermind : You are a mastermind of intellect. Deal 300% head shot damage and have a 50% chance to dismember with stun batons and Robotic turrets."
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

function decodeSkills(urlData) {
    var decodedArray = urlData.split("_");
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
            if (m === mainId && s === skillId && currentLevel === 0) {
                checks[i].innerHTML = "&#10066;";
                checks[i].parentElement.parentElement.children[0].children[0].innerText = currentLevel;
            }
        }
    }
}

function render() {
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
        }

        cardGroup.appendChild(card);
        cardGroup.appendChild(subCards);
        contentElem.appendChild(cardGroup);
    }
}

function bindEvents() {
    addBtns = document.getElementsByClassName('addBtn');
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

    removeBtns = document.getElementsByClassName('removeBtn');
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

player = new Player(mainStats);
const urlParams = new URLSearchParams(window.location.search);
const urlData = urlParams.get('data');
if (urlData) {
    var decodedData = decodeSkills(urlData);
}
render();
bindEvents();