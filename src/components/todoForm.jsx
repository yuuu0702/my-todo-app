import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const TodoForm = (props) => (
  <Form onSubmit={props.handleAdd}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>やること</Form.Label>
        <Form.Control name="title" type="text" placeholder="やることを入力してください" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>いつまで？</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>タグ</Form.Label>
        <Form.Control as="select">
          <option>研究用</option>
          <option>学校用</option>
          <option>日常用</option>
          <option>ゲーム用</option>
          <option>人生用</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
      追加
    </Button>
  </Form>

  /*
  <form className="siimple-form" onSubmit={props.handleAdd}>
      <label className="siimple-label siimple--color-white">ToDoを入力:</label>
      <input name="title" type="text" className="siimple-input"/>
      <input type="submit" value="追加" className="siimple-btn siimple-btn--teal"/>
  </form>
  */
);

export default TodoForm;