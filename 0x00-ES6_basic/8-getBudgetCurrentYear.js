const getBudgetForCurrentYear = (officeSupplies, internet, rent, utilities) => {
  const currentYear = new Date().getFullYear();

  return {
    [`${currentYear}_officeSupplies`]: officeSupplies,
    [`${currentYear}_internet`]: internet,
    [`${currentYear}_rent`]: rent,
    [`${currentYear}_utilities`]: utilities,
  };
};

const budget = getBudgetForCurrentYear(50, 80, 1000, 200);
console.log(budget);
