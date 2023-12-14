import './app-filter.css'

const AppFilter = (props) => {
    const {onUpdateFilter, filters: {increase, salary}} = props;
    const btnClass = "btn btn-";
    const lightClass = "light";
    const outlineClass = "outline-light";
    return (
        <div className='btn-group'>
            <button
                className={btnClass + (!increase && !salary ? lightClass : outlineClass)}
                type="button"
                onClick={onUpdateFilter}>
                Усі співробітники
            </button>
            <button
                className={btnClass + (increase ? lightClass : outlineClass)}
                type="button"
                data-toggle="increase"
                onClick={onUpdateFilter}>
                На підвищення
            </button>
            <button
                className={btnClass + (salary ? lightClass : outlineClass)}
                type="button"
                data-toggle="salary"
                onClick={onUpdateFilter}>
                З/П більше 1к$
            </button>
        </div>
    );
};
export default AppFilter;