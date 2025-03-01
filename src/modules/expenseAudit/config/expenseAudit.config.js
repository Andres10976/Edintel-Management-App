export const expenseAuditConfig = {
  siteName: "Liquidaciones",
  siteId:
    "edintelcr.sharepoint.com,84b29f6d-ec3a-4650-9f64-189e6069523b,74babf74-ef82-47d9-9890-dcf597ed48e3",
  driveId: "b!bZ-yhDrsUEafZBieYGlSO3S_unSC79lHmJDc9ZftSOOtDUkBilypQaGAmtUr1bmG",
  lists: {
    expenseReports: "Desglose%20liquidaciones",
    departments: "Departamento",
    roles: "Roles",
  },
};

const emailConfig = {
  supportEmail: process.env.REACT_APP_SUPPORT_EMAIL
};
export default emailConfig;