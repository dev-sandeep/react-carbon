import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Check from './../../Component/Check'
import { getValueFromObj } from './../../Utility/Utility'
import Badge from 'react-bootstrap/Badge'
import UseBaseContext from './../../ContextApi/UseBaseContext'
import { Link } from 'react-router-dom'

function House() {
    const [fridge, setFridge] = useState(0);
    const [ac, setAC] = useState(0);
    const { addToEmission, totalEmission } = UseBaseContext();
    const fridgeRadio = [
        {
            id: 'yes',
            label: 'Yes',
            name: 'fridge',
            type: 'radio',
            val: 4300
        },
        {
            id: 'no',
            label: 'No',
            name: 'fridge',
            type: 'radio',
            val: 0
        }
    ]

    const acRadio = [
        {
            id: 'yes',
            label: 'Yes',
            name: 'ac',
            type: 'radio',
            val: 6300
        },
        {
            id: 'no',
            label: 'No',
            name: 'ac',
            type: 'radio',
            val: 0
        }
    ]

    const onChangeRefrigeratorOption = (value) => {
        let val = getValueFromObj(fridgeRadio, value);
        setFridge(val);
    }

    const onChangeACOption = (value) => {
        let val = getValueFromObj(acRadio, value);
        setAC(val);
    }

    const setTotal = () => {
        addToEmission("house", fridge + ac);
    }

    return (
        <section className='travel-page m-top-3'>
            <div className="container">
                <div className="col-lg-12">
                    <Card>
                        <Card.Header>Form 3/3</Card.Header>
                        <Card.Body>
                            <Card.Title>Your House</Card.Title>
                            <Card.Text className="text-left">
                                <div className="col-lg-8 offset-2">
                                    <Form>
                                        <Check
                                            label="Do you own a refrigerator?"
                                            data={fridgeRadio}
                                            onChange={onChangeRefrigeratorOption}
                                        />

                                        <Check
                                            label="Do you own a air conditioner?"
                                            data={acRadio}
                                            onChange={onChangeACOption}
                                        />
                                    </Form>
                                    <hr />
                                    Score <Badge className="text-right" variant="primary">{fridge + ac}</Badge>

                                </div>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="primary" onClick={setTotal}>
                                <Link className='color-white' to="/result">SUBMIT</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default House;