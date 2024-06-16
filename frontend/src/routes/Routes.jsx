import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/main-page/MainPage';
import { NotFound } from '../pages/not-found/NotFoundPage';
import { WorkoutPage } from '../pages/workout-page/WorkoutPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="workout/:id" element={< WorkoutPage/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
