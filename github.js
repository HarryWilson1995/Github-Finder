class GitHub {
  constructor() {
    this.client_id = "f486df3d0649f668256f";
    this.client_secret = "14a94cf209d5d1f097b1582dc3556c177f113a12";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
