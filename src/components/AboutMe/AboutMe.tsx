import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import './AboutMe.css'

const AboutMe = () => {

    return (
        <div className="aboutMeContainer">
            <h4 className="aboutMeTitle"> About me </h4>
            <div className="aboutMeBlocks">
                <div className="aboutMeDescription">
                    <ListGroup className="aboutMeP">
                    <p> Кратко обо мне</p>
                        <ListGroup.Item style={{borderRadius: '6px'}}>
                            Меня зовут Роман, мне 24 года и я frontend разработчик.
                            Есть высшее образование, но не техническое. В программировании я самоучка, если можно выразиться так.
                            Я не покупал ни одного курса, все что я умею - итог самостоятельной работы.
                            Решил стать программистом, потому что от процесса получаю огромное удовольствие.&nbsp; 
                            <b>Опыт коммерческой разработки в команде - полгода.</b> 
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="aboutMeList">
                    <p> Мои навыки:</p>
                    <ListGroup numbered>
                        <ListGroup.Item>HTML - уверенно знаю и использую</ListGroup.Item>
                        <ListGroup.Item>CSS - уверенно знаю. Чаще использую библиотеки SCSS и StyledComponents (это приложение - исключение из правил)</ListGroup.Item>
                        <ListGroup.Item>JavaScript - также применяю постоянно, без него никуда</ListGroup.Item>
                        <ListGroup.Item> ReactJS - уверенное применение </ListGroup.Item>
                        <ListGroup.Item>Redux - все прилоежния у меня с использованием redux. 
                            Чаще всего redux + redux-thunk. На redux-saga пишу очень редко. Пройду отбор у вас - буду сагу использовать чаще. 
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            TypeScript - знаю на начально - среднем уровне. Все без исключения проекты на TS. При этом моих навыков использования TS хватает для всех моих задач
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            NextJS - на нынешнем месте работы 2 приложения на NextJS. Знания фреймворка базовые в части роутинга, рендеринга и тп. 
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            StyledComponents и SCSS - всю стилизацию делаю с помощью них. Зависит от задач на проекте, а если приложение мое - то от настроения. Также умею делать верстку
                            с подходом pixel perfect и mobile first.
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            Также использую Router-dom, axios, bootstrap, react-hook-form, yandex-map и прочие библиотеки для reactJs.
                        </ListGroup.Item>
                        <ListGroup.Item> 
                           Git -  Умею использовать на уровне, который позволяет работать в команде.
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            Figma - умею верстать с макетов, а также верстать логотипы, кнопки и другие небольшие элементы.
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}

export default AboutMe