import './app-info.css'

const AppInfo = (props) => {
    const {employees, raised} = props;
    return (
        <div className='app-info'>
            <h1>Облік співробітників в компанії NNN}</h1>
            <h2>Загальне число співробітників: {employees}</h2>
            <h2>Премію отримають: {raised}</h2>
        </div>
    );
}

export default AppInfo;