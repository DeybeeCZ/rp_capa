import { ItemModel } from "./itemModel";

export class ListModel {

    constructor(public name:String,public items:ItemModel[]=[]){ }

    // setName(name):void{
    //     console.log('llega al nombre',name);
    //     this.name=name
    // }
    //
    // setItems(items):void{
    //     console.log('llega a los items',items);
    //     this.items=items
    // }
    //
    // getName():String{
    //     return this.name
    // }
    //
    // getItems():ItemModel[]{
    //     return this.items
    // }
    //
    addItem(item:ItemModel):void{
        this.items.push(item)
    }



}
