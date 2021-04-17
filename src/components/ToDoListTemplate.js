import React, { Components } from 'react';
import './css/ToDoListTemplate.css';

const ToDoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="header-wrapper">
                <div className="date-wrapper p_10 bd_b1">
                    <span className="date-input m_r5">DATE.</span>
                    <span className="date-input">2021-04-17</span>
                </div>
                <div className="check-wrapper p_10 bd_b1 flex">
                    <div className="type-check td_50 bd_r1">
                        <input type="checkbox"/>
                        <label>PRIVATE</label>
                    </div>
                    <div className="type-check td_50">
                        <input type="checkbox"/>
                        <label>BUSINESS</label>
                    </div>
                </div>
                <div className="title flex flex-center p_5">
                    TO DO LIST
                </div>
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
}

export default ToDoListTemplate;