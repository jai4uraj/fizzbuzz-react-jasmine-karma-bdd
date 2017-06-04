import React, { Component } from 'react';

class FizzBuzz extends Component {
    constructor(props) {
        super(props);
        //this.state = { number: '', fb: '' }
        this.state = {number: '100'};
    }


    GetFizzBuzzValueFor(number) {
        var num = parseInt(number);
        var fb = '';
        if (NumberDivisbleBy(3, num) && NumberDivisbleBy(5, num)) {
            return "FizzBuzz";
        }
        if (NumberDivisbleBy(5, num)) {
            fb += "Buzz";
        }
        if (NumberDivisbleBy(3, num)) {
            fb += "Fizz";
        }
        if (null(fb)) {
            fb = num;
        }

        return fb;
    }

    NumberDivisbleBy(divisor, number) {
        var divisornum = parseInt(divisor);
        var numbernum = parseInt(number);
        return numbernum % divisornum == 0;
    }

    GetFizBuzzString(comingNumber) {
        console.log("number-coming", comingNumber )
        if (comingNumber != '' && comingNumber < 0) {
            console.log("This is not a valide Number");
            return "This is not a valide Number";
        }
        else {
            var fizz = '';
            for (var i = 1; i <= comingNumber; i++) {
                fizz += "," + GetFizzBuzzValueFor(i);
            }
            return fizz;
        }
    }

    handleChange(e) {
        this.setState({ number: e.target.value });
        var comingNumber = this.state.number;
        console.log("comingNumber :- ", comingNumber);
       

    }


    render() {
         //var comingNumber = this.state.number;
         //this.GetFizBuzzString(comingNumber);
        return (
            <div>
                <h2>My name is : {this.props.name}</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Number</label>
                        <input class="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.state.number} />
                    </div>
                    <button type="submit" class="btn btn-default">Send</button>
                </form>
                <br />
                <div class="ShowReault">(result)</div>
            </div>
        );
    }
}

export default FizzBuzz;
