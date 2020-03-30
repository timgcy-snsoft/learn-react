import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const manageTopic = (props) => {
    const { btnHandle, title } = props

    const [topic, setTopic] = useState('')
    const [content, setContent] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (!_.isEmpty(props.editTopic)) {
            const { _id, name, content } = props.editTopic
            setId(_id)
            setTopic(name)
            setContent(content)
        }
    }, [])


    return (
        <div className="flex flex-column w-50">
            <h4 className="font-weight-bold m-2 text-white">{title} Topic</h4>
            <div className="p-2">
                <span className="font-weight-bold">Topic Name: </span>
                <input className="form-control w-75 mt-1" type="text"
                    value={topic} required
                    onChange={(e) => setTopic(e.target.value)} />
            </div>
            <div className="p-2">
                <span className="font-weight-bold">Content: </span>
                <textarea className="form-control w-75 mt-1" type="text"
                    value={content} required
                    onChange={(e) => setContent(e.target.value)} />
            </div>
            <div className="w-25"><button onClick={() => {
                btnHandle(topic, content, id)
                setTopic('')
                setContent('')
            }}
                className="form-control m-2 btn btn-dark ">{title}</button>
            </div>

        </div>
    );
}

export default manageTopic;
