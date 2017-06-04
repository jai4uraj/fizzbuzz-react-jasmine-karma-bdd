import React, { Component } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TestUtils from 'react-addons-test-utils';
import Fizzbuzz from '../src/FizzBuzz';

describe("Fizzbuzz", function () {
  it("contains spec with an expectation", function () {
    //console.log("Dhananjay");
    expect(true).toBe(true);
  });

  it("Should display the Fizz result", () => {
    var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="3" />);
    var addResult = label.GetFizBuzzString(3);
    //console.log("Fizz = " + addResult);
    expect(addResult).toBe(Fizz);
  });

});