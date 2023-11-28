const createBudget = (officeSupplies, internet, rent, utilities) => ({ officeSupplies, internet, rent, utilities });

const budget = createBudget(50, 80, 1000, 200);
console.log(budget);
