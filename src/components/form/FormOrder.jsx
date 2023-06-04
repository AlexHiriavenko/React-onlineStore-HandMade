import s from "./formOrder.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cartCardsMiddleware } from "../../redux/middlewares/cartCardsMiddleware.js";
import Button from "../button";
import { messageOrderSuccessAction } from "../../redux/actions/orderSuccessAction";

function FormOrder() {
    const cart = useSelector((state) => state.cartCardsReducer.cartCards);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            age: "",
            adress: "",
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("This field is required")
                .matches(
                    /^[^\d!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/~`-]+$/,
                    "Name can only contain letters, spaces, and hyphens"
                ),
            lastName: Yup.string()
                .required("This field is required")
                .matches(
                    /^[^\d!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/~`-]+$/,
                    "Name can only contain letters, spaces, and hyphens"
                ),
            age: Yup.number()
                .required("This field is required")
                .typeError("Age must be a number")
                .test("validAge", "Age must be at least 18", (value) => value >= 18),
            adress: Yup.mixed().required("This field is required"),
            phoneNumber: Yup.string()
                .required("This field is required")
                .matches(/^[\d+-]+$/, "Phone number can only contain numbers, +, and -")
                .min(10)
                .max(13),
        }),
        onSubmit: (values) => {
            console.log({
                clientInfo: values,
                order: cart,
            });
            dispatch(cartCardsMiddleware([]));
            dispatch(messageOrderSuccessAction(true));
            setTimeout(() => dispatch(messageOrderSuccessAction(false)), 3000);
        },
    });

    const handleReset = () => formik.resetForm();

    return (
        <>
            <form className={s.orderForm}>
                <label htmlFor="" className={s.orderFormLabel + " " + s.orderFormTitle}>
                    Order Form:
                </label>
                <input
                    className={s.orderFormInput}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                    <label htmlFor="name" className={s.formError}>
                        {formik.errors.name}
                    </label>
                )}
                <input
                    className={s.orderFormInput}
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                    <label htmlFor="lastName" className={s.formError}>
                        {formik.errors.lastName}
                    </label>
                )}
                <input
                    className={s.orderFormInput}
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={formik.values.age}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.errors.age && formik.touched.age && (
                    <label htmlFor="age" className={s.formError}>
                        {formik.errors.age}
                    </label>
                )}
                <textarea
                    className={s.orderFormInput}
                    type="text"
                    placeholder="Adress"
                    name="adress"
                    value={formik.values.adress}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.errors.adress && formik.touched.adress && (
                    <label htmlFor="adress" className={s.formError}>
                        {formik.errors.adress}
                    </label>
                )}
                <input
                    className={s.orderFormInput}
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <label htmlFor="phoneNumber" className={s.formError}>
                        {formik.errors.phoneNumber}
                    </label>
                )}
                <label className={s.orderFormLabel}>
                    You have {cart.reduce((acc, val) => acc + val.quantity, 0)} items in your cart
                </label>
                <label className={s.orderFormLabel}>
                    Total Order Value:{" "}
                    <span className="fs-5">
                        {cart.reduce((total, item) => total + +item.sum, 0)} тугриков
                    </span>
                </label>
                <div className={s.btnGrpoup}>
                    <Button type="submit" text="Confirm" onClick={formik.handleSubmit} />
                    <Button text="Reset form" onClick={handleReset} />
                </div>
            </form>
        </>
    );
}

export default FormOrder;
