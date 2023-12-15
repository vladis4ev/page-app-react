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
                {id: 1, name: "Gonzales", salary: "1000", bonus: false, raise: false},
                {id: 2, name: "Pedro", salary: "2000", bonus: false, raise: false},
                {id: 3, name: "Rodrigo", salary: "1500", bonus: false, raise: false}
            ],
            term: '',
            filter: 'all',
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

    onSelectFilter = (filter) => {
        this.setState({filter});
    };

    searchEmp = (data, term) => {
        if (term.length === 0) {
            return data;
        }
        return data.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    };

    useFilter = (data, filter) => {
        switch (filter) {
            case 'raise':
            case 'bonus':
                return data.filter((item) => {
                    return item[filter]
                });
            case 'salary':
                return data.filter((item) => {
                    return +item.salary >= 1000
                });
            default:
                return data;
        }
    };

    render() {
        const {data, term, filter} = this.state;
        const raised = data.filter((item) => item.raise).length;
        const visibleData = this.useFilter(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo
                    employees={data.length}
                    raised={raised}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onSelectFilter={this.onSelectFilter}
                        filter={filter}/>
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