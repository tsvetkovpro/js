let style = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: red;'].join('');

// Using Rest Parameters
//The new rest parameter syntax allows us to represent an indefinite number of arguments as an Array. This way, changes to function signature are less likely to break code.

function displayTags(...tags) { // Rest Parameters Function definition
    //let target = _findElement(targetElement);

    for (let i in tags) {
        let tag = tags[i];
        console.log('%c%s', style, "Tag: ",tag);
    }
}
displayTags("one","two");
displayTags("songs");


// Using the Spread Operator
// The spread operator allows us to split an Array argument into individual elements.
/*
getRequest("/topics/17/tags", function(data){
    let tags = data.tags;
        displayTags(...tags); // Spread Operator Function invocation
})
displayTags(tag, tag, tag);*/



// Using Arrow Functions to Preserve Scope
//Arrow functions bind to the scope of where they are defined, not where they are called. (also known as lexical binding)

/*function TagComponent(target, urlPath) {
    this.targetElement = target;
    this.urlPath = urlPath;
}

TagComponent.prototype.render = function(){
    getRequest(this.urlPath, (data) => {
       let tags = data.tags;
        displayTags(this.targetElement, ...tags);
    });
}

let tagComponent = new TagComponent(targetDiv="", "/topic/17/tags");
tagComponent.render();*/


function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock wins";
        } else {
            return "Paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins";
        } else {
            return "Scissors wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins";
        } else {
            return "Scissors wins";
        }
    }
}










