import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { NavComponent } from './components/nav/nav.component';
import { ConservacaoComponent } from './components/conservacao/conservacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ZoologicoComponent } from './components/zoologico/zoologico.component';

export const routes: Routes = [   
     
    {path: '', redirectTo: 'section', pathMatch: 'full' },
    {path: 'section', component:SectionComponent },
    {path: 'animais', component: AnimaisComponent},
    {path: 'conservacao', component: ConservacaoComponent},
    {path: 'contato', component : ContatoComponent},
    {path: 'zoologico', component: ZoologicoComponent}




];
