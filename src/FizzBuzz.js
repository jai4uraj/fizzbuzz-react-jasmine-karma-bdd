import React, { Component } from 'react';

class FizzBuzz extends Component {
    constructor() {
        super();
        this.state = { number: 'put a mumber', fb: '' };
    }


    GetFizzBuzzValueFor(number) {
        var num = parseInt(number);
        var fb = '';
        if (this.NumberDivisbleBy(5, num)) {
            fb += "Buzz";
        }
        if (this.NumberDivisbleBy(3, num)) {
            fb += "Fizz";
        }
        fb += num + "\n"
        //console.log(fb);
        return num;
    }

    NumberDivisbleBy(divisor, number) {
        var divisornum = parseInt(divisor);
        var numbernum = parseInt(number);
        return numbernum % divisornum == 0;
    }

    GetFizBuzzString(comingNumber) {

        if (comingNumber != parseInt(comingNumber) && comingNumber != '') {
            var fb = '';
            console.log("This is not a valide Number");
            fb = "This is not a valide Number";
            return false;
        }
        /*if (comingNumber != '') {
            return true
        }
        if (comingNumber != 0) {
            return true
        }
        if (comingNumber == parseInt(comingNumber)) {
            return true
        }
        if (comingNumber != parseFloat(comingNumber)) {
            return true
        }
        if (comingNumber > 0) {
            return true
        }
        if (parseInt(comingNumber)) {
            return true
        }*/
        var comingNumber = parseInt(comingNumber);
        var fizz = "";
        for (var i = 1; i <= comingNumber; i++) {
            fizz += "," + this.GetFizzBuzzValueFor(i);
        }
        console.log("fizz", fizz )
        return fizz;

    }

    handleChange(e) {
        this.setState({ number: e.target.value });
    }


    render() {
        var comingNumber = this.state.number;
        this.GetFizBuzzString(comingNumber);        
        return (
            <div>
                <h2>My name is : {this.props.name}</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Number</label>
                        <input class="form-control" onChange={this.handleChange.bind(this)} placeholder={this.state.number} />
                    </div>
                    <button type="submit" class="btn btn-default">Send</button>
                </form>
                <br />
                {/*<div class="ShowReault">{this.GetFizzBuzzValueFor}</div>*/}
            </div>
        );
    }
}

export default FizzBuzz;
