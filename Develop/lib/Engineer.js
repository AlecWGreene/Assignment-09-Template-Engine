const Employee = require("./Employee");

/**
 * @class
 * 
 * @extends {Employee}
 * 
 * @classdesc A class representing an Engineering teammember
 * 
 * @property {String} github Github profile URL of the engineer
 * 
 * @method getGithub returns the Github URL for the engineer's profile
 */
class Engineer extends Employee{
    constructor(arg_name, arg_id, arg_email, arg_github){
        super(arg_name, arg_id, arg_email);

        this.github = arg_github;
        this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;