import React, { Component } from 'react'
import BasePage from '../../../basePage/basePage'
import ManageTopic from './manageTopic'
import io from "socket.io-client"
import _ from 'lodash'
import moment from 'moment'

export default class mainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            isLoading: false,
            currentTotal: 1,
            resultMsg: '',
            msgColor: false,
            editTopic: {}
        };

        this.socket = io('http://localhost:8000')
        this.socket.on('addUser', data => this.setState({ currentTotal: data.counterUser }))

        this.socket.on('topics', data => {
            this.setState({ topics: data, isLoading: false })
        })

        this.socket.on('resultMsg', data => {
            this.setState({ resultMsg: data.text, msgColor: data.color })
        })

        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleDelete(deleteId) {
        this.socket.emit('topic:delete', { deleteId })
    }

    handleAdd(topicName, content) {
        const newTopic = {
            topicName,
            content,
        }
        this.socket.emit('topic:add', { newTopic })
    }

    handleEdit(topicName, content, id) {
        this.setState({
            editTopic: {}
        })

        const editTopic = {
            topicName,
            content,
        }
        this.socket.emit('topic:edit', { editTopic, id })
    }

    componentWillUnmount() {
        this.socket.off('topics')
        this.socket.off('topic:delete')
        this.socket.off('resultMsg')
        this.socket.off('addUser')
    }

    render() {
        const { _id, name } = this.props.history.location.state.user
        const { topics, isLoading, resultMsg, msgColor, editTopic } = this.state

        if (isLoading) {
            return <h2>Loading ... </h2>
        }

        return (
            <BasePage>
                <div className="flex">
                    <h3 className="font-weight-bold m-2 text-white w-75">Total User: {this.state.currentTotal}</h3>
                    <h3 className="font-weight-bold m-2 text-white w-25">Current User: {name}</h3>
                </div>
                {resultMsg && <h3 className="text-center font-weight-bold"
                    style={{ color: msgColor ? 'green' : 'red' }}>{resultMsg}</h3>}
                <div className="flex flex-row">
                    <ManageTopic title="Add" btnHandle={this.handleAdd} />
                    {!_.isEmpty(editTopic) && <ManageTopic title="Edit" btnHandle={this.handleEdit}
                        editTopic={editTopic} />}
                </div>
                <h4 className="font-weight-bold m-2">Topic List</h4>
                <div>
                    <table className="table text-center ">
                        <thead className="thead-light ">
                            <tr>
                                <th>Name</th>
                                <th>Content</th>
                                <th>CreatedAt</th>
                                <th>LastUpdateAt</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {topics.map((topic) => (
                                <tr key={topic._id}>
                                    <td>{topic.name}</td>
                                    <td>{topic.content}</td>
                                    <td>{moment(topic.createdAt).format("llll")}</td>
                                    <td>{moment(topic.updatedAt).format("llll")}</td>
                                    <td>
                                        <button onClick={() => this.setState({ editTopic: topic })}
                                            className="btn btn-dark m-2" >Edit</button>
                                        <button onClick={() => this.handleDelete(topic._id)}
                                            className="btn btn-dark m-2" >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </BasePage >
        )
    }
}
