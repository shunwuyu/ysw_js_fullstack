import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-CN');

class Note extends Component {
  state = {
    entity: this.props.entity,
    text: this.props.entity.text,
    open: false,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    destoryEntity: this.props.destoryEntity
  }
  updated () {
    return moment(this.state.updated).fromNow()
  }
  toggle () {
    this.setState((prevState) => {
      return {
        open: !prevState.open 
      }
    })
  }
  header () {
    return _.truncate(this.state.text, { length: 30 }) || '新建笔记';
  }
  render () {
    return (
      <div className="item">
        <div className="meta">
        {this.updated()}
        </div>
        <div className="content">
          <div className="header" onClick={this.toggle.bind(this)}>
            { this.header() }
          </div>
          <div className="extra">
            { this.words() }字
            {this.state.open && <i className="right floated trash  icon" onClick={() => this.state.destoryEntity(this.state.entity)}></i>}
          </div>
        </div>
      </div>
    )
  }
  words () {
    return this.state.text.length
  }
}

export default Note