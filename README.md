# angular2-polymer-integration-rc5

Project that aims to reproduce the problem encountered within the new release of angular2 (angular2@rc5) 
and the use of vaadin directive (vaadin/angular2-polymer)

The property of paper-input seeems not to be recognized properly (whereas everything is working fine in angular2@rc4)

>zone.js:461 Unhandled Promise rejection: Template parse errors:
Can't bind to 'invalid' since it isn't a known property of 'paper-input'.
1. If 'paper-input' is an Angular component and it has 'invalid' input, then verify that it is part of this module.
2. If 'paper-input' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message.
 ("    <paper-input  id="code" formControlName="code" label="code" ngDefaultControl
                   [ERROR ->][invalid]="true"
                   [errorMessage]="error"
                   required maxlength="3" "): PolyAppComponent@15:19
Can't bind to 'errorMessage' since it isn't a known property of 'paper-input'.
1. If 'paper-input' is an Angular component and it has 'errorMessage' input, then verify that it is part of this module.
2. If 'paper-input' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message.
 ("rolName="code" label="code" ngDefaultControl
                   [invalid]="true"
                   [ERROR ->][errorMessage]="error"
                   required maxlength="3" char-counter ></paper-input>
