# Binance Simple Web Application

## Overview
This is a simple desktop application built using **JavaScript, Electron.js, and Binance API** to fetch real-time cryptocurrency prices. The application dynamically updates and changes the text color based on price movement:
- **Green**: Price increased
- **Red**: Price decreased
- **Yellow**: Price remained constant

## Features
- Fetches **live price data** of Bitcoin, Ethereum, and Ripple from Binance API.
- **Dynamic color changes** based on price movement.
- **Lightweight and efficient**, built with Electron.js for cross-platform support.
- Simple and user-friendly UI for real-time tracking.

## Tech Stack
- **JavaScript** - For handling logic and API integration.
- **Electron.js** - For creating the desktop application.
- **Binance API** - To fetch real-time cryptocurrency prices.

## Installation
### Prerequisites:
Make sure you have **Node.js** installed on your system.

### Steps to run the project:
1. **Clone the repository**
   ```sh
   git clone https://github.com/Chepuri-santhu/mybinance.git
   cd binance-electron-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the application**
   ```sh
   npm start
   ```

## Binance API Endpoint Used
We fetch live price data using the following Binance API endpoint:
```
https://api.binance.com/api/v3/ticker/price
```
This endpoint returns the latest market price of all listed cryptocurrencies.

## Example API Response
```json
{
  "symbol": "BTCUSDT",
  "price": "58000.12"
}
```

## How It Works
1. The application fetches real-time prices of **BTC, ETH, and XRP** every few seconds.
2. It **compares the new price with the previous price**.
3. Based on price movement:
   - If **increased**, the text color changes to **green**.
   - If **decreased**, the text color changes to **red**.
   - If **unchanged**, the text color remains **yellow**.

## Future Enhancements
- Add support for more cryptocurrencies.
- Provide real-time price charts.
- Allow users to set custom alerts.
- Dark mode UI.

## Contributing
Feel free to fork this repository, submit issues, or contribute via pull requests!

---

🚀 **Happy Trading!**

