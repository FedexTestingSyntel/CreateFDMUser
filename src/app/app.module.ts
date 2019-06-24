import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LevelsComponent } from './components/levels/levels.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { OnSubmitComponent } from './components/on-submit/on-submit.component';

 import { LevelUpdateService} from './service/level-update.service';

@NgModule({
  declarations: [
    AppComponent,
    LevelsComponent,
    ContactDetailsComponent,
    OnSubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LevelUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
