function templateProcessor(template){
    this.template = template;
}

templateProcessor.prototype.fillIn = function(dictionary){
    return this.template.replace(/{{(.+?)}}/g, function(match, key){
        return dictionary[key];
    });
};

const t1 = "My name is {{name}} and I am from {{city}}";
const p1 = new templateProcessor(t1);
const dictionary = { name: "John", city: "New York" };

console.log(p1.fillIn({name: "Bob"}));

const t2 = " This is a test. ";
const p2 = new templateProcessor(t2);
console.log(p2.fillIn(dictionary));

