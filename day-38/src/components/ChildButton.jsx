
export default function ChildButton({onClick, children}){
    return (
        <button onClick={onClick} >
            {children}
        </button>
    )
}