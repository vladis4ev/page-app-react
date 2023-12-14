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
                {id: 1, name: "Gonzales", salary: "1000", increase: false, raise: false},
                {id: 2, name: "Pedro", salary: "2000", increase: false, raise: false},
                {id: 3, name: "Rodrigo", salary: "1500", increase: false, raise: false}
            ],
            term: '',
            filter: '', // todo: refactor on only one field for filters, record filter's name, remove increase and salary from data
            increase: false,
            salary: false
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)}
        });
    };

    createItem = (item) => {
        this.setState(({data}) => {
            const id = Math.max(...data.map((item => (item.id)))) + 1;
            return {data: [...data, {id, ...item}]}
        });
    };

    toggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    };

    onUpdateSearch = (term) => {
        this.setState({term})
    };

    onUpdateFilter = (e) => {
        const attribute = e.currentTarget.getAttribute("data-toggle");
        let filter = {increase: false, salary: false};
        attribute && (filter[attribute] = true);
        this.setState(filter);
    };

    searchEmp = (data, term, increase, salary) => {
        if (increase) {
            return data.filter((item) => {
                return item.increase
            })
        }
        if (salary) {
            return data.filter((item) => {
                return +item.salary >= 1000
            })
        }
        if (term.length === 0) {
            return data;
        }
        // todo: take account using filters and search
        return data.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    };

    render() {
        const {data, term, increase, salary} = this.state;
        const raised = data.filter((item) => item.raise).length;
        const visibleData = this.searchEmp(data, term, increase, salary);

        return (
            <div className='app'>
                <AppInfo
                    employees={data.length}
                    raised={raised}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}
                        filters={{increase, salary}}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.toggleProp}/>
                <EmployersAddForm
                    onCreate={this.createItem}/>
            </div>
        );
    }
}

export default App;