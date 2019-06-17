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
                    <a href="index.html" data-type="index-link">ngx-admin documentation</a>
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
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' : 'data-target="#xs-components-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' :
                                            'id="xs-components-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' : 'data-target="#xs-injectables-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' :
                                        'id="xs-injectables-links-module-AppModule-bce9fc8f7bc460269fa48f4088b41a78"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-6307e2f203cfd5271c21df5e61823981"' : 'data-target="#xs-components-links-module-DashboardModule-6307e2f203cfd5271c21df5e61823981"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-6307e2f203cfd5271c21df5e61823981"' :
                                            'id="xs-components-links-module-DashboardModule-6307e2f203cfd5271c21df5e61823981"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ElectricityChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElectricityChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ElectricityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElectricityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecurityCamerasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecurityCamerasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemperatureComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemperatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemperatureDraggerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemperatureDraggerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link">DataModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DataModule-2382f6b3b1045b53bbb8a4c264f4680a"' : 'data-target="#xs-injectables-links-module-DataModule-2382f6b3b1045b53bbb8a4c264f4680a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DataModule-2382f6b3b1045b53bbb8a4c264f4680a"' :
                                        'id="xs-injectables-links-module-DataModule-2382f6b3b1045b53bbb8a4c264f4680a"' }>
                                        <li class="link">
                                            <a href="injectables/StateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MiscellaneousModule.html" data-type="entity-link">MiscellaneousModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MiscellaneousModule-04945bb1d3a6c920fe255a341ca15f90"' : 'data-target="#xs-components-links-module-MiscellaneousModule-04945bb1d3a6c920fe255a341ca15f90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MiscellaneousModule-04945bb1d3a6c920fe255a341ca15f90"' :
                                            'id="xs-components-links-module-MiscellaneousModule-04945bb1d3a6c920fe255a341ca15f90"' }>
                                            <li class="link">
                                                <a href="components/MiscellaneousComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiscellaneousComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MiscellaneousRoutingModule.html" data-type="entity-link">MiscellaneousRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-804206452146deff41c537d54951502d"' : 'data-target="#xs-components-links-module-PagesModule-804206452146deff41c537d54951502d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-804206452146deff41c537d54951502d"' :
                                            'id="xs-components-links-module-PagesModule-804206452146deff41c537d54951502d"' }>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link">PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeModule.html" data-type="entity-link">ThemeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' : 'data-target="#xs-components-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' :
                                            'id="xs-components-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutDirectionSwitcherComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutDirectionSwitcherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OneColumnLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OneColumnLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SampleLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SampleLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SwitcherComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SwitcherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeSwitcherComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeSwitcherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeSwitcherListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeSwitcherListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThreeColumnsLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThreeColumnsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TwoColumnsLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TwoColumnsLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' : 'data-target="#xs-pipes-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' :
                                            'id="xs-pipes-links-module-ThemeModule-8014315546a630e99b211a630acba0ef"' }>
                                            <li class="link">
                                                <a href="pipes/CapitalizePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CapitalizePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EvaIconsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaIconsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NumberWithCommasPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberWithCommasPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PluralPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PluralPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RoundPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimingPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimingPipe</a>
                                            </li>
                                        </ul>
                                    </li>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApiResponse.html" data-type="entity-link">ApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NbSimpleRoleProvider.html" data-type="entity-link">NbSimpleRoleProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemperatureHumidityData.html" data-type="entity-link">TemperatureHumidityData</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnalyticsService.html" data-type="entity-link">AnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link">LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateService.html" data-type="entity-link">StateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateService-1.html" data-type="entity-link">StateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemperatureHumidityService.html" data-type="entity-link">TemperatureHumidityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Camera.html" data-type="entity-link">Camera</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Electricity.html" data-type="entity-link">Electricity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElectricityChart.html" data-type="entity-link">ElectricityChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Month.html" data-type="entity-link">Month</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Temperature.html" data-type="entity-link">Temperature</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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