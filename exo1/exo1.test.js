import { expect } from "chai"
import {superDigit} from "./exo1.js"

// Gives a description of the group of test
describe("Super digit",function(){
    // describes a single test
    it("should return 2 if parameter : '9875 1'",function(){
        // A chai assertion specifying some expected value given some parameters
        expect(superDigit("9875 1")).to.be.eq(2);
    });
    it("should return 3 if parameter : '148 3'", function(){
        expect(superDigit("148 3")).to.be.eq(3);
    })
})