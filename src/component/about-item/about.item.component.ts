import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about-item',
    template: require('./about.item.component.html'),
    styles: [require('./about.item.component.css')],
})
export class AboutItemComponent {

    id: any;
    paramsSub: any;
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(){
        this.paramsSub = this.activatedRoute.params.subscribe(params => {
            this.id = parseInt(params['id'], 10);

        });
    }
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }
} 