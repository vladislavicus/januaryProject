function Book(data){
    this.name=data.name;
    this.year=data.year;
}

Book.instances={}

Book.convertRow2Obj = function (bookRow) {
    var book = new Book( bookRow);
    return book;
};

Book.createTestData = function () {
    var json=$.getJSON("items.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
    for(i=0;i<json.length;i++){
        Book.instances[i]=new Book(json[i]);


    }
    Book.saveAllToLocalStorage();
    //Book.instances[1]=new Book({name:"Harry Potter",year:1998});
   // Book.instances[2]=new Book({name:"SnowMan",year:2016});
    //Book.instances[3]=new Book({name:"BloodFire",year:1567});
};

Book.saveAllToLocalStorage=function(){
    var bookString="";
    bookString=Json.stringify(Book.instances);
    localStorage.setItem("bookss",bookString);
};
Book.loadAll=function () {
    var bookString="";
    bookString=localStorage.getItem(books);
}