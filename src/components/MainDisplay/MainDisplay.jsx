import CountryCard from '../CountryCard/CountryCard';
import './MainDisplay.scss';

// eslint-disable-next-line react/prop-types
function MainDisplay ({list}) {
    console.log(list);

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
                <CountryCard list = {list}></CountryCard>

            </section>
        </section>
    )
}

export default MainDisplay