import React, { Component } from 'react';
import './App.css'
import Units from "./dropdownUnitValue"
import TextBox from './title';
import Dropdownunit from "./dropdownUnitValue"

//  import configuration from '../src/configuration/configuration'
//  import getUnits from '../src/configuration/configuration'
// import TextBox from './title';
const configurationfile = require('../src/configuration/configuration')


export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: "",
            firstUnit: "",
            secondUnit: "",
            unitValue1: 0,
            result: 0,
            typeunits : []
        };
    }

    getUnit = async event => {
        await this.setState({ unit: event.target.value });
        console.log("in getUnit--->", this.state.unit);
        var unitsobj = {
            type : this.state.unit
        }
        console.log("unit type=====>", unitsobj);
        
        configurationfile.getUnits(unitsobj)
        .then(res => {
          console.log("get unitssssssssssssssss",res.data.data);
          this.setState({ typeunits: res.data.data })
        })

    }

    getValue = (event) => {
        this.setState({ unitValue1: event.target.value });

    }

    buttonClick = () => {
        var data = {
            unit: this.state.unit,
            firstUnit: this.props.firstUnit,
            secondUnit: this.props.secondUnit,
            unitValue1: this.state.unitValue1
        }
        console.log("button---------->", data);


        configurationfile.configuration(data)
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
        console.log("in rnderrrrrr",this.state.typeunits);
        
        return (
            <div className="dropdownMain">
                <TextBox />
                <select onChange={this.getUnit} className="selectors">
                    <option value="N/A">UNIT</option>
                    <option value="LENGTH">LENGTH</option>
                    <option value="VOLUME">VOLUME</option>
                    <option value="WEIGHT">WEIGHT</option>
                    <option value="TEMPERATURE">TEMPERATURE</option>
                </select>
                < Dropdownunit unitss ={this.state.typeunits}/> 
{/* 
                <div className="dropdownChild">
                    <Units unit={this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit} />
                </div> */}
                <div className="textValue">
                    <input className="firstInput" pattern="[0-9]" type="text" id="tName" name="name" placeholder="value" onChange={this.getValue} />
                    <label id="labels">=</label>
                    <input className="secondInput" pattern="[0-9]" type="text" id="tName" name="name" placeholder="value" value={this.state.result} />
                </div>
                <div>
                    <button className="button" type="submit" onClick={this.buttonClick}>convert</button>
                </div>
            </div>
        )

    }
}