import "./themes.css"

export default function Themes(){

    function checkTheme(){
        let span = document.querySelector("i");
        let body = document.querySelector("body");

        if (span.getAttribute("class") == "fa-solid fa-sun"){
            span.setAttribute("class", "fa-solid fa-moon");
            body.style.backgroundColor = "black";
            body.style.color = "white";

        }else {
            span.setAttribute("class", "fa-solid fa-sun");
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    }

    return (
        <div className="themes">
            <i className="fa-solid fa-sun" onClick={checkTheme}></i>
        </div>
    )
}