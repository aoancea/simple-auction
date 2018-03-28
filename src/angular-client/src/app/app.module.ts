import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';

const routes = [
    { path: 'users', component: UserListComponent },
    { path: 'userss', component: UserListComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
