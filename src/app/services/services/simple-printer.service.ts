import { Injectable } from '@angular/core';

export interface Printable {
  print(): void;
}

@Injectable({
  providedIn: 'root'
})
export class SimplePrinter implements Printable {
  print() {
    console.log("Printing...");
  }
}
