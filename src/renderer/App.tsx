import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import RemoveImageBackground from './pages/cards/RemoveImageBackground';
import CardPageLayout from './components/CardPageLayout';
import RemoveObject from './pages/cards/RemoveObject';
import FaceCutout from './pages/cards/FaceCutout';
import PhotoUpscaler from './pages/cards/PhotoUpscaler';
import PhotoColorizer from './pages/cards/PhotoColorizer';
import PhotoAnimer from './pages/cards/PhotoAnimer';
import PhotoColorCorrection from './pages/cards/PhotoColorCorrection';
import CartoonSelfie from './pages/cards/CartoonSelfie';
import PassportPhotoMaker from './pages/cards/PassportPhotoMaker';
import AIArtGeneration from './pages/cards/AIArtGeneration';
import BackgroundDiffusion from './pages/cards/BackgroundDiffusion';
import RemoveVideoBackground from './pages/cards/RemoveVideoBackground';
import AuthLayout from './components/AuthLayout';
import SignIn from './pages/auth/SignIn';
import Register from './pages/auth/Register';
// Import other pages...

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root path to sign-in */}
        <Route path="/" element={<Navigate to="/auth/sign-in" />} />
        {/* <Route path="/" element={<Navigate to="/main-page" />} /> */}

        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="main-page" element={<MainPage />} />
        <Route path="features" element={<CardPageLayout title={undefined} />}>
          <Route
            path="remove-image-background"
            element={<RemoveImageBackground />}
          />
          <Route
            path="remove-video-background"
            element={<RemoveVideoBackground />}
          />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="face-cutout" element={<FaceCutout />} />
          <Route path="photo-upscaler" element={<PhotoUpscaler />} />
          <Route path="photo-colorizer" element={<PhotoColorizer />} />
          <Route path="photo-animer" element={<PhotoAnimer />} />
          <Route
            path="photo-color-correction"
            element={<PhotoColorCorrection />}
          />
          <Route path="cartoon-selfie" element={<CartoonSelfie />} />
          <Route path="passport-photo-maker" element={<PassportPhotoMaker />} />
          <Route path="ai-art-generator" element={<AIArtGeneration />} />
          <Route
            path="background-diffusion"
            element={<BackgroundDiffusion />}
          />
          {/* <Route path='remove-video-background' element={<RemoveVideoBackgroundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
