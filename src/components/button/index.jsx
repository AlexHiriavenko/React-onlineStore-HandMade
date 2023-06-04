import s from "./button.module.scss";

function Button(props) {
    const { color, bg, text, id, children, assignment, type, onClick } = props;

    const handleClick = (e) => {
        e.preventDefault();
        onClick(e);
    };

    return (
        <button
            type={type}
            id={id}
            className={s.btn}
            style={{ backgroundColor: bg, color }}
            onClick={handleClick}
            data-assignment={assignment}
        >
            {text}
            {children}
        </button>
    );
}

Button.defaultProps = {
    color: "bisque",
    bg: "brown",
};

export default Button;
