import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  arr = [1, 1, 2, 3, 5, 8, 13];

  obj = [
    {
      title: 'Post 1',
      author: 'Artem',
      comments: [
        {
          name: 'Max',
          text: 'Lorem 1',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
        {
          name: 'Max1',
          text: 'Lorem 2',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
        {
          name: 'Max',
          text: 'Lorem 3',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
      ],
    },
    {
      title: 'Post 2',
      author: 'Julia',
      comments: [
        {
          name: 'Max2',
          text: 'Lorem 1',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
        {
          name: 'Max1',
          text: 'Lorem 2',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
        {
          name: 'Max',
          text: 'Lorem 3',
          number: [
            {
              a: 1,
              b: 2,
            },
          ],
        },
      ],
    },
  ];
  constructor() {}
}
