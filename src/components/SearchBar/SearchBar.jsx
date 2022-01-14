import './SearchBar.scss';
import search from '../../assets/search.png';


const SearchBar = (props) => {

    return (
        <>
            <form className="search" onSubmit={props.submitHandler}>
                <label className="search__label" htmlFor="search"></label>
                <button className='search__button' type='submit'>
                    <img className="search__icon-search" src={search} alt='Search icon' />
                </button>
                <input type="search" className="search__input" placeholder="Search for games" id="search" name="search" />
            </form>
            <div className="sort-game">
                <select className="sort-game__select-option">
                    {props.sortDetails[0].map((detail, i) => {
                        return (
                            <option className="sort-game__option" value={detail} key={i}>{detail}</option>
                        )
                    })}
                </select>
                <select className="sort-game__select-option">
                    {props.sortDetails[1].map((detail, i) => {
                        return (
                            <option className="sort-game__option" value={detail} key={i}>{detail}</option>
                        )
                    })}
                </select>
                <select className="sort-game__select-option">
                    {props.sortDetails[2].map((detail, i) => {
                        return (
                            <option className="sort-game__option" value={detail} key={i}>{detail}</option>
                        )
                    })}
                </select>
            </div>

        </>
    );
};

export default SearchBar;