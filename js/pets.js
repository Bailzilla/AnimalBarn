class Pet {
    constructor(name,birth,toy,nick,pic,id,resp,react){
        this.name = name
        this.birth = birth
        this.toy = toy
        this.nick = nick
        this.pic = pic
        this.id = id
        this.resp = resp
        this.react = react
    }
}

const Dee = new Pet("Sweet Dee","June 6, 2015","Green Ball", "Baby Dee, Deandra, Deb", "pics/DeeMain.jpg","primary",
["Great choice! Sweet Dee loves going for a ride, just be sure to crack the window so she can feel the breeze",
"Dee howls uncontrollably as you strap on her lead. Away you go, hope you brought the right shoes!",
"Dee is scared as she hears the bath water. She tries to run, but you are able to wrangle her; eventually she calms down and enjoys the warm water."],
["pics/DeeRide.jpg",
"pics/DeeWalk.jpg",
"pics/DeeBath.jpg"])

console.log(Dee.react[2])

const Dennis = new Pet("Dennis","June 6, 2015","Soccer Ball","Big Boy, Denald, B-Bo","pics/DenMain.jpg","secondary",
["As an ambulance siren goes by, Dennis begins to howl from the depth of his chest. Your ear drums are ratteld, but you ultimately walk away okay.",
"Dennis smiles and stays by your side throughout the walk :)",
"Dennis is hesitant at first, but he calms down once he feels the water. Good boy :)"],
["pics/Dennis.jpg",
"pics/side-walk.jpg",
"pics/DenBath.jpg"])


const Mac = new Pet("Mac","November 2, 2019","Sticks and Bones","Cheese, Queso, Perrita, Quesita","pics/MacMain.jpg","third",
["Mac is cautiously excited. She paces back and forth from window to window in the backseat, absorbing everything that comes her way.",
"Mac begins barking as soon as she sees you with her leash. Along the walk she zig-zags across the sidewalk, smelling everything in her path.",
"Mac enjoys the feel of the water and is a trooper through the process."],
["pics/Mac.jpg",
"pics/MacWalk.jpg",
"pics/MacBath.jpg"])


const Artie = new Pet("Artemis","Unknown","Anything I can fit in","Artie, Meow-meow","pics/ArtieMain.jpg","fourth",
["Artie is NOT happy with you. At a red light she cralwls into your lap and goes to the bathroom :/",
"Artie may not do collars, but she is a willing follower in a walk around the block. She stalks 10 yards behind you, lurking from porch to porch.",
"Artie cleans herself, and is therefore above being bathed by a mere human. She uses her elusiveness to disapear."],
["pics/ArtieCar.jpg",
"pics/Artie.jpg",
"pics/Artie2.jpg"])

const pets = [Dee, Dennis, Mac, Artie]

