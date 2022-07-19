import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
// Complience Module Imports
import RaiseComplain from "./Pages/Complience/RaiseComplain";
import Complains from "./Pages/Complience/Complains";
import AddStatusReport from "./Pages/Complience/AddStatusReport";
import GetAllStatusReport from "./Pages/Complience/GetAllStatusReport";
// Department Module Imports
import AddDepartment from "./Pages/Department/AddDepartment";
import DeleteDepartment from "./Pages/Department/DeleteDepartment";
import GetAllDepartment from "./Pages/Department/GetAllDepartment";
// Employee module Imports
import AddEmployee from "./Components/Employee/AddEmployee";
import ListEmployee from "./Components/Employee/ListEmployee";

import Home from "./Pages/Home/Home";

test('Sign In', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});

test('Email address', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email address/i);
  expect(linkElement).toBeInTheDocument();
});

test("Home", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Employee Managment System/i);
  expect(linkElement).toBeInTheDocument();
}
);

test("Raise Complain", () => {
  render(<RaiseComplain />);
  const linkElement = screen.getAllByPlaceholderText(/Complain Type/i);
  expect(linkElement).toBeInTheDocument;
} 
);

test("Complains", () => {
  render(<Complains />);
  const linkElement = screen.getByText(/Complains/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Add Status Report", () => {
  render(<AddStatusReport />);
  const linkElement = screen.getByText(/Add Status Report/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Get All Status Report", () => {
  render(<GetAllStatusReport />);
  const linkElement = screen.getByText(/Status Report/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Add Department", () => {
  render(<AddDepartment />);
  const linkElement = screen.getByText(/Add Department/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Delete Department", () => {
  render(<DeleteDepartment />);
  const linkElement = screen.getByText(/Delete Department/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Get All Department", () => {
  render(<GetAllDepartment />);
  const linkElement = screen.getByText(/Department/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Get Employees", () => {
  render(<ListEmployee />);
  const linkElement = screen.getByText(/Employees/i);
  expect(linkElement).toBeInTheDocument;
}
);

test("Delete Department", () => {
  render(<DeleteDepartment />);
  const linkElement = screen.getByText(/Delete Department/i);
  expect(linkElement).toBeInTheDocument;
}
);