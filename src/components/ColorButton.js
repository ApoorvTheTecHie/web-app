import React from 'react';
import { } from 'react-bootstrap';

const ColorButton = () => {
    return(
    <div>    
        <button type="button" className="btn btn-primary btn-sm" data-toggle="collapse" data-target="#style-switch" id="style-switch-button">
            <i className="fa fa-adjust"></i>
        </button>

        <div id="style-switch" className="collapse">

            <h4>Select theme colour</h4>

            <form>
                <select className="form-control" name="colour" id="colour">
                    <option value="">select colour</option>
                    <option value="default">turquoise</option>
                    <option value="green">green</option>
                    <option value="pink">pink</option>
                    <option value="blue">blue</option>
                    <option value="mono">mono</option>
                    <option value="violet">violet</option>
                </select>
            </form>
        </div>
    </div>    
    );
}

export default ColorButton;