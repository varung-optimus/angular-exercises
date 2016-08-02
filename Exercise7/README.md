# Exercise 7

Input fields summing up into additional field

```
Create 3 number inputs that sum up into an additional field. Editing each of the 3 inputs will
always update the sum value. The fourth field can also be editable, and whenever user changes
this one its value must be spread across the other 3 fields. Example:
Initial values:
#1 = 100 #2 = 100 #3 = 100 #4 = 300
User interacts with field #1:
#1 = 200 #2 = 100 #3 = 100 #4 = 400
User interacts with field #4 after editing #1:
#1 = 150 #2 = 75 #3 = 75 #4 = 300
```

### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-ui-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## More information

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
