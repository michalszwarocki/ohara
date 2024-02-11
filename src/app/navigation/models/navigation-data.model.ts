import { Data } from "@angular/router";

export interface NavigationData extends Data {
  path: string;
  isVisibleInNavigation: boolean;
  name: string;
  icon?: string;
}
