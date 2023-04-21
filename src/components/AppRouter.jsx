import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
          exact={route.exact}
        />
      ))}
      {/* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Error />} /> */}
      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
