import React from 'react'
import Form from 'react-bootstrap/Form'

function InputText(props) {
    let handleChange = (e)=>{
        props.onChange(e.target.value);
    }
    return (
        <Form.Group controlId="formBasicEmail">

            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} onChange={handleChange} />
            <Form.Text className="text-muted">
                {props.footerText}
            </Form.Text>
        </Form.Group>
    )
}

export default InputText;