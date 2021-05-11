import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  
  
  
  export default function Sidebar() {
    return <>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  
  
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
  
  
        <hr class="sidebar-divider my-0" />
  
  
        <li class="nav-item active">
          <Link to="/Dashboard" class="nav-link">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
  
  
        <hr class="sidebar-divider" />
  
  
        <div class="sidebar-heading">
          Interface
    </div>
  
  
        <li class="nav-item">
          <Link to="/Users" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Users</span>
          </Link>
  
        </li>
  
  
        <li class="nav-item">
          <Link to='/Products' class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Products</span>
          </Link>
  
        </li>
  
  
        <hr class="sidebar-divider" />
  
  
      </ul>
  
    </>
  }