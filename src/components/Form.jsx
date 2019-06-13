import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <div class="siimple-tabs siimple-tabs--boxed">
      <div class="siimple-tabs-item siimple-tabs-item--selected siimple--color-white">学校用</div>
      <div class="siimple-tabs-item siimple--color-white">研究用</div>
      <div class="siimple-tabs-item siimple--color-white">人生用</div>
    </div>
      <label className="siimple-label siimple--color-white">ToDoを入力:</label>
      <input name="title" type="text" className="siimple-input"/>
      <input type="submit" value="追加" className="siimple-btn siimple-btn--teal"/>
  </form>
);

export default Form;