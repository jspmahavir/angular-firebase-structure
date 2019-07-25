import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  courses$: FirebaseListObservable<any>;
  // course$;
  // author$;
  // courses: any[];

  constructor(private db: AngularFireDatabase) {
      this.courses$ = db.list('/courses');
      // this.course$ = db.object('/courses/1');
      // this.author$ = db.object('/authors/1');

      // this.subscription = db.list('/courses').subscribe(courses => {
      //   this.courses = courses;
      // });
    }

    // ngOnDestroy() {
    //   this.subscription.unsubscribe();
    // }

    add(course: HTMLInputElement) {
      this.courses$.push({
        name: course.value,
        price: 150,
        isLive: true,
        sections: [
          { title: 'Components'},
          { title: 'Directives'},
          { title: 'Templates'}
        ]
      })
      course.value = '';
    }

    update(course) {
      this.db.object('/courses/' +course.$key)
        .set({
          title: 'New Title',
          islive: true
        });
    }

    delete(course) {
      this.db.object('/courses/' +course.$key)
      .remove();
    }
}
