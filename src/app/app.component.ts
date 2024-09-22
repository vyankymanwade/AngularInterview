import { Component, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'AngularInterview';

// What is Angular

// Angular is the UI javascript framework which helps us to create the SPA
// (Single Page Application) using routing

// It helps us to bind View and Model (MV)
// some people calls it MVVM (Model view and binding view and model)

// -------------------------------------------------------------------------

// What is the difference between library and framework
// LIbrary -> you are the incharge of code. u call library
// Framework -> framework is incharge, they told us what they need and we provide that

// imagine angular -> we write our code inside constructor and ngOninit

// -------------------------------------------------------------------------------

// Q: AngularJs vs Angular

// AngularJs                                          Angular

// javascript                                         TypeScript
// contoller based                                    Component based
// no CLI                                             CLI
// no lazy loading                                    lazy loading
// not mobile supportive                              mobile supportive using iconic
// not seo friendly                                   SEO friendly
// no server side                                     Server side scripting

// ---------------------------------------------------------------------------------

// How to check angular version

// ng v

// ----------------------------------------------------------------------------------

// Q: What is angular directive
// Directive is concept which change the behaviour or appereance of the DOM element

// There are 3 types of angular directivesangla

// 1: Component directive
// This is mostly used in the angular which is the basic buidling block of any angular
// application

// <app-component-directive></app-component-directive> in html file
// show how we can refer the component directive which can be called from
// app.component.html file



// 2: Attribute directive
// this will sit on the html element and change the behaviour or the appereance of that
// html element

// 2.1 Build In attribute directive

// a: NgClass
// add or remove multiple classes 

danger!:Record<string,boolean>;

  ngOnInit(): void {
    this.setDangerClass();
  }

  setDangerClass(){
    this.danger = {
      backgroundRed:true,
      fontWhite:true,
    }
  }


  // [ngClass]="danger"
  // this danger object is passed to [ngClass] directive this will set or unset
  // all the classes based on the boolean values


  // b: NgStyle
  // adds the style to the html element

  // [ngStyle]="{'font-style':'italic','color':'red'}"
  // we can see this ngStyle directive is added which accepts
  // the object which contain styles

  // c: [(NgModel)]
  // this is used to bind the data two way 
  name:string='Vyankatesh';

  // [(ngModel)]="name"
  // here you can see i have created one input and i am printing that
  // input just after input box
  // whenever i change any value inside the box will immediately
  // reflected on Ui just after box
  upperName:string='';
  convertToUpperCase(event:string){
    this.upperName = event.toUpperCase();
  }


  // 2.2 Built in structral directive
  // this directive will change the dom structure either remove or add
  // or repeat 

  // a: ngIf
  // this is used to add or remove the dom element from the tree

  isSpecial:boolean = true;
  // if this is true then we are showing this is special paragraph

  // b: ngFor

  // this is used to repeat the 

  // -----------------------------------------------------------------------------------

  // Q: What is npm and node_modules
  // npm : Node package manager it helps us to install the javascript packages into 
  // ur project

  // node_modules is the folder which holds all the packages which are downloaded using
  // npm


  // ----------------------------------------------------------------------------------

  // Q: What is the use of package.json file

  // this file includes all the packages or all javascript libraries referenced
  // so we don't need to store all our code to version control with node_mouldes
  // we can just version control this package.json and then run npm install
  // and all dependecies are installed

  // ------------------------------------------------------------------------------------

  // Q: What is typescript and what is the use of it

  // typesript is the superset of javascript and it gives type to the javascript

  // we can use OOP in typescript which makes developers life easy and increases productivity
  // by reducing errors

  // ---------------------------------------------------------------------------------------

  // Q: What is the Angular CLI
  // CLI : Command line interface it helps us to create lot of angular building blocks
  // without needing it to create it from scratch

  // we can install it from npm
  // npm install @angular/cli

  // then we can create angular project
  // ng new <name>
  // it will create some boilerplate to start with angular developement rather than
  // creating it from scratch

  // --------------------------------------------------------------------------------

  // Q: What is Angular Component
  // It is the basic building block of the angular application
  // it contains
  // 1: template - where we write the html code
  // 2: ts file - where we write the business logic
  // 3: css file - styling component view
  // 4: .spec file - testing


  // --------------------------------------------------------------------------------

  // Q: How to create the component and module in the angular

  // 1: create class with name
  // 2: add decorator to the class which says it will be component or module in angular

  // 3: ex. @Component({}) OR @NgModule({})

  // ---------------------------------------------------------------------------------

  //  Q: What is decorator in angular
  // Decorator is the technique which defines what kind of class is this.
  // if we want ot create the component then we need to decorate the class 
  // with decorator saying @Component({templateUrl:,selector:,styles,})

  // ---------------------------------------------------------------------------------

  // Q: Explain the architecture of angular application
  // 1: Template
  // 2: Component
  // 3: Data Binding
  // 4: Modules
  // 5: Services
  // 6: DI
  // 7: Directives

  // try to draw the diagram to clearly explain how all they interreact with each other
  // ---------------------------------------------------------------------------------

  // Q: What is the SPA(Single Page Application)
  // SPA is the concept where application content is loaded once and later only necceesary 
  //  data is loaded based on the user's behaviour

  // lets say we are having the application with header, footer, side navigation and all
  // so all this loaded once and then other content is loaded based on user's click

  // ---------------------------------------------------------------------------------

  // Q: How do u implement the SPA in angular application
  // so using angular routing we are able to create the SPA in angular
  // -----------------------------------------------------------------------------

  // Q: what is routing
  // to create the routing we need to define routes collection which consist of
  // path: path to the url
  // component: which component we want to load when we hit the particular route
  // <router-outlet></router-outlet> : we need to place this in html so basically this 
  //  will be replaced by the currently laoded route

  // --------------------------------------------------------------------------------

  // Q: What is <router-outlet></router-outlet>

  // router-outlet is the angular directive which mark the place in the html where
  // router component will be loaded

  // so lets say in html file when we write the <router-outlet></router-outlet>
  // then its actually replaced by the current route's component or the module(this is in case of lazy loaded modules)

  // -----------------------------------------------------------------------------------

  // Q: What is diff between RouterModule.forRoot() and RoterModule.forChild()

  // RouterModule.forRoot() ->
  // It is used for creating app level routing 
  // It uses singletion objects
  // Only called once

  // RouterModule.forChild() ->
  // It is used to set the route for the fetures modules

  // ---------------------------------------------------------------------------------


  // Q: What is the lifecycle of the component
  // When angular instatiate the component it goes through the certain lifecycle
  // stages

  // its lifecycle starts when angular instatiate the component and ends when 
  // angular destorys the component


  // ngOnChanges()
  // When - it runs before ngOnInit() (if there is atleast one input data to component)
  //        and every time when there is change in data bound property
  
  
  // ngOnInit()
  // When - Called once after ngOnChanges()
  //        and evenif there is no ngOnChanges() it still calls ngOnInit()

  // ngDoCheck()
  // When - called every time after ngOnChanges() will run during change detection cycle
  // purpose - when angular can't detect the change on its own

  // ngAfterContentInit()
  // When - called once after ngDoCheck()
  // purpose - when we projects content into component's view

  // ngAfterContentChecked()
  // When - called after ngAfterContentInit()

  // ngAfterViewInit()
  // When - called once ngAfterContentChecked()
  // purpose - when angular intialize the view 

  // ngAfterViewChecked()
  // when - called after ngAfterViewInit()

  // ngOnDestroy()
  // when - called just before angular destroys the component


  // ---------------------------------------------------------------------------------

  // Q: What is the View Encapsulation

  // Angular components style is encapsulated within the component so that it won't 
  // affect the other application styles

  // 1: ViewEncapsulation.None
  // angular does not encapsulate any style meaning style applied to component
  // can affect the entire application

  // 2: ViewEncapsulation.Emulated
  // angular does the encapsulation meaning the style applied in component
  // remain only inside component and does not interfere the other application

  // 3: ViewEncapsulation.ShadowDom
  // angular uses built in shadow api 
  // all browser doesn't support this so emulated is recommended and default


  // --------------------------------------------------------------------------------

  // Component Interaction

  // 1: passing data from parent to child (Input() decorator)

  // <app-child></app-child>


  // 2: passing data from child to parent EventEmitter()
  value!:boolean;
  valueChanged(value:boolean){
    this.value = value;
  }

  // 3: local variable (ViewChild())
  @ViewChild('localVariable') localVar:any;
  
  ngAfterViewInit(){
    console.log(this.localVar.nativeElement);
    // console.log(this.viewCollection);
  }


  // -----------------------------------------------------------------------------

  // Q: What is content projection

  // <ng-content> is used to project the content
  // is used to proejct the view into the child element from the parent element

  // ---------------------------------------------------------------------------------

  // Q: how content-projection is different from passing data using attributes
  // content projection is not only limitted to passing data we can also change the
  // DOM from parent which then can be rendered inside child

  // --------------------------------------------------------------------------------

  // Q: What is the module

  // module is the combination of component, services, driectives, pipes and all
  // it is the imaginary seggregation of the application created by developer

  // --------------------------------------------------------------------------------

  // Q: What is Decorator/ Annotation/ MetaData in angular
  // Decorator start with @ notation, which changes the behaviour of the typescript class
  // when we define @Component() over class we are saying i want this class 
  // to be used as the Angular Component, similarly @NgModule, @Pipe and all

  // ----------------------------------------------------------------------------------

  // Q: What is the Template
  // it is nothing but the html view which is rendered
  // there are 2 ways to define template in angular
  // 1: inline - which is inside the @Component({template:'<h1></h1>'})
  // 2: other is separate physical file which is linked 
  // @component({templateUrl:'./path'})

  // ----------------------------------------------------------------------------------

  // Q: What is the 4 types of data binding in angular
  // 1: string interpolation
  //  {{}}: Component -> View
  // 2: Property Binding
  // <div [hidden]="isHidden"></div>: View -> Component
  // 3: Event Binding
  // <button (click)="doSomething($event)">: view -> Component
  // 4: Two Way data binding
  // <input [(ngModel)]="name"> view <-> Component

  // --------------------------------------------------------------------------------

  // Q: What are the important pillars of the angular
  // 1: Template
  // 2: Component
  // 3: Data Binding
  // 4: Modules
  // 5: Services
  // 6: DI
  // 7: Directives

  // -------------------------------------------------------------------------------

  // Q: What is the single page application
  // SPA - Typical website or application have header/footer/side nav
  // so this basic components are loaded once and depending on where user click
  // this will load other component
  // this is the single page application

  //-------------------------------------------------------------------------------

  // Q: How to implement SPA in angular
  // to implement SPA in angular we need to use the angular routing
  // routing is nothing but one url and url which loads the predefined compoennet

  // -------------------------------------------------------------------------------

  // Q: How to implement routing in angular application
  // 1: define routes in routing module
  // 2: import RouterModule.forRoot(routes)
  // 3: export RouterModule so that we can use this in Module
  // 4: AppMoudule import RoutingModule class
  // 5: to navigate from html file use routerLink=""
  // 6: to .ts file inject router service and use router.navigate("") method

  // --------------------------------------------------------------------------------

  // Q: What is Lazy loading and how to implement it in the angular application

  // lazy loading is nothing but loading the angular module on demand
  // to implement lazy loading in angular we have to mainly follow below steps

  // 1: create module
  // 2: in routing instead of component we have to use loadChildren


  //---------------------------------------------------------------------------------

  // Q: What is Services

  // services are the injectables which can be injected to component across the
  // different modules to share the common functionality

  //example:
  //1: in previous application we are having one export excel functionality across the
  // application so we created one single services and wrote export there
  // and injected same service in different component and called export

  // -----------------------------------------------------------------------------------

  // Q: What is the DI(Dependency Injection)
  // DI is the design pattern where instead of creating the instance inside the component
  // it will be provided from outside the class while creting the object of the class

  // -------------------------------------------------------------------------------

  // Q: How do we implment DI in angular
  // inside the constructor of the component class we need to inject the service class
  // angular while initilizing the component it will create the instance of the service
  // class and provide us within the component

  // --------------------------------------------------------------------------------
  // Q: What are the benefits of DI
  // 1: Decoupling the creation and usage of the instance
  // 2: if we need to change the code we can do it in single place rather than doing it
  // across the application

  // ----------------------------------------------------------------------------------

  // Q: What is the difference between ng serve and ng build
  // ng serve : 
  // it will build the application in memory and serve locally.
  // it acutually does not create phycical files in disk

  // ng build : 
  // it will create the build files on the disk
  // it will create the deployeable files /dist/<application_name> folder
  // unlike ng serve it does not track for changes in the files

  // ----------------------------------------------------------------------------------

  // Q: What is the ng build --prod
  // when we give --prod flag it will do some minification, do some optimization
  // and will make code deployement ready

  //1: Ahead-of-Time (AOT) Compilation:
  // it will convert html template and typescript code into javascript during 
  // build process, so that when application is served to client, client does not to compile
  // the code again which results in faster access of application

  // 2: Minification
  // production build reduces the file size by removing unwanted white spaces, reducing
  // length of variable name, removing unwanted codes

  // 3: Tree Shaking
  // Angular analyze the code and remove any unused module and component from the
  // application bundle

  // 4: Bundling:
  // Angular bundles the files into fewer files so that to reduce the HTTP requests


  // -------------- Advanced Angular Questions-----------------------------------------

  // Q: What is diff between ViewChild vs ViewChildren
  // ViewChild -> used to refer template elements inside component
  // ViewChildern -> used to refer COLLECTION of elements from template inside component

  // -----------------------------------------------------------------------------------

  // Q: What is template reference variable
  // when we want to refer the html element or component inside template or component
  // we can create # on the element and refer that element inside the template or component

  // --------------------------------------------------------------------------------------

  // What is content proejection slots
  // lets say we are having 2-3 differnt projection which need to be projected from parent
  // then in this scenario we can the name the slots

  // in parent
  // <parent>
  //    <p slot1></p>
  //    <p slot2></p>
  // <parent>

  // in child
  // <ng-content select="slot1"></ng-content>
  // <ng-content select="slot2"></ng-content>

  // -----------------------------------------------------------------------------------

  // Q: What is @ContentChild() and @ContentChildren
  // imagine this is similar to @ViewChild and @ViewChildren
  // only difference is this is used to reference the projected content from parent to
  // child (so this is used in child's component files where we are having <ng-content>)

  // -------------------------------------------------------------------------------------

  // Q: What is Angular Pipes
  // Pipes are used to tranform the data from one form to another in template expression {{}}

  // ------------------------------------------------------------------------------------

  // Q: How to create the custom pipes (Pipes folder inside shared folder for custom pipe)
  // stpes to follow to create custom pipe
  // 1: create class which implements PipeTransform interface
  // 2: add @Pipe({name:<name of pipe>}) decorator to the class
  // 3: override the transform() method
  // 4: inside transform method write logic for pipe
  // 5: declare that pipe in module where we want to use

  // ------------------------------------------------------------------------------------

  // Q: Name some pipe which are already available in angular
  // DatePipe, Uppercase, lowercase, Currency pipe

  // ---------------------------------------------------------------------------

  // Q: What is pure and impure pipes

  // Pure pipes:
  // it does not called during every change dedection cycle runs
  // it only called when value or reference is changed
  // it increses the performance
  // by default pipes are pure

  // Impure pipes
  // it called during every change dedection cyle runs
  // it decreses performace
  // to make pipe impure @Pipe({name:<name of pipe>,pure:false})
  // when we are having input which is changing frequently then we can use impure pipes
  // sorting or filtering arrays

  
  



}

// diff between ng-template/ng-container/ng-content
// angular dynamic components
// angular elements
// server side 
// ng:host
// angular gaurds
// types of gaurds
// Angular forms
// --- following are not related to angular but should know
// how SSO login works
// how to implement funtionality so when user logged in once and when he try to login 
// from another browser window it should not allow user to do so?





