import React              from 'react';
import ReactDOM           from 'react-dom';
// Styles
import StylesButtonPage        from './demoPages/styles/StylesButtonPage';
import FormsPage               from './demoPages/styles/FormsPage';
import StylesIconsPage         from './demoPages/styles/StylesIconsPage';
import ResponsiveUtilitiesPage from './demoPages/styles/ResponsiveUtilitiesPage';
import TypographyPage          from './demoPages/styles/TypographyPage';
import StylesInputsPage        from './demoPages/styles/StylesInputsPage';
import ColorPage               from './demoPages/styles/ColorPage';
import StylesTablesPage        from './demoPages/styles/StylesTablesPage';
// Components
import ButtonPage         from './demoPages/components/ButtonPage';
import IconPage           from './demoPages/components/IconPage';
import HomePage           from './demoPages/HomePage';
import HeaderPage         from './demoPages/HeaderPage';
import InputsPage         from './demoPages/components/InputsPage';
import DropdownPage       from './demoPages/components/DropdownPage';
import FooterPage         from './demoPages/components/FooterPage';
import TabsPage           from './demoPages/components/TabsPage';
import LoadingSpinnerPage from './demoPages/components/LoadingSpinnerPage';
import StaticAlertPage    from './demoPages/components/StaticAlertPage';
import CalendarPage       from './demoPages/components/CalendarPage';
import PhoneNumberPage    from './demoPages/components/PhoneNumberPage';

import { HashRouter as Router, Route } from 'react-router-dom';

const DemoRouter = (props) => (
  <Router>
    <div>
      <HeaderPage />
        <Route path="/" exact           component={HomePage}   />
        <Route path="/styles-buttons"   component={StylesButtonPage} />
        <Route path="/forms"            component={FormsPage} />
        <Route path="/styles-icons"     component={StylesIconsPage} />
        <Route path="/responsive-utils" component={ResponsiveUtilitiesPage} />
        <Route path="/typography"       component={TypographyPage} />
        <Route path="/styles-inputs"    component={StylesInputsPage} />
        <Route path="/color"            component={ColorPage} />
        <Route path="/styles-tables"    component={StylesTablesPage} />
        <Route path="/icons"            component={IconPage}   />
        <Route path="/inputs"           component={InputsPage} />
        <Route path="/buttons"          component={ButtonPage} />
        <Route path="/dropdown"         component={DropdownPage} />
        <Route path="/footer"           component={FooterPage} />
        <Route path="/tabs"             component={TabsPage} />
        <Route path="/loadingSpinner"   component={LoadingSpinnerPage} />
        <Route path="/StaticAlert"      component={StaticAlertPage} />
        <Route path="/calendar"         component={CalendarPage} />
        <Route path="/phone-number"     component={PhoneNumberPage} />
    </div>
  </Router>
);

export default DemoRouter;
