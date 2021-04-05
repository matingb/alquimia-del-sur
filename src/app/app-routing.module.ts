import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

const routes: Routes = [
    { path: '', component: IndexComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 130]
  })],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}

