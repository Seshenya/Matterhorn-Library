import { Routes } from "@angular/router";

import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";

export const AdminLayoutRoutes: Routes = [
  { path: "icons", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
];
