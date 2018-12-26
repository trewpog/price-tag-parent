import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommercialActivity} from '../../../shared/common/api/model/commercial-activity';
import {ItemValue} from '../../../shared/common/api/model/item-value';

@Component({
    selector: 'app-commercial-category-promotional-activity',
    templateUrl: './commercial-category-promotional-activity.component.html',
    styleUrls: ['./commercial-category-promotional-activity.component.css']
})
export class CommercialCategoryPromotionalActivityComponent implements OnInit {

    @Input() selectedNumberCols: ItemValue;
    @Input() commercialActivity: CommercialActivity;
    @Output() removeRowEvent = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        console.log('CommercialCategoryPromotionalActivityComponent - ngOnInit');
    }

    copyFirstColumnValuesToSecond() {

        if (this.commercialActivity.commercialCategoryCol1) {
            this.commercialActivity.commercialCategoryCol2 = this.commercialActivity.commercialCategoryCol1;
        } else {
            this.commercialActivity.commercialCategoryCol2 = '';
        }

        if (this.commercialActivity.currencyCol1) {
            this.commercialActivity.currencyCol2 = this.commercialActivity.currencyCol1;
        } else {
            this.commercialActivity.currencyCol2 = '';
        }

        if (this.commercialActivity.amountCol1) {
            this.commercialActivity.amountCol2 = this.commercialActivity.amountCol1;
        } else {
            this.commercialActivity.amountCol2 = +'';
        }
    }

    copySecondColumnValuesToThird() {

        if (this.commercialActivity.commercialCategoryCol2) {
            this.commercialActivity.commercialCategoryCol3 = this.commercialActivity.commercialCategoryCol2;
        } else {
            this.commercialActivity.commercialCategoryCol3 = '';
        }

        if (this.commercialActivity.currencyCol2) {
            this.commercialActivity.currencyCol3 = this.commercialActivity.currencyCol2;
        } else {
            this.commercialActivity.currencyCol3 = '';
        }

        if (this.commercialActivity.amountCol2) {
            this.commercialActivity.amountCol3 = this.commercialActivity.amountCol2;
        } else {
            this.commercialActivity.amountCol3 = +'';
        }
    }

    cleanFieldsBtn(acc) {
        console.log('CommercialCategoryPromotionalActivityComponent - cleanFieldsBtn');

        this.commercialActivity = new CommercialActivity(this.commercialActivity.idOrder);

        if (acc.isExpanded('toggle-' + this.commercialActivity.idOrder)) {
            acc.collapse('toggle-' + this.commercialActivity.idOrder);
        } else {
            acc.expand('toggle-' + this.commercialActivity.idOrder);
        }
    }

    removeOfficeBtn() {
        console.log('CommercialCategoryPromotionalActivityComponent - removeOfficeBtn');

        this.removeRowEvent.emit(this.commercialActivity.idOrder);
    }

    collapseBtn(acc) {
        console.log('CommercialCategoryPromotionalActivityComponent - collapseBtn');

        acc.collapse('toggle-' + this.commercialActivity.idOrder);
    }

    roundFinalPrice1() {

        const initialPrice = this.commercialActivity.initialPrice1;
        const discount = this.commercialActivity.discount1;

        if (initialPrice && discount) {
            if (discount >= 100) {
                this.commercialActivity.amountCol1 = 0;
            } else {
                const finalPrice = (initialPrice * discount) / 100;
                this.commercialActivity.amountCol1 = Math.round( finalPrice * 100) / 100;
            }
        }
    }

    roundFinalPrice2() {

        const initialPrice = this.commercialActivity.initialPrice2;
        const discount = this.commercialActivity.discount2;

        if (initialPrice && discount) {
            if (discount >= 100) {
                this.commercialActivity.amountCol2 = 0;
            } else {
                const finalPrice = (initialPrice * discount) / 100;
                this.commercialActivity.amountCol2 = Math.round( finalPrice * 100) / 100;
            }
        }
    }

    roundFinalPrice3() {

        const initialPrice = this.commercialActivity.initialPrice3;
        const discount = this.commercialActivity.discount3;

        if (initialPrice && discount) {
            if (discount >= 100) {
                this.commercialActivity.amountCol3 = 0;
            } else {
                const finalPrice = (initialPrice * discount) / 100;
                this.commercialActivity.amountCol3 = Math.round( finalPrice * 100) / 100;
            }
        }
    }
}