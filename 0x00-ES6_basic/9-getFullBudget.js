const getFullBudgetObject = (officeSupplies, internet, rent, utilities) => {
  const currentYear = new Date().getFullYear();

  const fullBudget = {
    [`${currentYear}_officeSupplies`]: officeSupplies,
    [`${currentYear}_internet`]: internet,
    [`${currentYear}_rent`]: rent,
    [`${currentYear}_utilities`]: utilities,

    // ES6 method properties
    calculateTotal() {
      return this[`${currentYear}_officeSupplies`] +
             this[`${currentYear}_internet`] +
             this[`${currentYear}_rent`] +
             this[`${currentYear}_utilities`];
    },

    printBudgetSummary() {
      console.log(`Total budget for ${currentYear}: $${this.calculateTotal()}`);
    },
  };

  return fullBudget;
};

// Example usage:
const budget = getFullBudgetObject(50, 80, 1000, 200);
budget.printBudgetSummary();

