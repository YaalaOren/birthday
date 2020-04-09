const ideas = [
{
name: "the beach",
size: ["up to 5", "5-10", "10+"],
ages: [ "children", "9-13","14-17", "18+"],
tags: ["free", "birthday", "outside", "family"]
},
{
name: "basketball",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["sport", "outside", "free", "family"]
},
{
name: "soccer",
size: ["5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["free", "outside", "free", "family"]
},
{
name: "pool",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17"],
tags: ["birthday", "outside", "family"]
},
{
name: "ice skating",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["birthday", "sport", "family"]
},
{
name: "bowling",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["birthday", "sport", "family"]
},
{
name: "scuba diving",
size: ["up to 5"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "outside"]
},
{
name: "laser tag",
size: ["5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["birthday", "sport"]
},
{
name: "restaurant",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["family", "birthday"]
},
{
name: "picnic",
size: ["up to 5", "5-10", "10+" ],
ages: ["children", "9-13","14-17", "18+"],
tags: ["family", "birthday", "free", "outside"]
},
{
name: "amusement park",
size: ["up to 5", "5-10"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["family", "outside", "birthday"]
},
{
name: "camping",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "outside", "family"]
},
{
name: "movie",
size: ["up to 5", "5-10"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["family"]
},
{
name: "paintball",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "birthday"]
},
{
name: "trampoline park",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17"],
tags: ["family", "birthday", "sport"]
},
{
name: "club",
size: ["up to 5", "5-10"],
ages: ["18+"],
tags: []
},
{
name: "bar",
size: ["up to 5", "5-10"],
ages: ["18+"],
tags: []
},
{
name: "water park",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["sport", "outside","family"]
},
{
name: "diving",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "outside","family"]
},
{
name: "ice cream",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["outside","birthday","family"]
},
{
name: "escape room",
size: ["up to 5", "5-10"],
ages: ["9-13","14-17", "18+"],
tags: ["birthday"]
},
{
name: "pizza",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["birthday","family"]
},
{
name: "concert",
size: ["up to 5", "5-10"],
ages: ["9-13","14-17", "18+"],
tags: ["art"]
},
{
name: "wall climbing",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "outside", "free", "family"]
},
{
name: "hiking",
size: ["up to 5", "5-10", "10+"],
ages: ["9-13","14-17", "18+"],
tags: ["sport", "outside", "free", "family"]
},
{
name: "karaoke",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["birthday"]
},
{
name: "sailing",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["outside" ,"sport", "family"]
},
{
name: "tennis",
size: ["up to 5", "5-10"],
ages: ["children", "9-13","14-17","18+"],
tags: ["outside", "sport", "free"]
},
{
name: "vr/ar",
size: ["up to 5"],
ages: ["9-13","14-17","18+"],
tags: []
},
{
name: "board games",
size: ["up to 5", "5-10"],
ages:["children", "9-13","14-17", "18+"],
tags: ["free", "family"]
},
{
name: "shopping",
size: ["up to 5", "5-10"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["family"]
},
{
name: "ceramics workshop",
size: ["up to 5", "5-10", "10+"],
ages: ["children", "9-13","14-17", "18+"],
tags: ["art","family"]
},
{
name: "hot air balloon",
size: ["up to 5", "5-10"],
ages: ["9-13", "14-17","18+"],
tags: ["outside", "family"]
},
{
name: "horse riding",
size: ["up to 5","5-10"],
ages: ["9-13","14-17","18+"],
tags: ["sport","outside", "family"]
},
{
name: "zoo",
size: ["up to 5","5-10","10+"],
ages: ["children","9-13","14-17","18+"],
tags: ["outside","family"]
},
{
name: "game night",
size: ["up to 5","5-10", "10+"],
ages: ["children","9-13","14-17","18+"],
tags: ["free","birthday","family"]
},
{
name: "museum",
size: ["up to 5","5-10","10+"],
ages: ["children","9-13","14-17","18+"],
tags: ["art","family"]
},
{
name: "baking workshop",
size: ["up to 5","5-10", "10+"],
ages: ["children","9-13","14-17","18+"],
tags: ["birthday","art","family"]
},
{
name: "skiing",
size: ["up to 5","5-10","10+"],
ages: ["9-13","14-17","18+"],
tags: ["sport","outside","free","family"]
},
{
name: "fishing",
size: ["up to 5","5-10"],
ages: ["14-17","18+"],
tags: ["sport","outside","free", "family"]
}
]

const sizeMenu = document.getElementById("size");
const ageMenu = document.getElementById("ages");

const sportOp = document.getElementById("sport");
const outsideOp = document.getElementById("outside");
const freeOp = document.getElementById("free");
const birthdayOp = document.getElementById("birthday");
const familyOp = document.getElementById("family");
const artOp = document.getElementById("art");
const ops = [sportOp, outsideOp, freeOp, birthdayOp, familyOp, artOp];
const results = document.getElementById("results");


console.log(ideas);

function search() {
	var size = sizeMenu.options[sizeMenu.selectedIndex].value;
	var age = ageMenu.options[ageMenu.selectedIndex].value;
	var tags = []
	var fits = []
	for (i = 0; i < ops.length; i++) {
		if (ops[i].checked) {
			tags.push(ops[i].id);
		}
	} 
	console.log("tags", tags);
	findit(size, age, tags);
}

function findit(size,age,tags) {
	var fits = []
	var newfits = []

	for (i = 0; i < ideas.length; i++) {
		if (ideas[i]["ages"].includes(age) && ideas[i]["size"].includes(size)) {
			fits.push(ideas[i]);
		}
	}

	for (i = 0; i < fits.length; i++) {
		fit = true;
		for (j = 0; j < tags.length; j++) {
			if (! fits[i]["tags"].includes(tags[j])) {
				fit = false;
			}
		}
		if (fit == true) {
			newfits.push(fits[i]);
		}
	}

	show(newfits)
}

function show(fits) {
	document.getElementById("results").innerHTML = "";
	console.log(fits);
	for (i = 0; i < fits.length; i++) {
		var obj = fits[i];
		var place = document.createElement("div");
		var option = document.createElement("span");
		option.innerHTML=obj["name"];
		var maps = document.createElement("a");
		maps.innerHTML=" search near you";
		maps.href=encodeURI("https://www.google.com/maps/search/?api=1&query="+obj["name"]+" near me");
		results.appendChild(place);
		place.appendChild(option);
		option.appendChild(document.createElement("br"));
		option.appendChild(maps);
		results.appendChild(document.createElement("br"));
	}
}


