$(function() {
    $.when(getXml(), getCsv()).done((x, c) => {
        // console.log(x);
        // console.log(c);

        var xml = x[0];
        var csv = $.csv.toObjects(c[0]);

        // console.log(xml);
        // console.log(csv);
        loadLanguage(xml, csv, 'english');
    });
});

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
    $(xml).find("attribute").each((i, el) => {
        // console.log(i, el);
        // console.log(el.getAttribute('name'));
        // console.log(el.getAttribute('name_key'));
        // console.log(el.getAttribute('desc_key'));
        // console.log(el.getAttribute('icon'));

        //not sure whether to include books - for now ignore
        if (el.getAttribute('name') === 'attBooks') {
            return;
        }

        var name = null;
        var nameObj = csv.find((v, i, o) => v.Key === el.getAttribute('name_key'));
        if (nameObj) {
            console.log(nameObj);
            name = nameObj[language];
            console.log(name);
        }

        var description = null;
        var descObj = csv.find((v, i, o) => v.Key === el.getAttribute('desc_key'));
        if (descObj) {
            console.log(descObj);
            description = descObj[language];
            console.log(description);
        }

        var icon = el.getAttribute('icon');
        console.log(icon);
    });

    $(xml).find("skill").each((i, el) => {
        // console.log(i, el);
        // console.log(el.getAttribute('name'));
        // console.log(el.getAttribute('parent'));
        // console.log(el.getAttribute('name_key'));
        // console.log(el.getAttribute('desc_key'));
        // console.log(el.getAttribute('icon'));

        var name = null;
        var nameObj = csv.find((v, i, o) => v.Key === el.getAttribute('name_key'));
        if (nameObj) {
            console.log(nameObj);
            name = nameObj[language];
            console.log(name);
        }

        var parent = null;
        var parentObj = csv.find((v, i, o) => v.Key === el.getAttribute('parent'));
        if (parentObj) {
            console.log(parentObj);
            parent = parentObj[language];
            console.log(parent);
        }

        var description = null;
        var descObj = csv.find((v, i, o) => v.Key === el.getAttribute('desc_key'));
        if (descObj) {
            console.log(descObj);
            description = descObj[language];
            console.log(description);
        }

        var icon = el.getAttribute('icon');
        console.log(icon);
    });

    $(xml).find("perk").each((i, el) => {
        // console.log(i, el);
        // console.log(el.getAttribute('name'));
        // console.log(el.getAttribute('parent'));
        // console.log(el.getAttribute('max_level'));
        // console.log(el.getAttribute('desc_key'));
        // console.log(el.getAttribute('long_desc_key'));
    });
}