import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import UseBaseContext from './../ContextApi/UseBaseContext'

function Result() {
    const { totalEmission } = UseBaseContext();
    return (
        <section className="home-page m-top-3">
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <h3>You emit in total of <b>{totalEmission()} Kgs</b> of Carbon Dioxide in the air</h3>
                        <p>
                            <Button variant="primary">
                                <Link className='color-white' to="/">Reset</Link>
                            </Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </section>
    );
}

export default Result;