import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "../button/index";

afterEach(cleanup);

describe("Button component", () => {
    const props = {
        color: "yellow",
        bg: "blue",
        text: "Click me",
        id: "addToCart",
        children: <span>Child element</span>,
        assignment: "add-to-cart",
        type: "button",
        onClick: jest.fn(),
    };

    test("рендер компонента Button", () => {
        render(<Button />);
    });

    test("рендер компонента Button c пропсами", () => {
        render(<Button {...props} />);
    });

    test("правильные значения по умолчанию для color и bg", () => {
        const { getByRole } = render(<Button />);
        const button = getByRole("button");

        expect(button).toHaveStyle("color: bisque");
        expect(button).toHaveStyle("background-color: brown");
    });

    test("правильное отображение текста и дочерних элементов", () => {
        const { getByText } = render(
            <Button text="Нажми меня">
                <span>Дочерний элемент</span>
            </Button>
        );

        expect(getByText("Нажми меня")).toBeInTheDocument();
        expect(getByText("Дочерний элемент")).toBeInTheDocument();
    });

    test("вызов функции onClick при клике", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick} />);

        fireEvent.click(getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("кнопка Button получает правильный data-атрибут при передаче assignment", () => {
        const assignment = "add-something";
        const { getByRole } = render(<Button assignment={assignment} />);
        const button = getByRole("button");

        expect(button).toHaveAttribute("data-assignment", assignment);
    });

    test("снимок компонента Button", () => {
        const { container } = render(<Button {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
