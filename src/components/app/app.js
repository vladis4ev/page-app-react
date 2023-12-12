import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css'
import {Component} from "react";

const data = [
    {id: 1, name: "Gonzales", salary: "1000"},
    {id: 2, name: "Pedro", salary: "2000"},
    {id: 3, name: "Rodrigo", salary: "1500"}
];

class App extends Component {
    render() {
        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList data={data}/>
                <EmployersAddForm/>
            </div>
        );
    }
}

export default App;