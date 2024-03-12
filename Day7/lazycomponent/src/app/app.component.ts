import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lazy Loading of Component';
  constructor(private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver) {}
  async loadAdmin(){
    this.viewContainer.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent))
  }
  async loadUser(){
    this.viewContainer.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(UserlistComponent))
  }
}

