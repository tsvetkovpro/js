# EcmaScript 6 Crash Course 
```
If you feel overwhelmed by the lightning-fast pace of the JavaScript community, you're not alone. The JavaScript (likely using jQuery) you might have written in 2009 doesn't even remotely resemble the scripts of today. In this series, I'll give you a crash course on the latest and greatest that the language has to offer.

```
[link to course page](https://laracasts.com/series/es6-cliffsnotes/)


### Babel Setup
[source code](https://github.com/tsvetkovpro/js/blob/master/courses/others/laracasts/src/intro.js)
```
Before we begin toying around with the new features in ES6, we must first review basic compilation, using Babel. This way, all browsers will understand the cutting-edge ES6 code you'll soon be writing.
```


### To Var, Let, or Const
[source code]()
```
ES6 introduces two new keywords for declaring variables: let and const. The only question is: how do you know which of the three to choose for any given situation? Well, let's talk about it.
```


### Arrows
[source code](https://github.com/tsvetkovpro/js/blob/master/courses/others/laracasts/src/var-let-const.js)
```
Arrows in ES2015 provide a friendly function shorthand for performing common tasks. While not a complete replacement for the function keyword, you'll still get an enormous amount of usage out of this new syntax.
```

### Default Parameters
```
ES5 doesn't offer support for default parameters. So, as a result, we all ended up resorting to less-than-ideal alternatives (like name = name || 'Joe'). Luckily, with ES6, it'll all just work the way you'd expect. Even better, you're not limited to primitives alone; you can even set the default value equal to the result of a function call!
```

### Rest and Spread
```
ES6 finally introduces support for both the "rest" and "spread" operators. In this lesson, I'll demonstrate what they are, and how you'll use them in your own codebases.
```

### Template Strings
```
Template literals allow us to remove all that funky trickery we resorted to for creating elegant multi-line strings. Instead, simply replace those single quotes with backticks, and you're done. Even better, they also support variable substitutions. No more awkward concatenation!
```

### Awesome Object Enhancements
```
ES6 includes a wide range of Object additions. In this episode, we'll review three of my favorites: property shorthand, short methods, and object destructuring.
```

### Classes
```
ES6 classes are particularly appealing to those of us who predominantly work in traditional server-side languages. With ES5, you'd need to leverage the confusing prototype object to attach methods. But, now, all of that awkward code is pushed behind the scenes. In its place is a more familiar structure that you'll love.
```

### ES6 Modules
```
Organizing JavaScript for large projects in 2005 was a bit of a nightmare. It wasn't abnormal to find twenty different script imports in an HTML file. And, worse, it was up to you, the developer, to understand and remember the order to which each of your scripts must be imported. To say it was all a dependency nightmare is an understatement. Luckily, in recent years, modules have come to the rescue!
```

### Module Bundling With Rollup
```
As we've begun to learn, while modern browsers are implementing much of the ES2015 spec, none of them yet support modules natively. This means we require a module bundler, like Browserify, Webpack, or Rollup. Let's begin with the latter. In this lesson, we'll compile ES2015 code using modules, down to vanilla ES5 code that all relevant browsers understand.
```

### Module Bundling With Webpack
```
In the previous lesson, we learned about Rollup. But, now, let's switch over to Webpack, which has a much larger community and plugin ecosystem. We'll set up a Webpack config file, transpile ES2015, and even peek at Laravel Elixir 6.0's seamless Webpack integration.
```
[View the completed setup for this lesson on GitHub.](https://github.com/laracasts/Module-Bundling-With-Webpack)


### Promises 101
```
Promises can be a bit tricky to understand at first, but maybe this lesson will help! At its core, a promise is nothing more than a stand-in or placeholder for an action that has not yet taken place.
```

### Useful String Additions
```
Nothing here will knock your socks off, but, nonetheless, it's still important that you're aware of the following new additions to the String API: startsWith(), endsWith(), includes(), and repeat().
```








