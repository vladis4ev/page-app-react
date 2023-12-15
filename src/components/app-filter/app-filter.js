import './app-filter.css'

const AppFilter = ({onSelectFilter, filter}) => {

    const buttonsData = [
        {name: 'all', label: 'Усі співробітники'},
        {name: 'raise', label: 'На підвищення'},
        {name: 'bonus', label: 'Премію отримують'},
        {name: 'salary', label: 'З/П більше 1к$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = name === filter;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={()=>onSelectFilter(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    );
};
export default AppFilter;