class BankAccount {
  static accountNumbers = new Set();
  constructor(Abalance) {
    let Anumber = parseInt(prompt("Enter Account Number:"));

    if (!isNaN(Anumber)) {
      if (!BankAccount.accountNumbers.has(Anumber)) {
        BankAccount.accountNumbers.add(Anumber);
        let Aname = prompt("Enter Account Name:");

        this.accountNumber = Anumber;
        this.ownerName = Aname;
        this.balance = Abalance;
        this.displayAccountInfo();
        this.getBalance();
      } else {
        console.log("Enter unique account number");
      }
    } else {
      console.log("Enter valid information");
    }
  }

  deposit() {
    let abalance = parseInt(prompt("Add Balance:"));

    return abalance;
  }

  withdrow() {
    let withdro = parseInt(prompt("withdrow the amount:"));

    return withdro;
  }

  getBalance() {
    let dp = this.deposit();
    let wd = this.withdrow();

    if (this.balance + dp >= wd) {
      let tbalance = this.balance + dp - wd;
      console.log("Balance Information:");
      console.log("Deposite Amount=", dp);
      console.log("Withdrow Amount=", wd);
      console.log("current Balance=", tbalance);
    } else {
      console.log("Insuffucuent funds");
    }
  }

  displayAccountInfo() {
    console.log("Account Information:");
    console.log("Account Number =", this.accountNumber);
    console.log("Account Name =", this.ownerName);
    console.log("Prev Balance =", this.balance);
  }
}

let c1 = new BankAccount(1000);
let c2 = new BankAccount(1300);
