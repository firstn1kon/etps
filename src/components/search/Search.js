const Search = ({setTerm, disable}) => {

    const onChange = (e) => {
        setTerm(e.target.value.toLowerCase())
    }
    return (
        <div className={disable !== "main"? "header__search header__search_active": 'header__search'}>
        <input disabled={disable !== "main"? true: false} onChange={(e) => onChange(e) } type="text" placeholder={disable !== "main"? "поиск недоступен": 'Поиск по ЭТП'}></input>
    </div>
    )
}
export default Search