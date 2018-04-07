import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/itemModel';
import { ListModel } from '../../models/listModel';
// import { Observable } from 'rxjs/Observable';
// import { TestService } from '../../services/test.service'


@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.styl']
})
export class TodolistComponent implements OnInit {

    task:String
    lists:ListModel[]=[]
    //pending:ListModel

    constructor(){
        // this.pending = new ListModel('Pendientes');
        // this.serv = serv;
    }

    ngOnInit() {
        this.generateList()
        // console.log('pendientes',this.pending);
    }

    generateList(){
        this.lists.push(new ListModel('Pendientes'))
        this.lists.push(new ListModel('En proceso'))
        this.lists.push(new ListModel('Terminadas'))
    }

    addTask(){
        let newTask = new ItemModel(this.task)
        this.lists[0].items.push(newTask)
        this.task=''
        // this.serv.addItem(newTask)
    }

    write(e){
        if(e.charCode==13){
            this.addTask()
        }
    }

}
