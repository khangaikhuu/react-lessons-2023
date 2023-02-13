import { useTheme } from "../context/ThemeContext"

export default function Header(){

    const { theme,  setTheme} = useTheme()

    function handleSelectChange(e){
        e.preventDefault();
        setTheme(e.target.value)
        console.log(theme)
    }

    return(
        <div className="header-container">
            <p>Header</p>
            <select name="theme" onChange={handleSelectChange} defaultValue={theme} >
                <option value="dark">
                    Dark
                </option>
                <option value="light">
                    Light
                </option>
                <option value="green">
                    Green
                </option>
            </select>
        </div> 
    )
}