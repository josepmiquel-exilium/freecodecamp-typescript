// When you declare a class as abstract you cannot create new objects
// with this class.

abstract class TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime():number {
        // some complex calculation
        return 8
    }
}

// but when can create a object from the class who is inheriting
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst:number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const hc = new Instagram("test", "Test", 3)

hc.getReelTime()
