import './app-filter.css'

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button
                className="btn btn-light"
                type="button">
                Усі співробітники
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                На підвищення
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                З/П більше 1к$
            </button>
        </div>
    );
};
export default AppFilter;