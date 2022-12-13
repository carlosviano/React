import "./Button.css"

export default function Button({url, text}){
    return (
    <button><a href={url}>{text}</a></button>
    );
}
