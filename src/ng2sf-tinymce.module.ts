import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEWidget } from "./tinymce.widget";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [TinyMCEComponent, TinyMCEWidget, TinyMCEValueAccessor],
	entryComponents: [TinyMCEWidget],
	exports: [TinyMCEWidget]
})
export class Ng2SFTinyMCEModule {}
