import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent,CardComponent,TasksComponent,TaskComponent,NewTaskComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,DatePipe,FormsModule]
})
export class AppModule{};