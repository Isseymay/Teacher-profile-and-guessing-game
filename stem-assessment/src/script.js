var person, position, bio, advice, teachers;
//person={"pname":"Mrs. Fawcett","common":"5","subjects":"History and Geography","bio":"Likes: Ancient Egypt and Acient Greece. Hates: The rain","adv":"Make sure you are polite and respectful to your peers and teachers",  "other titles for next year":null,  "imgpath":"/images/fawcett.png"};

teachers=[{"preffered name":"Mrs. Fawcett",
	"common":"5",
	"subjects":"History and Geography",
	"bio":"Likes: Ancient Egypt and Acient Greece. Hates: The rain",
	"adv":"Make sure you are polite and respectful to your peers and teachers",
	"other titles for next year":null
},
{"preffered name":"Miss. Hoy or Hoy",
	"common":"2",
	"subjects":"English",
	"bio":"Love chocolate, trashy tv and reading. Dislike people talking when I'm talking, disrespect and cheese. I have three beautiful pets; a puppy named Coco and 2 cats- Cinny and CC. I change my favourite color daily",
	"adv":"Listen, be kind and make new friends",
	"other titles for next year":"Year 8 advisor, Literacy Coordinator"
},
{"preffered name":"Miss. Leung",
	"common":"9",
	"subjects":"Year 7-10 science and chemistry",
	"bio":"My favourite colour is purple and I like cats",
	"adv":"It's OK to feel nervous. Make the most of every opportunity. Make new friends. Be open to new ideas",
	"other titles for next year":"Head teacher of Technology things and gats"
},
{"preffered name":"Miss. Shiels",
	"common":"4",
	"subjects":"English",
	"bio":"Favourite NRL team is the Sydney roosters.Likes: All animals- especially dogs. Favourite colour is blue",
	"adv":"Work hard and enjoy the challenge. Make new friends",
	"other titles for next year":null
},
{"preffered name":"Miss. Smith",
	"common":"7",
	"subjects":"Junior science and biology",
	"bio":"I love sport! In particular I love to snowboard and play AFL",
	"adv":"",
	"other titles for next year":"Year 7 Advisor (your advisor)"
},
{"preffered name":"Ms. Merchant",
	"common":"2",
	"subjects":"English",
	"bio":"I like it when people smile and appreciate the little things. I don't like loud noises. I prefer it to be a cold day rather than a hot day. I drink alot of coffe. I have a dog called Max who is the greatest dog ever and my greatest joy. I'm really bad at reverse parking but really good at assembling furniture and equiptment. I have travelled alot and have seen many wonderful places, but never learnt to speak another language - I wish I had.",
	"adv":"School should be a place to learn - not just about school subjects, but about life. Learn from everything you experience and use that knowledge to become a better person, a better friend, a better son or daughter, brother or sister and a compassionate and caring member of society.you need to learn who you are so you can become a strong, resilient and honourable individual with self respect and a sense of purpose. Be more than you think you can be.",
	"other titles for next year":"head teacher of Teaching and learning"
},
{"preffered name":"Ms. Della Marta",
	"common":"6",
	"subjects":"Learning and Support",
	"bio":"Likes: dogs and favourite colour is blue",
	"adv":"Make friends with people who bring out the best in you",
	"other titles for next year":null
},
{"preffered name":"Mr. Shum",
	"common":"6",
	"subjects":"Mathematics",
	"bio":"Likes: Church, training and dogs",
	"adv":"Enjoy camp, make friends, respect your teachers",
	"other titles for next year":null
},
{"preffered name":"Mr. Hogan",
	"common":"9",
	"subjects":"Technology, Engineering Studies and Industrial Technology - Engineering",
	"bio":"Is a Sydney Swans supporter",
	"adv":"",
	"other titles for next year":"Computer Coordinator"
},
{"preffered name":"Ms. Kemkemian",
	"common":"5",
	"subjects":"History and Geography",
	"bio":"Likes: food, walking and video games. Pets:two border collies. Favourite colour is blue",
	"adv":"listen carefully and don't stress out too much",
	"other titles for next year":null
},
{"preffered name":"Miss. Phillips",
	"common":"10",
	"subjects":"Technology Mandatory, Food Tech and Textiles, Design and Technology",
	"bio":"I love the colour green, spring days and sleeping in.",
	"adv":"Wear your leather shoes!!",
	"other titles for next year":"Stage 4 Co-Ordinator TAS"
},
{"preffered name":"Ms. Yuan",
	"common":"2",
	"subjects":"Japanese",
	"bio":"I like eating and making food",
	"adv":"Enjoy languages!",
	"other titles for next year":null
},
{"preffered name":"Ms. Armitage",
	"common":"4",
	"subjects":"English",
	"bio":"Likes:coffee, reading, and Harry Potter. Dislikes: rudeness, and people who do not care about their environment. I have two cats and my favourite colours are mustard, navy, and forest green.",
	"adv":"Be yourself!",
	"other titles for next year":"Year 7 Advisor (your advisor), GATS Coordinator"
},
{"preffered name":"Mrs. Easterbrook",
	"common":"10",
	"subjects":"TAS-Marine and Aquaculture Technology, SDD, IPT and hospitality",
	"bio":"Loves food, shopping, gaming and nerdy stuff. Favourite colour Red. Pet bird named Amy (Australian Ecletus Parrot). Hates horror movies and spiders",
	"adv":"Ask questions if you are unsure, get involved in everything",
	"other titles for next year":"Year 9 Advisor"
},
{"preffered name":"Miss. Hempstead",
	"common":"10",
	"subjects":"Food Tech, Textiles and CAFS",
	"bio":"",
	"adv":"",
	"other titles for next year":"Year 12 assistant year advisor"
},
{"preffered name":"Mr. Bennets",
	"common":"3",
	"subjects":"History and Geography",
	"bio":"Likes: Football(soccer), motorcycles, History and Geography",
	"adv":"Keep a can do attitude and seek advice whenever you are having questions",
	"other titles for next year":null
},
{"preffered name":"Mrs. Tolhurst",
	"common":"2",
	"subjects":"English/ EALD",
	"bio":"Likes: reading, swimming, tennis. Dislikes: crawling insects. Favourite colour: blue.",
	"adv":"Take time to get around the school. It's very big. Ask for help. Have extra copies of your timetable.",
	"other titles for next year":"EALD Coordinator and International Student Coordinator"
},
{"preffered name":"Mr. Basak",
	"common":"9",
	"subjects":"TAS Courses",
	"bio":"Likes: Martial arts, woodwork and food. I have a small dog. Favourite colour: orange and blue",
	"adv":"Be respectful to one another and your teachers at all times as this will make your life in highschool a lot easier.",
	"other titles for next year":"Head of TAS & VET faculty"
},
{"preffered name":"Miss. K",
	"common":"4",
	"subjects":"English",
	"bio":"Likes: Travelling, reading, watching movies etc. Dislikes: Brussel sprouts",
	"adv":"Don't be nervous. Everyone in your year is new aswell",
	"other titles for next year":null
},
{"preffered name":"Ms. Nelmes",
	"common":"4",
	"subjects":"English and Drama",
	"bio":"Likes: A good book, Mexican food, dogs and swimming. Favourite colour: Light blue.",
	"adv":"Be kind, and if you can you must",
	"other titles for next year":null
},
{"preffered name":"Mr. Slocum",
	"common":"1",
	"subjects":"Drama, Englsh and Support teaching",
	"bio":"I've been teaching at Concord full time since 2005. Before that, I was a casual at Concord for abput 7 years. And before full time teaching I did many years of proffessional acting work, cab driving, trivia quiz hosting and lots of other jobs. With age comes experience! I like weird people, chatterboxes, and those who follow their own path and avoid fashions/trends.",
	"adv":"Try everything at least once. And don't care what other students think about you",
	"other titles for next year":null
},
{"preffered name":"Mr. Zarkovic",
	"common":"9",
	"subjects":"Computing & Technology",
	"bio":"I like tennis, cars and traveling",
	"adv":"Do not be afraid to meet new people/friends",
	"other titles for next year":null
},
{"preffered name":"Mrs. Santos",
	"common":"5",
	"subjects":"History and Geography",
	"bio":"Likes: Star wars",
	"adv":"",
	"other titles for next year":"Prefect Coordinator"},{"preffered name":"Mrs. Laggis",
	"common":"6",
	"subjects":"Maths and Science",
	"bio":"Love coffee, favourite colour is red, dislike using paper",
	"adv":"Awayls treat the people around in the manner that you would like them to treat you",
	"other titles for next year":null},
{"preffered name":"Ms Bean",
	"common":"7",
	"subjects":"Junior Science, Senior Chemistry and Science Extension",
	"bio":"I have two cats and a parrot. I like to do lots of experiments both in science and other things. I like making things and painting.",
	"adv":"Learn how to study and make sure that you choose things because you are interested in things not because your friends are.",
	"other titles for next year":"Assistant Year 9 advisor"},
{"preffered name":"Ms Taing",
	"common":"4",
	"subjects":"English",
	"bio":"Love the Harry Potter novels and Italian food. My favourite colour is green and like to spend my time reading, watching movies and being outside",
	"adv":"High School is exciting and can be overwhelming. Make sure that you take the time to enjoy it, make new friends, be active in your learnings and building positive relationships with others.",
	"other titles for next year":"Head teacher of English"},
{"preffered name":"Mrs Criston",
	"common":"10",
	"subjects":"Textiles / Food / Timber / Computing",
	"bio":"Likes: Sewing!",
	"adv":"Enjoy!",
	"other titles for next year":null},
{"preffered name":"Mr. Sloane",
	"common":"7",
	"subjects":"Science",
	"bio":"Likes: animals, plants and all things nature. Dislikes: Lazy people. Pets; Dog - Bella, Cat - Kiro, and Koi fish. Favourite colour: Pink and green equal first.",
	"adv":"Get involved with as many things as you can, Value your education, Be respectful to all people all of the time",
	"other titles for next year":"Head Teacher Science"},
{"preffered name":"Mr. Munday",
	"common":"8",
	"subjects":"PDHPE/ Technology/ Research Skills and Library Below",
	"bio":"Likes: Chelsea Football Club. Favourite colour: Blue",
	"adv":"Visit the library!",
	"other titles for next year":null},
{"preffered name":"Ms Rubessa",
	"common":"2",
	"subjects":"French, Italian, English",
	"bio":"Love all things multicultural. Hate racism. Vegetarian. Environmentalist. Big on reusing and recycling",
	"adv":"Look after the natural world; be a just and caring global citizen",
	"other titles for next year":null}]

for person in techers;{}

document.getElementById("pname").innerHTML=`<strong>Name:</strong> ${person.pname}`;
     document.getElementById("common").innerHTML=`<strong>Common:</strong> ${person.common}`;
if (person.position == null){position="None";}
else {position = person.position;}
document.getElementById("position").innerHTML=`<strong>Position:</strong> ${position}`;
     document.getElementById("subjects").innerHTML=`<strong>Subjects:</strong> ${person.subjects}`;
   
if (person.bio == null){bio="None"}
else {bio = person.bio;}     document.getElementById("bio").innerHTML=`<strong>Bio:</strong> ${bio}`;

if (person.advice == null){advice="None";}
else {advice = person.advice;}
document.getElementById("advice").innerHTML=`<strong>Advice:</strong> ${advice}`;
     document.getElementById("profile").src=`${person.imgpath}`;
