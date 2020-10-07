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

const Dee = new Pet("Sweet Dee","June 6, 2015","Green Ball", "Baby Dee, Deandra, Deb", "pics/DeeMain.jpg","primary",[1,2,3],[4,5,6])
console.log(Dee.react[2])

const Dennis = new Pet("Dennis","June 6, 2015","Soccer Ball","Big Boy, Denald, B-Bo","pics/DenMain.jpg","secondary")


const Mac = new Pet("Mac","November 2, 2019","Sticks and Bones","Cheese, Queso, Perrita, Quesita","pics/MacMain.jpg","third")


const Artie = new Pet("Artemis","Unknown","Anything I can fit in","Artie, Meow-meow","pics/ArtieMain.jpg","fourth"   )

const pets = [Dee, Dennis, Mac, Artie]

