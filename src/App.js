import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import {
  ImHome,
  ImPieChart,
  ImCart,
  ImCancelCircle,
  ImCoinDollar,
  ImArrowUp2,
} from 'react-icons/im';

import './style.css';
import Sidebar from './components/UI/Sidebar/Sidebar';
import ContainerHome from './components/UI/ContainerHome/ContainerHome';
import ColumnOrders from './components/UI/ColumnOrders/ColumnOrders';
import Columm from './components/UI/Columm/Columm';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import Button from './components/Button/Button';
import CardExtra from './components/CardExtra/CardExtra';
import CardOrder from './components/CardOrder/CardOrder';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Sidebar>
        <nav className="header">
          <Link to="/">
            <div className="containerButtons">
              <ImHome />
            </div>
          </Link>

          <Link to="/about">
            <div className="containerButtons">
              <ImCart />
            </div>
          </Link>

          <Link to="/dashboard">
            <div className="containerButtons">
              <ImPieChart />
            </div>
          </Link>

          <Link to="/nothing-here">
            <div className="containerButtonsExit">
              <ImCancelCircle />
            </div>
          </Link>
        </nav>
      </Sidebar>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <ContainerHome>
        <div className="title-container">
          <h1>Home</h1>
          <div className="menu-content">
            <div className="menu">Entradas</div>
            <div className="menu">Bebidas</div>
            <div className="menu">Pratos</div>
          </div>
        </div>
        <div className="body-list">
          <Card>
            <div className="productImg">
              <img src="https://lh3.googleusercontent.com/p/AF1QipPPtbkULVpHYKXNjo3jl1oANyIFKAGGXtqMzwX9=w768-h768-n-o-v1" />
            </div>
            <h4>Balde de Cerveja heineken</h4>
            <span>
              06 Long Neck cerveja Heineken (garrafas 330ml cada)01 Balde de
              alumínio
            </span>
            <h1>R$ 50,00</h1>
            <Button>Adicionar ao Pedido</Button>
          </Card>
        </div>
      </ContainerHome>
      <Columm>
        <ColumnOrders />
      </Columm>
    </div>
  );
}

function About() {
  return (
    <div>
      <ContainerHome></ContainerHome>
      <Columm>
        <CardExtra />
        <CardExtra />
      </Columm>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <ContainerHome>
        <div className="title-container">
          <h1>Dashboard</h1>
        </div>
        <div className="flat-list">
          <Card height={{ height: 143 }}>
            <div className="headerCard">
              <div className="iconsStyle">
                <ImCoinDollar size={28} />
              </div>
              <span>+50%</span>
              <div className="arrowUp">
                <ImArrowUp2 />
              </div>
            </div>
            <div className="contentCard">
              <h1>R$ 1.000,00</h1>
              <span>Total de Pedidos</span>
            </div>
          </Card>
        </div>
        <CardOrder>
          <div className="title-container_order">
            <h4>Orders</h4>
          </div>
          <div>
            <Table />
          </div>
        </CardOrder>
      </ContainerHome>

      <Columm>
        <CardExtra />
        <CardExtra />
      </Columm>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>EXIT</h2>
    </div>
  );
}
