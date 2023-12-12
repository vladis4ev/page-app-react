import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Gonzales", salary: "1000"},
                {id: 2, name: "Pedro", salary: "2000"},
                {id: 3, name: "Rodrigo", salary: "1500"}
            ]
        }
    }
    deleteItem = (id) =>{
       this.setState(({data})=>{
           return {data: data.filter(item=>item.id!==id)}
       });
    };
    createItem = () =>{

    };

    render() {
        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }
}

export default App;