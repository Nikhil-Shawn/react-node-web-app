import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaUserAlt, FaBox, FaShoppingCart, FaTruck, FaCog, FaSignOutAlt, FaBell, FaMoon, FaSun } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import GlobalStyles from '../components/GlobalStyles';
import { lightTheme, darkTheme } from '../components/Themes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../redux/userSlice';
import { userRequest } from '../requestmethod';

const MainDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const user = useSelector(state => state.user.currentUser?.username);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userRequest.get('/auth/user');
        const usersArray = Object.values(response.data); // Convert the object to an array
        setUsers(usersArray); // Set the array to state
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/transactions');
        setTransactions(response.data);
      } catch (err) {
        console.error('Failed to fetch transactions:', err);
      }
    };

    fetchUsers();
    fetchTransactions();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Sidebar>
          <Logo>Nik Admin Panel</Logo>
          <NavItem><FaUserAlt /> Users</NavItem>
          <NavItem><FaBox /> Products</NavItem>
          <NavItem><FaShoppingCart /> Orders</NavItem>
          <NavItem><FaTruck /> Delivery</NavItem>
          <NavItem><BsGraphUp /> Stats</NavItem>
          <NavItem><FaBell /> Notifications</NavItem>
          <NavItem><FaCog /> System Health</NavItem>
          <NavItem><FaCog /> Logs</NavItem>
          <NavItem><FaCog /> Settings</NavItem>
          <NavItem><FaUserAlt /> Profile</NavItem>
          <NavItem onClick={handleLogout}><FaSignOutAlt /> Logout</NavItem>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </Sidebar>
        <MainContent>
          <TopBar>
            <SearchInput placeholder="Search..." />
            <NotificationIcons>
              <h4><b>{user}</b></h4>
              <FaBell />
            </NotificationIcons>
          </TopBar>
          <Dashboard>
            <Widget>
              <h3>Users</h3>
              <h1>720</h1>
            </Widget>
            <Widget>
              <h3>Orders</h3>
              <h1>260</h1>
            </Widget>
            <Widget>
              <h3>Earnings</h3>
              <h1>$4.6k</h1>
            </Widget>
            <Widget>
              <h3>My Balance</h3>
              <h1>$7.8k</h1>
            </Widget>
          </Dashboard>

          {/* Wrapper for New Users and Latest Transactions side by side */}
          <FlexWrapper>
            {/* New Users Section */}
            <NewUsersSection>
              <h3>New Join Members</h3>
              <UsersList>
  {Array.isArray(users) && users.length > 0 ? (
    users.map(user => (
      <UserItem key={user.id}>
        <FaUserAlt />
        <span>{user.username}</span>
        <DisplayButton>Display</DisplayButton>
      </UserItem>
    ))
  ) : (
    <p>No users found</p>
  )}
</UsersList>

            </NewUsersSection>

            {/* Latest Transactions Section */}
            <LatestTransactionsSection>
              <h3>Latest Transactions</h3>
              <TransactionsTable>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.customer}</td>
                      <td>{new Date(transaction.date).toLocaleString()}</td>
                      <td>${transaction.amount}</td>
                      <td>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </TransactionsTable>
            </LatestTransactionsSection>
          </FlexWrapper>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default MainDashboard;

/* Styles */
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
`;

const NavItem = styled.div`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 5px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.text};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
`;

const NotificationIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Widget = styled.div`
  background-color: ${({ theme }) => theme.widgetBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};

  h3 {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 32px;
  }
`;

const ThemeToggle = styled.div`
  font-size: 24px;
  margin-top: auto;
  cursor: pointer;
  align-self: center;
`;

/* New Flex Wrapper to align sections side by side */
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

/* New Users Section Styles */
const NewUsersSection = styled.div`
  flex: 1; /* Take up equal space with the Latest Transactions section */
  margin-right: 20px;
`;

const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.widgetBg};
  border-radius: 5px;

  & svg {
    margin-right: 10px;
  }
`;

const DisplayButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

/* Latest Transactions Section */
const LatestTransactionsSection = styled.div`
  flex: 2; /* Take up more space than the New Users section */
`;

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.widgetBg};
  border-radius: 5px;

  th, td {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.tableHeaderBg};
  }
`;
