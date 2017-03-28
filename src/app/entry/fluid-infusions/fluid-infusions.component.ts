import { Component, OnInit } from '@angular/core';
import { DextroseConcentration } from "./dextrose-concentration";
import { FluidInfusionsService } from "./fluid-infusions.service";
import { FluidInfusion } from "./fluid-infusion";


@Component({
  selector: 'app-fluid-infusions',
  templateUrl: './fluid-infusions.component.html',
  styleUrls: ['./fluid-infusions.component.css']
})
export class FluidInfusionsComponent implements OnInit {
  concentrations: DextroseConcentration[] = new Array();
  currentDc: DextroseConcentration = new DextroseConcentration();
  currentVolume: number;
  fluidInfusion: FluidInfusion;
  fluidInfusions: FluidInfusion[] = new Array(); 
  
  errorMessage: any;

  constructor(private _fiService:FluidInfusionsService) { }

  ngOnInit() {
    this._fiService.getDextroseConcentrations()
      .subscribe(
        dcs => this.concentrations = dcs,
        error => this.errorMessage = <any>error);
  }

  onSelectChange(event){
    console.log("onSelectChange -event:", event.target.value);
    console.log("currentDc:", this.currentDc);
  }

  onAdd(){
    this.fluidInfusion = new FluidInfusion();
    this.fluidInfusion.calEntriesId = 1 //todo - need actual id here
    this.fluidInfusion.dextroseConcentrationId = this.currentDc.id;
    this.fluidInfusion.volume = this.currentVolume;
    console.log("onAdd - fluid infusion:", this.fluidInfusion);

    this.fluidInfusions.push(this.fluidInfusion);

  }

  onRemove(fl:FluidInfusion){
    console.log("onRemove:", fl);
  }

}
