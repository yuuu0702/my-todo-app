import React from 'react';

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} 
        <div class="siimple--float-right">
          <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
          <input type="checkbox" id="myCheckbox" className="siimple-checkbox siimple-checkbox--error siimple-hover"></input>
        </div>
      </li>
    })};
  </ul>
);

export default List;