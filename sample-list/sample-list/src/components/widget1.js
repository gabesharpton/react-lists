import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

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
    <div className="Widget1">

        <div style={{border: "20px solid red"}}>
            <h1>Widget 1</h1>
            <ListGroup horizontal>

                <ListGroup.Item active>1</ListGroup.Item>
                <ListGroup.Item info>2</ListGroup.Item>
                <ListGroup.Item>3</ListGroup.Item>
                <ListGroup.Item>4</ListGroup.Item>
                <ListGroup.Item>5</ListGroup.Item>

            </ListGroup>

                <Button>More Info</Button>

        </div>

    </div>
  );
}

export default Widget1;