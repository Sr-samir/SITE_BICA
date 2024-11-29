import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { ConservacaoComponent } from './components/conservacao/conservacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ZoologicoComponent } from './components/zoologico/zoologico.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, SectionComponent,  AnimaisComponent, ConservacaoComponent, ContatoComponent,ZoologicoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
