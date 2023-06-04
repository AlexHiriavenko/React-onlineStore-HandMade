export default function Star({ fill, stroke, onClick }) {
    return (
        <svg
            onClick={onClick}
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 51 48"
        >
            <title>Five Pointed Star</title>
            <path
                fill={fill}
                stroke={stroke}
                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
            />
        </svg>
    );
}

Star.defaultProps = {
    fill: "#ffffff",
    stroke: "",
};
