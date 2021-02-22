import { NgModule } from '@angular/core';

// Angular material
import { 
    MatDialogModule, 
    MatSidenavModule, 
    MatTabsModule, 
    MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule
    ],
    exports: [
        MatSidenavModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }