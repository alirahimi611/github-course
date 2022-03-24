console.log("hi world");

class print{
    constructor(a){
        this.chop = a;
    }

    printConsole(){
        console.log(this.chop);
    }
}

new print("ali").printConsole();