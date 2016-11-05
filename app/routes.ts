import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './components/articles/article.component';
import { HardwareProjectsComponent } from './components/hardware_projects/hardware_projects.component';
import { HomeComponent } from './components/home/home.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { SoftwareProjectsComponent } from './components/software_projects/software_projects.component';
import { TechnicalArticlesComponent } from './components/technical_articles/technical_articles.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleComponent },
    { path: 'hardware_projects', component: HardwareProjectsComponent },
    { path: '', component: HomeComponent, terminal: true },
    { path: 'podcasts', component: PodcastsComponent },
    { path: 'software_projects', component: SoftwareProjectsComponent },
    { path: 'technical_articles', component: TechnicalArticlesComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
