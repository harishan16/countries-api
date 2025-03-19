import './MainDisplay.scss';

function MainDisplay () {
    console.log("dbsjbck");

    return (
        <section className="display">
            <section className="display__search">
                <input type="text" className="display__search-box" placeholder="Search a country"></input>
            </section>
            <section className="display__filter">
                <select className="display__filter-dropdown">
                    <option value="">1</option>
                </select>

            </section>
            <section className="display__items">

            </section>
        </section>
    )
}

export default MainDisplay