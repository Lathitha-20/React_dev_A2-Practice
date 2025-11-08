import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";

import { EmployeeList, EmployeeEdit, EmployeeCreate } from "./resources/employees";
import { DepartmentList, DepartmentEdit, DepartmentCreate } from "./resources/departments";
import { ProjectList, ProjectEdit, ProjectCreate } from "./resources/projects";
import { AssignmentList, AssignmentEdit, AssignmentCreate } from "./resources/assignments";

const TRAILBASE_URL = "https://fantastic-rotary-phone-wr9q57gqqvjr3grq9-4000.app.github.dev/";
const { dataProvider, authProvider } = createTrailbaseProvider(TRAILBASE_URL);

function App() {
  return (
    <Admin
      loginPage={LoginPage} dataProvider={dataProvider} authProvider={authProvider}
    >
      <Resource name="employees" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate}/>
      <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate}/>
      <Resource name="projects"list={ProjectList} edit={ProjectEdit} create={ProjectCreate}/>
      <Resource name="assignments" list={AssignmentList} edit={AssignmentEdit} create={AssignmentCreate}/>

      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
