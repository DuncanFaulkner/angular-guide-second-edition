import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  protected count = signal<number>(0);
  protected increment() {
    this.count.update(() => this.count() + 1);
  }
  protected decrement() {
    if (this.count() > 0) {
      this.count.update(() => this.count() - 1);
    }
  }
}
