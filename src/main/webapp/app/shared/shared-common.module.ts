import { NgModule } from '@angular/core';

import { JhipappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipappSharedCommonModule {}
