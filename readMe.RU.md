# onlineStore-HandMade

React app - Online Store - privilege handmade

Technologies:
React - ReactRouterDom - Redux - Context API - Formic - Jest - module.scss

Подробнее о процессе разработки и функционале приложения:

-   функциональные компоненты React, props, hooks, custom hooks.
-   redux, redux-thunk; actions, midllwares, reducers.
-   react-router-dom.
-   добавить/удалить товар в/из корзина , показать счетчик - кол-во добавленных товаров.
-   добавить/удалить товар в/из избранное, показать счетчик - кол-во избранных товаров.
-   в корзине и в форме заказа вывести итоговый подсчет - количество товаров и сумму заказа.
-   отображать на главной странице - весь список товаров, а в избранное и в корзине - отоборажать соответствующие товары.
-   запомнить выбор пользователя и отображать данные в соответствии с состоянием компонентов.
-   хранить данные в локал сторедж : виды товаров и кол-во каждого товара в корзине, избранные товары.
-   вызов модального окна подтверждение/отмена выбора пользователя, показать нужный контент в модальном окне.
-   useFormik.
-   переключение вида отображения контента - галлерея/таблица.
-   тесты.

Описание:
Онлайн магазин в котором вы можете выбирать товары, добавляя их в избранное или в корзину а так же заполнить форму заказа. Пользователь может выбрать способ отображения контента в виде галереи или таблицы. В приложении есть три страницы Домашняя, Избранное, Корзина. В хедере есть счётчики которые отображают актуальное состояние - количество избранных товаров и количество товаров в корзине. Всплывающее модальное окно для подтверждения действия пользователя. Есть форма заказа и валидация этой формы. Товар можно удалить как из корзины так и из избранного. Все данные о товарах в корзине и избранном сохраняются локал storage. В форме и в корзине подсчитывается итоговые количество товаров и сумма заказа.