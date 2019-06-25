import React, { Component } from 'react';
import TodoForm from './todoForm';
import List from  './List';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // データ保存
  handleAdd(e){
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value});
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo});
    // inputのvalueを空に
    e.target.title.value = '';
  }

  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand size='lg' href="#home">TodoList for React</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://sano-lab.jp/">所属研究室ホームページ</Nav.Link>
          </Nav>
          <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=React&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Reactを使用しました</h3>
              <p>ReactとはJavaScriptのライブラリです</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=React-bootstrap&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>デザインはReact-bootstrapを使用しました</h3>
              <p>React-bootstrapはreactに対応しているCSSフレームワークです</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=３時間&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>このスライドを作るのにかかった時間です</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="main-wrapper">
          <h1 classNmae="hometitle">Input TODO</h1>
          <TodoForm handleAdd={this.handleAdd}/>
          <div className="siimple-rule"></div>
          <List todos={this.state.todo} handleRemove={this.handleRemove}/>
        </div> 
      </>
    )
  }
}