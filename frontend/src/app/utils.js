import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const baseUrl = 'http://localhost:8000/';
const styles = {
    height:'70px',
    width:'70px'
}
export const recentTransactionsData = [
    {
      icon:<ShoppingBagIcon style={styles}/>,
      title:'Shopping',
      text:'Buy some grocery',
      spent:'-$120',
      dateTime:'10 AM'
    },
    {
      icon:<AccountBalanceIcon style={styles}/>,
      title:'Bank Transaction',
      text:'Received from bank',
      spent:'$1200',
      dateTime:'11 AM'
    },
    {
      icon:<SubscriptionsIcon style={styles}/>,
      title:'Subscriptions',
      text:'Disney + Annual subscription',
      spent:'-$220',
      dateTime:'1:30 PM'
    },
    {
      icon:<CurrencyBitcoinIcon style={styles}/>,
      title:'BitCoin Money',
      text:'BitCoin profits received',
      spent:'$12000',
      dateTime:'2:15 PM'
    },
    {
      icon:<RestaurantIcon style={styles}/>,
      title:'Food',
      text:'Buy a biryani',
      spent:'-$10',
      dateTime:'8:30 PM'
    },
    {
      icon:<InsightsIcon style={styles}/>,
      title:'Stocks Profits',
      text:'Received stocks amount',
      spent:'$10000',
      dateTime:'10:30 PM'
    },
  ]