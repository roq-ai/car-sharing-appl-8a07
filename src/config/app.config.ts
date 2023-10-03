interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner', 'Customer Service Representative', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage car details', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b48d5ae7-543c-4bea-9010-1f62145f5b89',
};
