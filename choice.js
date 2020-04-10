const title = document.getElementById("title");
const text = document.getElementById("text");
const opt = document.getElementById("opt");
let state = {}
let items = 0



function start() {
	state = {evidnece: false, lie:false, nurit_pass: null, nitzan_pass: null, phone_pass: null}
	showText(0);
}



function select(option) {
	const nextTextId = option.nextText;
	opt.style.display = "grid"; 
	if (nextTextId == 25 && state.nurit_pass != 1004) {
		state.nurit_pass = prompt("what is nurit's password? _ _ _ _");
		if (state.nurit_pass == 1004) {
			showText(25)
		} else {
			showText(35)
		}

	}
	else if (nextTextId == 27 && state.nitzan_pass != 2727) {
		state.nitzan_pass = prompt("what is nitzan's password? _ _ _ _");
		if (state.nitzan_pass == 2727) {
			showText(27)
		} else {
			showText(40)
		}

	} 
	else if (nextTextId == 29 && state.phone_pass != "wordpass12") {
		state.phone_pass = prompt("please enter a password to connect to a phone _ _ _ _ _ _ _ _ _ _");
		if (state.phone_pass == "wordpass12") {
			showText(29)
		} else {
			showText(43)
		}

	} else {

		if (option.item == true) {
			if (items >= state.space) {
				text.innerText = "You have no space left for that.";
			} else {
				items++
				state = Object.assign(state, option.setState);
				showText(nextTextId);
			}
		} else {
			state = Object.assign(state, option.setState);
			showText(nextTextId);
		}
	}
}





function showText(textIndex) {
	const textShown = texts.find(pos => pos.id === textIndex);
	text.innerHTML = textShown.text;

	while (opt.firstChild) {
		opt.removeChild(opt.firstChild);
	}

	textShown.options.forEach(option => {
		if (showOption(option)) {
			const button = document.createElement("button");
			button.innerText = option.text;
			button.classList.add("btn");
			button.addEventListener("click", () => select(option));
			opt.appendChild(button);
		}
	})
}

function showOption(option) {
	return option.requirment == null || option.requirment(state);
}



const texts = [
	{
		id: 1,
		text: "what do you want to do?",
		options: [
			{
				text: "investigate people",
				nextText: 2
			},
			{
				text: "investigate rooms",
				nextText: 3
			},
			{
				text: "reveal murderer",
				nextText: 4
			}
		]
	},
	{
		id: 2,
		text: "who do you want to investigate?",
		options: [
			{
				text: "nurit",
				nextText: 5
			},
			{
				text: "nitzan",
				nextText: 6
			},
			{
				text: "yuval",
				nextText: 7
			},
			{
				text: "back",
				nextText: 1
			}
		]
	},
	{
		id: 3,
		text: "which room do you want to investigate?",
		options: [
			{
				text: "the bedroom",
				nextText: 8
			},
			{
				text: "the living room",
				nextText: 9
			},
			{
				text: "back",
				nextText: 1
			}
		]
	},
	{
		id: 4,
		text: "who is the murderer?",
		options: [
			{
				text: "nurit",
				nextText: 10
			},
			{
				text: "nitzan",
				nextText: 11
			},
			{
				text: "yuval",
				nextText: 10
			},
			{
				text: "back",
				nextText: 1
			}
		]
	},
	{
		id: 5,
		text: "what do you want to ask nurit?",
		options: [
			{
				text: "what did you do when i was away?",
				nextText: 12
			},
			{
				text: "what do you know about what happend?",
				nextText: 13
			},
			{
				text: "back",
				nextText: 2
			}
		]
	},
	{
		id: 6,
		text: "what do you want to ask nitzan?",
		options: [
			{
				text: "what did you do when i was away?",
				nextText: 14
			},
			{
				text: "what do you know about what happend?",
				nextText: 15
			},
			{
				text: "back",
				nextText: 2
			}
		]
	},
	{
		id: 7,
		text: "what do you want to ask yuval?",
		options: [
			{
				text: "what did you do when i was away?",
				nextText: 16
			},
			{
				text: "what do you know about what happend?",
				nextText: 17
			},
			{
				text: "back",
				nextText: 2
			}
		]
	},
	{
		id: 8,
		text: "you are in the bedroom. what do you want to check?",
		options: [
			{
				text: "lior's bag",
				nextText: 18
			},
			{
				text: "nurit's bag",
				nextText: 19
			},
			{
				text: "yuval's bag",
				nextText: 20
			},
			{
				text: "back",
				nextText: 3
			}
		]
	},
	{
		id: 9,
		text: "you are in the living room. what do you want to check?",
		options: [
			{
				text: "nitzan's bag",
				nextText: 21
			},
			{
				text: "my computer",
				nextText: 22
			},
			{
				text: "back",
				nextText: 3
			}
		]
	},
	{
		id: 10,
		text: "this is incorrect, stupid moron.",
		options: [
			{
				text: "back",
				nextText: 1
			}
		]
	},
	{
		id: 11,
		text: "correct!",
		options: [
			{
				text: "confront nitzan",
				nextText: 23
			}
		]
	},
	{
		id: 12,
		text: 'nurit: "i went to your room with yuval and lior to put my bag there, and then returned to the kitchen"',
		options: [
			{
				text: "back",
				nextText: 5
			}
		]
	},
	{
		id: 13,
		text: 'nurit: "lior stayed at the bedroom to make a call for his mom or something when i went back to the kitchen so that is all i know"',
		options: [
			{
				text: "back",
				nextText: 5
			}
		]
	},
	{
		id: 14,
		text: 'nitzan: "when everyone went to put their bags in your bedroom, i went to the bathroom. then i saw they were back in the kitchen so i went to the kitchen right after that. i was never in the bedroom where the murder happend."',
		options: [
			{
				text: "back",
				nextText: 6,
				setState: { lie: true }
			}
		]
	},
	{
		id: 15,
		text: 'nitzan: "i was in the bathroom the whole time, i never entered the bedroom, so i really do not know anything"',
		options: [
			{
				text: "back",
				nextText: 6,
				setState: { lie: true }
			}
		]
	},
	{
		id: 16,
		text: 'yuval: "so.. me and nurit went to the bedroom...... ;) it took only 3 minutes and we got back to the kitchen after that ;)"',
		options: [
			{
				text: "back",
				nextText: 7
			}
		]
	},
	{
		id: 17,
		text: 'yuval: "nurit and got back to the kitchen after putting our bags in the bedroom. lior stayed, i do not remember why tho"',
		options: [
			{
				text: "back",
				nextText: 7
			}
		]
	},
	{
		id: 18,
		text: "you are looking in lior's bag.",
		options: [
			{
				text: "take out his phone",
				nextText: 24
			},
			{
				text: "back",
				nextText: 8
			}
		]
	},
	{
		id: 19,
		text: "you are looking in nurit's bag.",
		options: [
			{
				text: "take out her phone",
				nextText: 25
			},
			{
				text: "back",
				nextText: 8
			}
		]
	},
	{
		id: 20,
		text: "you are looking in yuval's bag.",
		options: [
			{
				text: "take out his phone",
				nextText: 26
			},
			{
				text: "back",
				nextText: 8
			}
		]
	},
	{
		id: 21,
		text: "you are looking in nitzan's bag.",
		options: [
			{
				text: "take out her phone",
				nextText: 27
			},
			{
				text: "back",
				nextText: 9
			}
		]
	},
	{
		id: 22,
		text: "which program do you want to use on your computer?",
		options: [
			{
				text: "mikmak",
				nextText: 28
			},
			{
				text: "find my phone",
				nextText: 29
			},
			{
				text: "back",
				nextText: 9
			}
		]
	},
	{
		id: 23,
		text: 'nitzan: "what? why do you think it is me???"',
		options: [
			{
				text: "show evidence",
				nextText: 30,
				requirment: (state) => state.evidence == true && state.lie == true,
			},
			{
				text: "i have no evidence... go back to get it.",
				nextText: 1,
				requirment: (state) => state.evidence != true || state.lie != true,
			}
		]
	},
	{
		id: 24,
		text: "lior's phone has no password. what app do you want to open?",
		options: [
			{
				text: "recent calls",
				nextText: 31
			},
			{
				text: "chats",
				nextText: 32
			},
			{
				text: "back",
				nextText: 18
			}
		]
	},
	{
		id: 25,
		text: "you have succesfully unlocked nurit's phone. what app do you want to open?",
		options: [
			{
				text: "recent calls",
				nextText: 33
			},
			{
				text: "chats",
				nextText: 34
			},
			{
				text: "back",
				nextText: 19
			}
		]
	},
	{
		id: 26,
		text: "yuval's phone has no password. what app do you want to open?",
		options: [
			{
				text: "recent calls",
				nextText: 36
			},
			{
				text: "chats",
				nextText: 37
			},
			{
				text: "back",
				nextText: 20
			}
		]
	},
	{
		id: 27,
		text: "you have succesfully unlocked nitzan's phone. what app do you want to open?",
		options: [
			{
				text: "recent calls",
				nextText: 38
			},
			{
				text: "chats",
				nextText: 39
			},
			{
				text: "back",
				nextText: 21
			}
		]
	},
	{
		id: 28,
		text: "what do you want to do on mikmak?",
		options: [
			{
				text: "start playing",
				nextText: 41
			},
			{
				text: "view account information",
				nextText: 42
			},
			{
				text: "back",
				nextText: 22
			}
		]
	},
	{
		id: 29,
		text: "you have succesfully logged into nitzan's find-my-phone account. what do you want to do?",
		options: [
			{
				text: "locate my phone",
				nextText: 44
			},
			{
				text: "phone movement history",
				nextText: 45
			},
			{
				text: "back",
				nextText: 22
			}
		]
	},
	{
		id: 30,
		text: 'nitzan: "o..oh... yeah... i admit it. it was me. but i swear, i had a good reason!"',
		options: [
			{
				text: '"what was it?"',
				nextText: 46
			}
		]
	},
	{
		id: 31,
		text: "lior didn't call anyone today.",
		options: [
			{
				text: "back",
				nextText: 24
			}
		]
	},
	{
		id: 32,
		text: "i think you know all too well what lior's chat consist of",
		options: [
			{
				text: "back",
				nextText: 24
			}
		]
	},
	{
		id: 33,
		text: "nurit's most recent call is to you.",
		options: [
			{
				text: "back",
				nextText: 25
			}
		]
	},
	{
		id: 34,
		text: "nurit has a chat with an unsaved number that you don't know. <br> <b>unknown:</b> hey nurit it's nitzan, i'm using someone else's phone, i lost mine... i have the find-my-phone app but it requiers a computer and i'm not at home right now... can you help me?? it's urgent!! <br> <b>nurit:</b> yeah yeah of course! what's your account info? <br> <b>unknown:</b> just enter wordpass12 on the app <br> <b>nurit:</b> okay i did it. your phone is at some cafeteria... <br> <b>unknown:</b> ohhhh omg ok. thanks a lot!! <3",
		options: [
			{
				text: "back",
				nextText: 25
			}
		]
	},
	{
		id: 35,
		text: "incorrect password for nurit's phone.",
		options: [
			{
				text: "back",
				nextText: 19
			}
		]
	},
	{
		id: 36,
		text: "yuval's most recent call is to a number you don't recognize",
		options: [
			{
				text: "back",
				nextText: 26
			}
		]
	},
	{
		id: 37,
		text: "yuval's chats are cencored for your own safety...",
		options: [
			{
				text: "back",
				nextText: 26
			}
		]
	},
	{
		id: 38,
		text: "nitzan's most recent call is to mom. what? why would she call your mom??? oh, it's <i>her</i> mom. makes sense.",
		options: [
			{
				text: "back",
				nextText: 27
			}
		]
	},
	{
		id: 39,
		text: "nitzan's last chat is with nurit: <br> <b>nurit:</b> you're coming to tamar's birthday today, right? <br> <b>nitzan:</b> yeah wanna come together? <br> <b>nurit:</b> yes!! you know, this is also my cat's birthday today. <br> <b>nitzan:</b> oh really? cool. <br> <b>nurit:</b> yes, my cat was born on 10.04. this is a very important date to me <br> <b>nitzan:</b> ok.. why do you have to repeat the date like that lol <br> <b>nurit:</b> it's probably important for the game",
		options: [
			{
				text: "back",
				nextText: 27
			}
		]
	},
	{
		id: 40,
		text: "incorrect password for nitzan's phone.",
		options: [
			{
				text: "back",
				nextText: 21
			}
		]
	},
	{
		id: 41,
		text: "yes, harrasing little children never gets old.",
		options: [
			{
				text: "back",
				nextText: 28
			}
		]
	},
	{
		id: 42,
		text: "mikmak account information: <br> username: nitzi_kfitzi <br> password: 2727",
		options: [
			{
				text: "back",
				nextText: 28
			}
		]
	},
	{
		id: 43,
		text: "this password doesn't link to any account",
		options: [
			{
				text: "back",
				nextText: 22
			}
		]
	},
	{
		id: 44,
		text: "nitzan's phone is in the living room.",
		options: [
			{
				text: "back",
				nextText: 29
			}
		]
	},
	{
		id: 45,
		text: "nitzan's phone movement near the time of the murder: <br> 18:12 in your living room <br> 18:15 in the bathroom <br> 18:16 in the bedroom <br> 18:20 in the living room" ,
		options: [
			{
				setState: { evidence: true },
				text: "back",
				nextText: 29
			}
		]
	},
	{
		id: 46,
		text: '"lior told me he was going to kill everybody! he had a gun and all! so in the moment he left his gun unsupervised, i shot him. if i didnt do that you would all be dead."',
		options: [
			{
				text: "what?! even if that's true, why would he tell you that?",
				nextText: 47
			}
		]
	},
	{
		id: 47,
		text: '"he said that he is in love with me and that he doesnt want to kill me too, so i should stay in the bedroom."',
		options: [
			{
				text: "wow...",
				nextText: 48
			}
		]
	},
	{
		id: 48,
		text: '"yes, i swear, that whats happend... please dont tell on me tamar!"',
		options: [
			{
				text: "but that's a crime-",
				nextText: 49
			}
		]
	},
	{
		id: 49,
		text: '"i will offer you a bribe then."',
		options: [
			{
				text: "OOoooOOooo what is it?",
				nextText: 50
			}
		]
	},
	{
		id: 50,
		text: '"one video game and two sims expansion packs."',
		options: [
			{
				text: "deal!",
				nextText: 51
			}
		]
	},
	{
		id: 51,
		text: '"yay!"',
		options: [
			{
				text: "yay!",
				nextText: 52
			}
		]
	},
	{
		id: 52,
		text: "game over! go check your steam and origin account!",
		options: [
			
		]
	},
	{
		id: 0,
		text: '<a href="https://scratch.mit.edu/projects/382483544">watch the intro before you start</a>',
		options: [
			{
				text: "start investigating",
				nextText: 1
			}
		]
	}

];

start()
