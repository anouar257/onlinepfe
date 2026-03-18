import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-billing',
  standalone: true,
  templateUrl: './parent-billing.html',
  styleUrls: ['./parent-billing.scss']
})
export class ParentBilling {
  invoices = [
    { id: 'INV-2026-11', date: '01 Nov 2026', amount: '45.00 €', status: 'Payé', file: 'inv_11.pdf' },
    { id: 'INV-2026-10', date: '01 Oct 2026', amount: '45.00 €', status: 'Payé', file: 'inv_10.pdf' },
    { id: 'INV-2026-09', date: '01 Sep 2026', amount: '45.00 €', status: 'Payé', file: 'inv_09.pdf' }
  ];
}
