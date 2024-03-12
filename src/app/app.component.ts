import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NoteDirective } from './note.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notepad-angular';
}
