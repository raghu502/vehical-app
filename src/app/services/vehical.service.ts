import { Injectable } from '@angular/core';
import { Vehical } from '../model/vehical';
import { Properties } from '../model/properties';

@Injectable()
export class VehicalService {

  constructor() { }
  vehicals: Vehical[] = [
    new Vehical('Truck','white color Truck',"https://www.yyc.com/portals/0/TRAVELLER%20INFO/YYC%20LINK/YYC%20LINK%202.jpg?ver=2017-03-17-174045-540", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://accesslink.njtransit.com/FILE/Apps/Paratransit/CustomerInfo/images/Bus_NYC_skyline.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://farm5.static.flickr.com/4163/34246785596_d2ffa79ec9_b.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://farm6.static.flickr.com/5266/5630712019_d62ddde296_b.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://farm4.static.flickr.com/3952/15005219263_af516364c5_b.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://farm4.static.flickr.com/3105/5808185549_24fd975ae9_b.jpg", 
    new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"http://www.intosomerset.co.uk/application/files/6014/4552/8009/Cropped_Into_Somerset_lorry.jpg", 
    new Properties('Truck', 'white'))


  ]

  getVehicals() {
    return this.vehicals.slice();
  }
}