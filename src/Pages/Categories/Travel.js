import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Check from './../../Component/Check'
import { Link } from 'react-router-dom';
import { getValueFromObj } from './../../Utility/Utility'
import Badge from 'react-bootstrap/Badge'
import UseBaseContext from './../../ContextApi/UseBaseContext'

function Travel() {
    const [plane, setPlane] = useState(0); 
    const { addToEmission } = UseBaseContext();
    const [data, setData] = useState({});
    const [totalOfCheck, setTotalOfCheck] = useState(0);

    const transportData = [
        {
            label: 'Train',
            id: 'train',
            val: 644
        },
        {
            label: 'Bus',
            id: 'bus',
            val: 920
        },
        {
            label: 'Car',
            id: 'car',
            val: 1820
        }
    ];

    const planeRadio = [
        {
            id: 'yes',
            label: 'Yes',
            name: 'plane',
            type: 'radio',
            val: 1900
        },
        {
            id: 'no',
            label: 'No',
            name: 'plane',
            type: 'radio',
            val: 0
        }
    ]

    const onChangeTransportVal = (value, isSelected) => {
        let val;
        if (isSelected)
            val = getValueFromObj(transportData, value);
        else
            val = 0;

        let obj = data;
        obj[value] = val;
        setData(obj);
        setTotalOfCheck(getTotalOfCheck());
    }

    const onChangePlaneRadio = (value) => {
        let val = getValueFromObj(planeRadio, value);
        setPlane(val);
    }

    const getTotalOfCheck = () => {
        let total = 0;
        Object.keys(data).map(item => {
            total += data[item];
        })

        return total;
    }

    const setTotal = () => {
        addToEmission("travel", totalOfCheck + plane);
    }

    return (
        <section className='travel-page m-top-3'>
            <div className="container">
                <div className="col-lg-12">
                    <Card>
                        <Card.Header>Form 2/3</Card.Header>
                        <Card.Body>
                            <Card.Title>Travel Habbit</Card.Title>
                            <Card.Text className="text-left">
                                <div className="col-lg-8 offset-2">
                                    <Form>
                                        <Check
                                            label="What mode of transportation you prefer"
                                            data={transportData}
                                            onChange={onChangeTransportVal}
                                        />

                                        <Check
                                            label="Do you travel by plane?"
                                            data={planeRadio}
                                            onChange={onChangePlaneRadio}
                                        />
                                    </Form>
                                    <hr />
                                    Score <Badge className="text-right" variant="primary">{totalOfCheck + plane}</Badge>

                                </div>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="primary" onClick={setTotal}>
                                <Link className='color-white' to="/house">NEXT</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Travel;