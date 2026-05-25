import { Component, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface ColumnItem {
  name: string;
  comment: string;
  include: boolean;
}

@Component({
  selector: 'app-root',
  imports: [DragDropModule, FormsModule, MatSelectModule, MatInputModule, CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('column-sorter');

  columns: ColumnItem[] = [
    { name: 'År', comment: '', include: true },
    { name: 'Månad', comment: '', include: true },
    { name: 'Bolag', comment: '', include: true },
    { name: 'Undernr', comment: '', include: true },
    { name: 'Förare', comment: '', include: true },
    { name: 'Adressrad1', comment: '', include: true },
    { name: 'Adressrad2', comment: '', include: true },
    { name: 'Postadress', comment: '', include: true },
    { name: 'Anställningsnr', comment: '', include: true },
    { name: 'Regnr', comment: '', include: true },
    { name: 'Objektsid', comment: '', include: true },
    { name: 'Kost.ställe', comment: '', include: true },
    { name: 'Drm.upplägg', comment: '', include: true },
    { name: 'Bytdatum/-text', comment: '', include: true },
    { name: 'Modellkod', comment: '', include: true },
    { name: 'Redovisat förmånsvärde', comment: '', include: true },
    { name: 'Milersättning skattepliktig', comment: '', include: true },
    { name: 'Bruttolönetillägg', comment: '', include: true },
    { name: 'Personalbilsavdrag', comment: '', include: true },
    { name: 'Förmånsgrundande pris bil', comment: '', include: true },
    { name: 'Förmånsvärde skatteverket', comment: '', include: true },
    { name: 'Sociala avgifter förmånsvärde', comment: '', include: true },
    { name: 'Trängselskatt', comment: '', include: true },
    { name: 'Förmånsvärde trängselskatt', comment: '', include: true },
    { name: 'Nettolöneavdrag trängselskatt', comment: '', include: true },
    { name: 'Ersättning trängselskatt', comment: '', include: true },
    { name: 'Nettolöneavdrag Parkering', comment: '', include: true },
    { name: 'Nettolöneavdrag parkeringsböter', comment: '', include: true },
    { name: 'Nettolöneavdrag parkeringsadminavgifter', comment: '', include: true },
    { name: 'Reducerat förmånsvärde', comment: '', include: true },
    { name: 'Extrautrustning', comment: '', include: true },
    { name: 'Startdatum', comment: '', include: true },
    { name: 'Slutdatum', comment: '', include: true },
    { name: 'Parkeringsavgifter', comment: '', include: true },
    { name: 'Parkeringsböter', comment: '', include: true },
    { name: 'Förmånsvärde drivmedel', comment: '', include: true },
    { name: 'Nettolöneavdrag bil', comment: '', include: true },
    { name: 'Bruttolöneavdrag bil', comment: '', include: true },
    { name: 'Subvention personalbil', comment: '', include: true },
    { name: 'Milersättning skattefri', comment: '', include: true },
    { name: 'Tjänstemil', comment: '', include: true },
    { name: 'Privatmil', comment: '', include: true },
    { name: 'Totalmil', comment: '', include: true },
    { name: 'Periodens drivmedelstransaktioner', comment: '', include: true },
    { name: 'Tj.mil ack.', comment: '', include: true },
    { name: 'Pr.mil ack.', comment: '', include: true },
    { name: 'Tot.mil ack.', comment: '', include: true },
    { name: 'Insaldo', comment: '', include: true },
    { name: 'Utsaldo', comment: '', include: true },
    { name: 'Biltyp', comment: '', include: true },
    { name: 'Körjournalskopia epost', comment: '', include: true },
    { name: 'Epost godkänd', comment: '', include: true },
  ];

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  output: string = '';
copied: boolean = false;

generateOutput() {
  const result = this.columns.map((col, index) => ({
    ordning: index + 1,
    kolumn: col.name,
    inkludera: col.include ? 'Ja' : 'Nej'
  }));
  this.output = JSON.stringify(result, null, 2);
  this.copied = false;
}

copyOutput() {
  navigator.clipboard.writeText(this.output).then(() => {
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  });
}
}
