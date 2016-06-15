import React from 'react';

export Todo = props => 
  const { todo } = props; //es6 object destructuring
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
