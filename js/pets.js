class Pet {
    constructor(name,DOB,toy,nick,pic,id){
        this.name = name
        this.DOB = DOB
        this.toy = toy
        this.nick = nick
        this.pic = pic
        this.id = id
    }
}

const Dee = new Pet("Sweet Dee","June 6, 2015","Green Ball", "Baby Dee, Deandra, Deb", "pics/DeeMain.jpg","primary")
const Dennis = new Pet("Dennis","June 6, 2015","Soccer Ball","Big Boy, Denald, B-Bo","pics/DenMain.jpg","secondary")
const Mac = new Pet("Mac","November 2, 2019","Sticks and Bones","Cheese, Queso, Perrita, Quesita","pics/MacMain.jpg","third")
const Artie = new Pet("Artemis","Unknown","Anything I can fit in","Artie, Meow-meow","pics/ArtieMain.jpg","fourth"   )

const pets = [Dee, Dennis, Mac, Artie]

