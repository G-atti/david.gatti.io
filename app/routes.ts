import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './components/articles/article.component';
import { HardwareProjectsComponent } from './components/hardware_projects/hardware_projects.component';
import { HomeComponent } from './components/home/home.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { SoftwareProjectsComponent } from './components/software_projects/software_projects.component';
import { TechnicalArticlesComponent } from './components/technical_articles/technical_articles.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleComponent, terminal: true },
    { path: 'hardware_projects', component: HardwareProjectsComponent, terminal: true },
    { path: '', component: HomeComponent, terminal: true },
    { path: 'podcasts', component: PodcastsComponent, terminal: true },
    { path: 'software_projects', component: SoftwareProjectsComponent, terminal: true },
    { path: 'technical_articles', component: TechnicalArticlesComponent, terminal: true }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
