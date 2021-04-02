import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexViewComponent } from "./components/index-view/index-view.component";

const routes: Routes = [
    { path: '', component: IndexViewComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 130]
  })],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}

