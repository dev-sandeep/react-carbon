import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputText from './../../Component/InputText'
import SelectOption from './../../Component/SelectOption'
import Check from './../../Component/Check'

function Energy() {
    const foodHabbit = [
        {
            type: 'checkbox',
            label: 'Beef',
            id: 'beef',
            val: 1750
        },
        {
            type: 'checkbox',
            label: 'Other Meat',
            id: 'Meat',
            val: 968
        },
        {
            type: 'checkbox',
            label: 'Vegan',
            id: 'vegan',
            val: 520
        },
    ];
    const cookData = ['Gas', 'Oil', 'Electricity', 'Firewood', 'Others'];
    const commuteData = [
        {
            type: 'checkbox',
            label: 'car',
            id: 'car'
        },
        {
            type: 'checkbox',
            label: 'cycle',
            id: 'cycle'
        }
    ]

    const ownCarData = [
        {
            type: 'radio',
            label: 'Yes',
            id: 'Yes',
            name: 'carradio'
        },
        {
            type: 'radio',
            label: 'No',
            id: 'No',
            name: 'carradio'
        }
    ]

    console.log(foodHabbit);

    const onChangeText = (value) => {
        console.log("onChangeText", value);
    }

    return (
        <section className="energy-section">
            <div className="container">
                <div className="col-lg-12">
                    <Card>
                        <Card.Header>Form 1/4</Card.Header>
                        <Card.Body>
                            <Card.Title>Food Habbit</Card.Title>
                            <Card.Text className="text-left">
                                <div className="col-lg-8 offset-2">
                                    <Form>
                                        <SelectOption
                                            label="What do you prefer to eat?"
                                            data={foodHabbit}
                                        />
                                        {/* <InputText
                                            label="What you like to eat?"
                                            type='text'
                                            placeholder='write what you eat.'
                                            onChange={onChangeText}
                                        />

                                        <SelectOption
                                            label="Select what you use to cook?"
                                            data={cookData}
                                        />

                                        <Check
                                            label='Select how you commute.'
                                            data={commuteData}
                                        />

                                        <Check
                                            label='Do you own a car?.'
                                            data={ownCarData}
                                        />

                                        <InputText
                                            label="How many air travel you do in a year?"
                                            type='number'
                                            footerText="We don't save any of your data"
                                        /> */}
                                    </Form>
                                </div>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className="text-right">
                            <Button variant="primary" >NEXT</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Energy;