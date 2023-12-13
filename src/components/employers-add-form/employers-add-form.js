import './employers-add-form.css';
import {Component} from 'react';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            salary: ''
        });
    };

    render() {
        const {name, salary} = this.state;
        const {onCreate} = this.props;

        return (
            <div className="app-add-form">
                <h3>Додати нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Ім'я?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={() => +salary > 0 && name.length >= 3 && onCreate({name, salary})}>
                        Додати
                    </button>
                </form>
            </div>
        )
    }
};

export default EmployersAddForm;