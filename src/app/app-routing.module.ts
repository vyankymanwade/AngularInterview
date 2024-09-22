import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { FeatureComponent } from "./feature/feature.component";

const routes:Route[] = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'feature',loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}