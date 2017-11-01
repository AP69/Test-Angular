import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserclsComponent } from './components/usercls/usercls.component';

import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes} from '@angular/router';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserclsComponent,
    AboutComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
