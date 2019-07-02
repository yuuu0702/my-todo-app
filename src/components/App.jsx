import React, { Component } from 'react';
import TodoForm from './todoForm';
import List from  './List';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      show: false,
      level: 1,
      expA: 0,
      expB: 10,
      countDone: 0,
      nextLevel: 10
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // データ保存
  handleAdd(e){
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push(
      {
        title: e.target.title.value,
        subtitle: e.target.subtitle.value,
        limitDate: e.target.limitDate.value,
        tag: e.target.tag.value
      }
    );
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo});
    // inputのvalueを空に
    e.target.title.value = '';
    e.target.subtitle.value = '';
  }

  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    //modalの表示
    this.setState({ show: true });

    //レベルアップ機能の処理
    let level = this.state.level;
    let nextLevel = this.state.nextLevel;
    let expA = this.state.expA;

    expA += 10;

    if (expA >= nextLevel){
      level++;
      nextLevel = level * 15 + expA - 20;
    }

    this.setState({ level });
    this.setState({ nextLevel });
    this.setState({ expA });
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
              src="holder.js/800x400?text=２時間&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>このスライドを実装するのにかかった時間です</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>お疲れさまです！</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h1>レベルが上がりました！Lv.{this.state.level}</h1>
                <h2>現在の経験値:{this.state.expA}</h2>
                <h3>次のレベルまであと{this.state.nextLevel}必要です</h3>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
        </Modal>

        <div className="main-wrapper">
          <h1 className="hometitle">Input TODO</h1>
          <TodoForm handleAdd={this.handleAdd}/>
          <div className="siimple-rule"></div>
          <List 
            todos={this.state.todo} 
            handleRemove={this.handleRemove} 
            handleShow={this.handleShow}
          />
        </div> 
      </>
    )
  }
}