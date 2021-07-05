const { set } = require("vue/types/umd");

let book={
    year_:2017,
    edition:1
};
Object.defineProperties(book,"year",{
    get(){
        return this.year_;
    },
    set(newValue){

    }
});
