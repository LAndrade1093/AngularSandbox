import { Component } from '@angular/core';

//Decorators is part fo TypeScript
@Component({
    //The name of the element as it will appear in HTML
    selector: 'app-user',
    //The path to the HTML file that the component will use to render itself (recommended)
    templateUrl: './user.component.html',
    //Takes in an array of paths to the component’s CSS files
    styleUrls: ['./user.component.css'],
    //The HTML that the component will use to render itself
    //template: `<h2>John Doe</h2>`
})

//the “export” key is so that the class can be accessed outside the file
export class UserComponent {

}

//After all this, make sure the component is added to @ngModule in app.module.ts