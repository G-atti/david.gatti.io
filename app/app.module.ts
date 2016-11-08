import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/articles/article.component';
import { HardwareProjectsComponent } from './components/hardware_projects/hardware_projects.component';
import { HomeComponent } from './components/home/home.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { SoftwareProjectsComponent } from './components/software_projects/software_projects.component';
import { TechnicalArticlesComponent } from './components/technical_articles/technical_articles.component';

import { routing } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        NgbModule,
        routing
    ],
    declarations: [
        HeaderComponent,
        ArticleComponent,
        HardwareProjectsComponent,
        HomeComponent,
        PodcastsComponent,
        SoftwareProjectsComponent,
        TechnicalArticlesComponent
    ],
    bootstrap: [ HeaderComponent ]
})

export class AppModule
{

}
