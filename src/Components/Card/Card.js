import React, { useState } from 'react';
import './Card.css';
import img from '../../assets/landscape.jpg';
import * as constatns  from '../../constants';

const Card = () => {

    const [categoryName, setCategoryName] = useState('אוכל');
    const [categoryColor, setCategoryColor] = useState('red');


    return (
        <>
            <div className="fieldsUpdater">
                <label for="category-name">{constatns.categoryName_text}</label>
                <select onChange={(e) => setCategoryColor(e.target.value)} id="category-name" name="category-name">
                    <option value="red">{constatns.red_text}</option>
                    <option value="blue">{constatns.blue_text}</option>
                    <option value="green">{constatns.green_text}</option>
                </select>
                <label for="category-bgcolor">{constatns.categoryColor_text}</label>
                <input onChange={(e) => setCategoryName(e.target.value)} type="text" id="category-bgcolor" name="bgcolor" placeholder={constatns.categoryNamePlaceHolder_text}  />
            </div>
            <div className="card">
                <div className="img-wrapper"><img className="img" alt="img" src={img} /></div>
                <div className="card-wrapper">
                    <div className="categoryName" style={{ backgroundColor: categoryColor }}><span>{categoryName}</span></div>
                    <div className="title">{constatns.title}</div>
                    <div className="subtitle">{constatns.sub_title}</div>
                    <div className="author">{constatns.author}</div>
                </div>
            </div>
        </>
    )


}

export default Card;