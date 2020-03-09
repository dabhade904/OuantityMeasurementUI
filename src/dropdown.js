import React, { Component } from 'react';
import './App.css'
import Units from "./dropdownUnitValue"
import configuration from '../src/configuration/configuration'
import TextBox from './title';

export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: "",
            firstUnit: "",
            secondUnit: "",
            unitValue1: 0,
            result: 0
        };
    }

    getUnit = async event => {
        await this.setState({ unit: event.target.value });
        console.log("in getUnit--->", this.state.unit);

    }

    getValue = (event) => {
        this.setState({ unitValue1: event.target.value });

    }

    buttonClick = () => {
        var data = {
            unit: this.state.unit,
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue1
        }
        console.log("button---------->", data);


        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
                this.setState({ result: response.data.data })
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }

    handleFirstUnit = (val) => {
        this.setState({ firstUnit: val })
    }

    handleSecondUnit = (val) => {
        this.setState({ secondUnit: val })
    }
    render() {

        return (
            <div className="dropdownMain">
                <TextBox />
                <select onChange={this.getUnit} className="selectors">
                    <option value="N/A">UNIT</option>
                    <option value="0">LENGTH</option>
                    <option value="1">VOLUME</option>
                    <option value="2">WEIGHT</option>
                    <option value="3">TEMPERATURE</option>
                </select>

                <div className="dropdownChild">
                    <Units unit={this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit} />
                </div>
                <div className="textValue">
                    <input className="firstInput" type="text" id="tName" name="name" placeholder="value" onChange={this.getValue} />
                    <label id="labels">=</label>
                    <input className="secondInput" type="text" id="tName" name="name" placeholder="value" value={this.state.result} />
                </div>
                <div>
                    <button className="button" type="submit" onClick={this.buttonClick}>convert</button>
                </div>
            </div>
        )

    }
}