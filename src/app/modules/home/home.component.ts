import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/modules/header/header.component";
import { FooterComponent } from "../../shared/modules/footer/footer.component";
import { SliderComponent } from "../../shared/modules/slider/slider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SliderComponent]
})
export class HomeComponent {

}
