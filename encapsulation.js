var aDog = { //behave like a dog
    makeNoise: function() {
        console.log("woof!");
    }
}
var aCat = { //behave like a cat
    makeNoise: function() {
        console.log("Meewww!");
    }
}
var myAnimal = { //our main object
    makeNoise: function() {
        console.log("cri... cri....")
    },
    speak: function() {
        this.makeNoise()
    }
}
myAnimal.speak() //no change, so.. crickets!
myAnimal.speak.apply(aDog) //this will print "woof!"
//switch behavior
myAnimal.speak.apply(aCat) //this will now print "Meewww!"