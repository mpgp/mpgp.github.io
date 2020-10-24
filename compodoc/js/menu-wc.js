'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MPGP Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a70609f956097dd3124f060c7b5e0708"' : 'data-target="#xs-components-links-module-AppModule-a70609f956097dd3124f060c7b5e0708"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a70609f956097dd3124f060c7b5e0708"' :
                                            'id="xs-components-links-module-AppModule-a70609f956097dd3124f060c7b5e0708"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocsModule.html" data-type="entity-link">DocsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocsModule-aae0341764848c8f06c6e432bdbc8660"' : 'data-target="#xs-components-links-module-DocsModule-aae0341764848c8f06c6e432bdbc8660"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocsModule-aae0341764848c8f06c6e432bdbc8660"' :
                                            'id="xs-components-links-module-DocsModule-aae0341764848c8f06c6e432bdbc8660"' }>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocsRoutingModule.html" data-type="entity-link">DocsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-8a390566fd74db7208f910aa939f0888"' : 'data-target="#xs-components-links-module-MainModule-8a390566fd74db7208f910aa939f0888"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-8a390566fd74db7208f910aa939f0888"' :
                                            'id="xs-components-links-module-MainModule-8a390566fd74db7208f910aa939f0888"' }>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c045508fec554a4f1a81dc56cb7ceedb"' : 'data-target="#xs-components-links-module-SharedModule-c045508fec554a4f1a81dc56cb7ceedb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c045508fec554a4f1a81dc56cb7ceedb"' :
                                            'id="xs-components-links-module-SharedModule-c045508fec554a4f1a81dc56cb7ceedb"' }>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecModule.html" data-type="entity-link">SpecModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' : 'data-target="#xs-components-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' :
                                            'id="xs-components-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' }>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSidenavContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainSidenavContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' : 'data-target="#xs-injectables-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' :
                                        'id="xs-injectables-links-module-SpecModule-450e764a6f71ec737a5e99d641590e63"' }>
                                        <li class="link">
                                            <a href="injectables/SpecService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SpecService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecRoutingModule.html" data-type="entity-link">SpecRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DocsConclusionComponent.html" data-type="entity-link">DocsConclusionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsDevelopmentComponent.html" data-type="entity-link">DocsDevelopmentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsIntroductionComponent.html" data-type="entity-link">DocsIntroductionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsOverviewComponent.html" data-type="entity-link">DocsOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsReferencesComponent.html" data-type="entity-link">DocsReferencesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsRootComponent.html" data-type="entity-link">DocsRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocsTheoryComponent.html" data-type="entity-link">DocsTheoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecActionComponent.html" data-type="entity-link">SpecActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecActionTabsComponent.html" data-type="entity-link">SpecActionTabsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecChipComponent.html" data-type="entity-link">SpecChipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecCodeComponent.html" data-type="entity-link">SpecCodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecModuleComponent.html" data-type="entity-link">SpecModuleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecRootComponent.html" data-type="entity-link">SpecRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecSchemaSelectComponent.html" data-type="entity-link">SpecSchemaSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecTabErrorComponent.html" data-type="entity-link">SpecTabErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecTabFieldsComponent.html" data-type="entity-link">SpecTabFieldsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecTabSuccessComponent.html" data-type="entity-link">SpecTabSuccessComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CacheService.html" data-type="entity-link">CacheService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Field.html" data-type="entity-link">Field</a>
                            </li>
                            <li class="link">
                                <a href="classes/FieldValidator.html" data-type="entity-link">FieldValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigateEvent.html" data-type="entity-link">NavigateEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServerMessage.html" data-type="entity-link">ServerMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServerMessageResponse.html" data-type="entity-link">ServerMessageResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CacheContent.html" data-type="entity-link">CacheContent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});