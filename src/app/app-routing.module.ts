import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgradecimientoComponent } from "./components/agradecimiento/agradecimiento.component";
import { IndexComponent } from "./components/index/index.component";
import { AguaComponent } from "./components/productos/agua/agua.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'productos/AGUA', component: AguaComponent },
    { path: 'agradecimiento', component: AgradecimientoComponent },
    { path: '**', redirectTo: '' }
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

