import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { setEnviournmentNews } from './../Utility/Utility'

function Home() {

    return (
        <section className="home-page m-top-3">
            {setEnviournmentNews()}
            <div className="container">
                <div className="col-lg-12">
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple app to calculate total carbon footprint from
                            individual's everyday life.
                    </p>
                        <p>
                            <Button variant="primary">
                                <Link className='color-white' to="/food">Let's Go!</Link>
                            </Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </section>
    );
}

export default Home;