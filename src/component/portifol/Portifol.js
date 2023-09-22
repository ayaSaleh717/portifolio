import React from 'react'
import './portifol.css'
import Menu from './Menu'
import { useState } from 'react'



const Portifol = () => {
  const [items, setItems] = useState(Menu) 
  const filterItem = (categoryItem) => {
    const updateItem = Menu.filter((curElem) =>{
      return curElem.category===categoryItem
    })
  setItems(updateItem);
  }

  return (
    <section className='work container section' id='work'>
      <h2 className='section_title'>Recent Works</h2>
      <div className='work_filter'>
          <span className='work_item' onClick={() => setItems(Menu)}>Everything</span>
          <span className='work_item' onClick={() => filterItem("Creative")}>Creative</span>
          <span className='work_item' onClick={() => filterItem("Art")}>Art</span>
          <span className='work_item' onClick={() => filterItem("Branding")}>Branding</span>
        </div>
      <div className='work_container grid'>
        {items.map((elem) =>{
          const{ id,image , title,category}= elem;
          return(
          <div className='work_card' key={id}>
            <div className='work_thumbnail'>
              <img src={image} alt="" className='work_img'/>
              <div className='work_mask'></div>
            </div>
            <span className='work_category'>{category}</span>
            <h3 className='work_title'>{title}</h3>
            <a href='#' className='work_button'>
              <i className='icon-link work_button-icon'></i>
            </a>

          </div>
        )
        })}
      </div>
    </section>
  )
}

export default Portifol