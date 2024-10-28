export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  companyName: string;
  phoneNumber: string;
  navigation: NavigationItem[];
}
