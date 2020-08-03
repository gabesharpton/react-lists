import React from 'react';

import Button from 'react-bootstrap/Button'

/*

This widget will be of a pie chart categorizing all of the incidents from the 3 categories.
It would have 3 divs or 5 if I really wanted to go overboard, but lets stick to three.
A top banner with information "incident type" and underneath it a total incident count and legend for the chart.
Underneath it a pie chart with all of the incidents shown. Seperated into three colors for each category. When you click on a color it shows a list of all incidents in that category.
Under that is a bottom footer that has the total incident for each category. for example:( 30 catagory 1, 20 catagory 2, 30 catagory 3) and under that a more info button with the full list of all incidents.
Search functionality wanted for incident type and schools.

*/


function Widget2() {
  return (
    <div className="Widget2">

        <div style={{border: "20px solid blue"}}>
            <h1>Widget 2</h1>
            

            <Button variant="warning" href="www.google.com">Warning</Button>

        </div>

    </div>
  );
}

export default Widget2;

