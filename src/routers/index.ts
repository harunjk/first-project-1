import { Router } from 'express';
import { StudentRouts } from '../app/mudoles/student/student.routs';
import { UserRouter } from '../app/mudoles/user/user.rout';
import { AcademicSemesterRoutes } from '../app/mudoles/academicSemester/academicSemester.route';
import { AcademicFacultyRouters } from '../app/mudoles/academicFaculty/academicFaculty.rout';
import { AcademicDepartmentRouter } from '../app/mudoles/academicDepartment/academicDepartment.rout';

const router = Router();

const mudoleRouter = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/students',
    route: StudentRouts,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRouters,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRouter,
  },
];

mudoleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
