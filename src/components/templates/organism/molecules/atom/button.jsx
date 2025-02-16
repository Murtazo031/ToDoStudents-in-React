import "./atoms_style.css";

export default function Button({Children,br,brRadius,bgColor,btnOutline,btnShadow,btnOnclick,btnColor,p}){
    return <button style={{
        border:br,
        borderRadius:brRadius,
        color:btnColor,
        backgroundColor:bgColor,
        outline:btnOutline,
        boxShadow:btnShadow,
        padding:p
    }}
    onClick={btnOnclick}>{Children}</button>
}