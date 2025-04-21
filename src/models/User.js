
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.role = data.role;
    this.mobile = data.mobile;
    this.accountNumber = data.accountNumber;
    this.branchCode = data.branchCode;
    this.balance = data.balance;
  }

  static fromJSON(json) {
    return new User(json);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      mobile: this.mobile,
      accountNumber: this.accountNumber,
      branchCode: this.branchCode,
      balance: this.balance
    };
  }
}

export default User;
