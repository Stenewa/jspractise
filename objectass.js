/*defning an obj*/
var thiscat={
	"name":"catthew",
	"paws":"pink",
	"naughty":"very"

};
var pawcolor=thiscat["paws"];
console.log(pawcolor);
thiscat.fur="dark grey";
/*adding values*/
var furcolor=thiscat["fur"];
console.log(furcolor);
/*using an obj for lookup purposes */
var thisdictionary={
	"drink":"water",
	"drink1":"milk",
	"drink2":"vodka",
	"drink3":"tequila"

};
		/*checking for a property using an obj*/
		function chkdrink(thisdrink){
			if (thisdictionary.hasOwnProperty(thisdrink)) {
				return "Its a drink";
			}else{
				return "that is not a drink";
			}
		}
		console.log(chkdrink('BEEF'));
	/*complex objs */
	var animalRescue=[
		{
			"name":"poodles",
			"species":"cat",
			"yearofrescue":"2022",
			"likes":["bananas","cuddles","naps"]
		},
		{
			"name":"barry",
			"species":"dog",
			"yearofrescue":"2020",
			"likes":["walks","pets","treats"]
		}
	];
	//adding and removing objs in other objs ie. nested objs
 
var petDept=[
	feline=[

			marky={
				"likes":["back rubs","cat nip", "naps"],
				"dislikes":["dogs","sleep interruption","too much noise"],
				"age":1,
				"color":"orange"
			},
			peanut={
				"likes":["back rubs","cat nip", "tuna"],
				"dislikes":["bright lights","sleep interruption","too much noise"],
				"age":0.5,
				"color":"black"
			}

		
		
	],
	Canine=[
		poodles=[
			guppy={
				"color":"white",
				"height in cm":30,
				"weight in kg":2.0,
				"likes":[
					"hugs","treats","lamb chops"
				]
			},
			malow={
				"color":"black with white spots",
				"height in cm":30,
				"weight in kg":2.0,
				"likes":[
					"hugs","treats","lamb chops"
				]
			}
		],
		labrados=[
			poppy={
				"color":"white",
				"height in cm":150,
				"weight in kg":10.0,
				"likes":[
					"hugs","treats","lamb chops"
				]
			},
			peaches={
				"color":"black with white spots",
				"height in cm":130,
				"weight in kg":13.0,
				"likes":[
					"hugs","treats","lamb chops"
						]
				}
			]
		]
	];

	var typesAnimals={
		"wild":{

			"carnivores":["cheetah","lion"],
			"omnivores":"monkey",
			"reptile":"alligator"
	},
		"domestic":["cow","ducks","donkeys"],
		"pets":[
			"cat","dog","hamster"
		]

	}
	//keep an initial copy of the data
	//stringify converts data into string format
	var initCopy=JSON.parse(JSON.stringify(typesAnimals));
	//update the information using a function
function updateInfo(id,prop,value){
	if (value===""){
		delete typesAnimals[id][prop]
	}else if(prop==="carnivores"){
		//typesAnimals[id][prop]=typesAnimals[id][prop]||[];
		typesAnimals[id][prop].push(value);
		var thisCanivores=typesAnimals.wild.carnivores;
		console.log(thisCanivores);
	}else{
		//typesAnimals[id][prop]=typesAnimals[id][prop]||[]
		typesAnimals[id][prop]=typesAnimals[id][prop].push(value);
		var valUpdate=JSON.parse(JSON.stringify(typesAnimals[id][prop]))
		console.log(valUpdate);
		
	}
return typesAnimals;
}
updateInfo("wild","carnivores","hyenas");
//updateInfo("pets"," ","guinea pig")
