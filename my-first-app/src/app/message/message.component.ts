import { Component } from "@angular/core";

@Component({
    selector: 'app-message',
    template: `
        <p>This is a message</p>
    `,
  styles: [
    `
      p {
          padding: 20px;
          background-color: white;
          border: 1px solid grey;
      }
    `
  ]
})
export class MessageComponent {

}