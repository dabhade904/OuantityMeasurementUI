import React from 'react';
import './App.css'
import quantityJSON from './quantityMeasurement.json'

var unitType;
class dropdownUnitValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: '',
            firstUnit: '',
            secondUnit: '',
            unitValue1: props.unitValue1,
            unitValue2: props.unitValue2
        }
    }

    getUnit = event => {
        console.log("type--> ", event.target.value);

        this.setState({ unit: event.target.value });
    }

    componentWillReceiveProps(props) {
        this.setState({ unit: props.unit })
    }

    handleFirstUnitChange = (event) => {

        console.log("handle change--> ", event.target.value);
        this.setState({ firstUnit: event.target.value })
        this.props.firstUnit(event.target.value )
    }

    handleSecondUnitChange = (event) => {
        console.log("handle change--> ", event.target.value);
        this.setState({ secondUnit: event.target.value })
        this.props.secondUnit(event.target.value )
    }

    render() {
        var emptyInput = "select-value";
        var unit = this.state.unit
        var keys = Object.keys(quantityJSON);
        console.log("unit Type===>",keys);
        

        for (var i = 0; i < keys.length; i++) {
            if (unit == i) {
                unitType = Object.keys(quantityJSON[keys[i]])
                console.log(keys[i],'keys of json file');
                
                console.log('keys keys of json',unitType);
                
            }
        }
        return (

            <div className="dropdownChild">
                <select className="selectFirst"
                    onChange={(event) => this.handleFirstUnitChange(event)}>
                    <option value="N/A">TYPE</option>
                    <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] || emptyInput}>{unitType[2] || emptyInput}</option>
                    <option value={unitType[3] || emptyInput}>{unitType[3] || emptyInput}</option>
                </select>
                <label id="labels">&#x21c4;</label>
                <select className="selectSecond" onChange={(event) => this.handleSecondUnitChange(event)}>
                    <option value="N/A">TYPE</option>
                    <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] || emptyInput}>{unitType[2] || emptyInput}</option>
                    <option value={unitType[3] || emptyInput}>{unitType[3] || emptyInput}</option>
                </select>

            </div>
        );
    }
}
export default dropdownUnitValue
