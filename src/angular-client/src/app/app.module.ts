import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { EthereumProviderService } from './services/ethereum-provider.service';

import { UserListComponent } from './user-list/user-list.component';
import { AuctionComponent } from './auction/auction.component';

const routes = [
    { path: 'users', component: UserListComponent },
    { path: 'auction', component: AuctionComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        AuctionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [UserService, EthereumProviderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
