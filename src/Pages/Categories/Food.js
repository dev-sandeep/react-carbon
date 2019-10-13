import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputText from './../../Component/InputText'
import SelectOption from './../../Component/SelectOption'
import { Link } from 'react-router-dom';
import { getValueFromObj } from './../../Utility/Utility'
import UseBaseContext from './../../ContextApi/UseBaseContext'
import Badge from 'react-bootstrap/Badge'


function Food() {
    const { addToEmission } = UseBaseContext();
    const [food, setFoodHabbit] = useState(0);
    const [cook, setCookSource] = useState(0);
    
    const foodHabbit = [
        {
            label: 'Select',
            id: 'select',
            val: 0
        },
        {
            label: 'Beef',
            id: 'beef',
            val: 1750
        },
        {
            label: 'Other Meat',
            id: 'meat',
            val: 990
        },
        {
            label: 'Vegan',
            id: 'vegan',
            val: 520
        },
    ];

    const cookSource = [
        {
            label: 'Select',
            id: 'select',
            val: 0
        },
        {

            label: 'gas',
            id: 'gas',
            val: 450
        },
        {

            label: 'oil',
            id: 'oil',
            val: 968
        }
    ]

    const onChangeFoodHabbit = (value) => {
        let val = getValueFromObj(foodHabbit, value);
        console.log(val);
        setFoodHabbit(val)
    }

    const onChangeCookSource = (value) => {
        let val = getValueFromObj(cookSource, value);
        console.log(val);
        setCookSource(val);
    }

    const setTotal = () => {
        addToEmission("food", food + cook);
    }

    return (
        <section className="energy-section">
            <div className="container">
                <div className="col-lg-12">
                    <Card>
                        <Card.Header>
                            Form 1/3
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Food Habbit</Card.Title>

                            <Card.Text className="text-left">
                                <div className="col-lg-8 offset-2">
                                    <Form>
                                        <SelectOption
                                            label="What do you prefer to eat?"
                                            data={foodHabbit}
                                            onChange={onChangeFoodHabbit}
                                        />
                                        <SelectOption
                                            label="What you use to cook your food"
                                            data={cookSource}
                                            onChange={onChangeCookSource}
                                        />
                                    </Form>
                                    <hr />
                                    Score <Badge className="text-right" variant="primary">{food + cook}</Badge>

                                </div>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="primary" onClick={setTotal}>
                                <Link className='color-white' to="/travel">
                                    NEXT
                                </Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Food;