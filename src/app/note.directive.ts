import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[uiNote]',
  standalone: true,
})
export class NoteDirective {

  private readonly styles = 'p-5 bg-slate-700 rounded-md space-y-3 overflow-hidden relative';
  constructor(private el: ElementRef, private rendere: Renderer2) {

    this.styles.split(' ').forEach(style => {
      this.rendere.addClass(this.el.nativeElement, style)
    })
  }
}

