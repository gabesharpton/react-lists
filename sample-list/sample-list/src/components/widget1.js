import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Chart1 from './chart1'

/*
I need 3 different divs inside the widget,
A top banner, A side with list of links to school and more info button, and a bar chart
Top banner just has information lets use "schools"
The side with schools and more information button should have links to filter that specific schools data
Or when you click on more details it shows every schools incidents.
filter functionality is also wanted.
The bar chart I will try to use canvas.
Each bar should be a school that you can select and show that schools incidents
for simplicity sake each school will have 30 incidents, 10 in each category.

*/


function Widget1() {
  return (
    

        <Container className='w-100 mx-auto'>

          {/* This is the boring top header */}
         
          <div id='header-w1' className="w-100 p-2" style={{background: 'grey'}}>
            <h2>Incidents Per School</h2>
          </div>
          
          {/* This is where the list of schools will go as well as More Details button */}
          
            <div className="d-inline-block w-25">
              <div id="school-list">
                
                <h3>Average per School</h3>
                <h4>10.0</h4>

                  <ListGroup>

                      <ListGroup.Item>School 1</ListGroup.Item>
                      <ListGroup.Item>School 2</ListGroup.Item>
                      <ListGroup.Item>School 3</ListGroup.Item>
                      <ListGroup.Item>School 4</ListGroup.Item>
                      <ListGroup.Item>School 5</ListGroup.Item>

                  </ListGroup>

                      <Button>More Details</Button>
              </div>
            </div>
          {/* The bar chart, see ./chart1.js */}
            <div className="d-inline-block big-primary w-75">
              <div id='chart'>
                <Chart1></Chart1>
              </div>
            </div>
          
        </Container>
   
  );
}

export default Widget1;