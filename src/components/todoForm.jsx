import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const TodoForm = (props) => (
  <Form onSubmit={props.handleAdd}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridTodo">
        <Form.Label>やること</Form.Label>
        <Form.Control name="title" type="text" placeholder="やることを入力してください" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridDate">
        <Form.Label>いつまで？</Form.Label>
        <Form.Control type="date" id="limitDate"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridTag">
        <Form.Label>タグ</Form.Label>
        <Form.Control as="select" name="tag">
          <option value="研究用">研究用</option>
          <option value="学校用">学校用</option>
          <option value="日常用">日常用</option>
          <option value="ゲーム用">ゲーム用</option>
          <option value="人生用">人生用</option>
        </Form.Control>
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>補足</Form.Label>
        <Form.Control name="subtitle" type="text"/>
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
      追加
    </Button>
  </Form>
);

export default TodoForm;